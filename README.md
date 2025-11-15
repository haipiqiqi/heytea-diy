# heytea-diy
喜茶免抓包自定义喜帖上传

## 📺 项目简介
喜茶免抓包自定义喜帖上传

本软件仅供学习交流使用，不得用于任何非法用途。

请合理使用，禁止用于违法用途。

使用者应遵守相关法律法规，承担使用本软件产生的一切后果。

开发者不对因使用本软件而产生的任何损失或法律责任负责。

## ⏬ 运行方式一：本地包下载
前往 [发布页release](https://github.com/Ssoutnn/heytea-diy/releases/tag/beta) 下载对应文件运行

本方式最简单，但需要电脑操作

## 📋 运行方式二：Cloudflare Pages（推荐）

1. 在本页面点击Fork 克隆本仓库到您的 GitHub 账户

2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   
   进入 Pages 服务（左侧Build-> Compute&AI -> Workers&AI)
3. 点击"Create Application 创建项目"，选择Pages，选择Import an existing Git repository，连接您的 GitHub 仓库

4. 使用以下设置：
   - 都使用默认配置
   - Build configuration里输出目录Build output填写：public

5. 点击"保存并部署"


## 🚀 运行方式三：在线运行
可以直接在 GitHub 上运行可视化版本( 对网络连通性要求很高 )

运行方式: 本界面右上角 Use this template -> Open in a codespace

之后等待 Codespace 初始化完成， 启动后会自动安装一些环境依赖

过程可能会比较久， 请耐心等待

等网页编辑器初始化完成后，终端执行会自动执行 npm start

(1)此时浏览器右下角会弹出提示，点击在浏览器中打开

(2)或者在页面中下方，点击终端右边的端口tab，点击转发地址

即可使用可视化操作页面


## 🚀 运行方式四：快速部署

选择以下平台，点击一键部署按钮，即可快速创建自己的实例，有时候部署的节点会被墙：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSsoutnn%2Fheytea-diy)

或者访问 https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSsoutnn%2Fheytea-diy

## 🚀 其他快速部署方式
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ssoutnn/heytea-diy)  

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Ssoutnn/heytea-diy)

## 🏠 运行方式五：本地源码部署

第一步：下载安装Node.js（搭建基础环境）

1. 下载安装包：打开浏览器访问Node.js官网，直接点击LTS版的Windows安装包下载即可，macOS也可选择对应的.pkg安装包。最好下载24.11.1版本，理论上其他版本也可。
   
2. 运行安装程序：找到下载好的文件双击打开并安装。

3. 验证安装成功：
   Windows系统：按下Win+R，输入cmd回车打开命令提示符，依次输入node -v和npm -v，若都能显示版本号，就说明安装成功。
   Mac系统：按下键盘快捷键Command + 空格调出聚焦搜索框，输入 “终端”，搜索结果中会直接显示终端 App，按下回车键就能快速打开。
            打开终端，输入 node -v 和 npm -v 查看版本，确认安装成功。

第二步：找到并进入项目文件夹

1. 准备项目文件：点击上方绿色Code按钮-> Local -> Download ZIP，下载代码压缩包，解压到容易找到位置。

2. 进入项目目录：打开解压后的项目文件夹，点击文件窗口顶部地址栏，直接输入cmd后回车，会自动打开命令提示符并定位到当前项目目录。

第三步：安装依赖并启动项目

1. 安装项目依赖：
   Windows系统：在当前项目的命令提示符窗口中，输入npm install，回车后等待安装。完成后会自动生成node_modules文件夹，存放项目所需的所有依赖。
   Mac系统：右键文件所在的文件夹-> 服务-> 新建位于文件夹所在位置的终端窗口，输入npm install，回车后等待安装。

2.启动项目：输入npm start回车。

3.验证项目运行：启动成功后，终端会显示访问地址，复制这个地址粘贴到浏览器，能打开项目页面就说明成功。

## 🚨 重要声明

- 本项目仅供学习和个人使用
- 请勿将部署的实例用于商业用途或公开服务
- 如因公开分享导致的任何法律问题，用户需自行承担责任
- 项目开发者不对用户的使用行为承担任何法律责任



