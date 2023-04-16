# vercel-openai-azure-proxy

<a href="./README_en.md">English</a> |
<a href="./README.md">中文</a>

> 大多数 OpenAI 客户端不支持 Azure OpenAI Service，但Azure OpenAI Service的申请和绑卡都非常简单，并且还提供了免费的额度。此脚本使用免费的Vercel作为代理，使得支持 OpenAI 的客户端可以直接使用 Azure OpenAI Service。

代理 OpenAI 的请求到 Azure OpenAI Serivce，部署步骤：

1. 登陆vercel连接Github账户
2. 创建项目导入git项目
3. 创建环境变量
   
   ```Shell
   RESOURCE_NAME_GPT4  // openai服务资源名称
   RESOURCE_NAME_GPT35 // openai服务资源名称
   DEPLOY_NAME_GPT4    // 部署的GPT4模型名称
   DEPLOY_NAME_GPT35   // 部署的GPT3.5模型名称
   ```
4. 部署完成也可以添加自定义域名，修改cname可实现直接访问

项目fork自 [cf-openai-azure-proxy](https://github.com/haibbo/cf-openai-azure-proxy), 部署到vercel也是由于[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)项目的启发