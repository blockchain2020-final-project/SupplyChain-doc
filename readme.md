# SupplyChain 
基于区块链的供应链平台

| 专业             | 学号     | 姓名   | 分工     |
| ---------------- | -------- | ------ | -------- |
| 软件工程         | 18342001 | 白家栋 | 后端实现 |
| 软件工程         | 18342005 | 曹鉴恩 | 前端实现 |
| 计算机科学与技术 | 18340045 | 关雅雯 | 链端实现 |

### 前端
https://github.com/blockchain2020-final-project/SupplyChain-frontend
- 语言: Vue 2.x
- 框架: @vue/cli 4.5.11
- 界面库: ant-design-vue
- 网络请求组件: nodejs-axios

### 后端
https://github.com/blockchain2020-final-project/SupplyChain-backend
使用了轻量级的 koa2 框架，同时基于 fisco-bcos 官方提供的 nodejs-sdk，实现了与链端的高效适配和调用，以及和前端的沟通。

### 链端
https://github.com/blockchain2020-final-project/SupplyChain-contract
主要功能：
- 角色认证
- 管理员宏观调控系统总借贷
- 银行授信核心企业
- 交易
- 融资（贷款）
- 还款：交易、融资
- 数字签名
- 电子钱包

### 文档
https://github.com/blockchain2020-final-project/SupplyChain-doc
- api-doc 为后端api文档
- report 为实验报告




