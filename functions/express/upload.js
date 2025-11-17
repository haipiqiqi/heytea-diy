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
        const formData = await request.formData();
        const width = formData.get("width");
        const height = formData.get("height");
        const sign = formData.get("sign");
        const t = formData.get("t");
        const token = formData.get("token");

        const url = `https://app-go.heytea.com/api/service-cps/user/diy?sign=${sign}&t=${t}`;
        const headers = {
            'Authorization': token
        };
        const file = formData.get("file");
        if (!file || !sign || !t || !token) {
            return responseMsg('Missing required parameters');
        }
        // 构造 FormData
        const form = new FormData();
        form.append('file', file, `${t}.png`);
        form.append('width', width);
        form.append('height', height);
        // 发送请求
        const getResponse = await fetch(url, {
            method: "POST",
            headers: headers,
            body: form,
            signal: AbortSignal.timeout(60000)
        });
        if (!getResponse.ok) {
            return responseMsg(`请求失败: ${getResponse.status}`);
        }
        const getData = await getResponse.json();
        return new Response(JSON.stringify(getData), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return responseMsg(`请求出错: ${err.message}`);
    }
}
