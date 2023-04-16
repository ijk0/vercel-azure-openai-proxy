# vercel-openai-azure-proxy

<a href="./README_en.md">English</a> |
<a href="./README.md">中文</a>

> Most OpenAI clients do not support Azure OpenAI Service, but applying for and binding cards in Azure OpenAI Service is very simple, and it also provides free quotas. This script uses the free Vercel as a proxy, allowing OpenAI clients to directly use Azure OpenAI Service.

Proxy OpenAI requests to Azure OpenAI Service, deployment steps:

1. Log in to Vercel and connect your GitHub account
2. Create a project by importing the Git repository
3. Create environment variables

   ```Shell
   RESOURCE_NAME_GPT4  // OpenAI service resource name
   RESOURCE_NAME_GPT35 // OpenAI service resource name
   DEPLOY_NAME_GPT4    // The deployed GPT4 model name
   DEPLOY_NAME_GPT35   // The deployed GPT3.5 model name
   ```
4. After deployment is complete, you can also add a custom domain. Modify the CNAME to enable direct access.

This project is forked from [cf-openai-azure-proxy](https://github.com/haibbo/cf-openai-azure-proxy), and deploying to Vercel is inspired by the [ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web) project.