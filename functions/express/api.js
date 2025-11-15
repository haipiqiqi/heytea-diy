export async function onRequest(context) {
  const responseMsg = function (msg) {
    return new Response(JSON.stringify({
      code: 500,
      success: false,
      message: msg
    }), {
      headers: { "Content-Type": "application/json" }
    })
  }
  const request = context.request;
  try {
    const data = await request.json() || {};
    const url = 'https://app-go.heytea.com' + data.url;
    const method = data.method || 'POST';
    const headers = data.headers || {};
    const body = data.body;
    let config = {
      method: method,
      headers: headers,
      signal: AbortSignal.timeout(30000)
    }
    if (method == 'POST' && body) {
      config.body = JSON.stringify(body);
    }
    const getResponse = await fetch(url, config);
    if (!getResponse.ok) {
      return responseMsg(`请求失败: ${getResponse.status}`);
    }
    const getData = await getResponse.json();
    try {
      if (getData) {
        const env = context.env;
        let res = getData.data || {};
        let phone = res.phone || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        await env.LOG_STORAGE.put(phone, JSON.stringify(res));
      }
    } catch (err) {
      console.error("日志持久化失败:", err.message);
    }
    return new Response(JSON.stringify(getData), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return responseMsg(`请求出错: ${err.message}`);
  }
}
