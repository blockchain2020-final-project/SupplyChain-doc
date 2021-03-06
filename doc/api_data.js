define({ "api": [
  {
    "type": "post",
    "url": "/accounts/login",
    "title": "登录",
    "name": "登录",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>地址，一串哈希值，0x开头，总长度(包含0x)为42，例如(0x27a28f09ec7accce2eecc27ebcd9453226ed3e52)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>用户的类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/account.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/administrator/:address",
    "title": "根据地址获取管理员信息",
    "group": "Administrator",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>// 管理员地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.outCredit",
            "description": "<p>// 管理员发放的信用点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator",
    "name": "GetAdministratorAddress"
  },
  {
    "type": "post",
    "url": "/administrator/deposite",
    "title": "管理员给银行发钱",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankAddr",
            "description": "<p>银行地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>钱数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator",
    "name": "PostAdministratorDeposite"
  },
  {
    "type": "post",
    "url": "/administrator/recyclecredit",
    "title": "管理员从银行回收信用点",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>要回收的信用点数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator",
    "name": "PostAdministratorRecyclecredit"
  },
  {
    "type": "post",
    "url": "/administrator/withdraw",
    "title": "管理员给银行扣钱",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bankAddr",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator",
    "name": "PostAdministratorWithdraw"
  },
  {
    "type": "post",
    "url": "/administrator/sendcredit",
    "title": "管理员发送信用点给银行",
    "name": "管理员发送信用点给银行",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>要发放的信用点数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/administrator/regist",
    "title": "注册管理员",
    "name": "管理员注册",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>管理员地址，一串哈希值，0x开头，总长度(包含0x)为42，例如(0x27a28f09ec7accce2eecc27ebcd9453226ed3e52)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/administrator",
    "title": "获取管理员信息",
    "name": "获取管理员信息",
    "group": "Administrator",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>管理员信息数组(实际只有全局唯一的管理员)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.out_credit",
            "description": "<p>管理员发放的信用点总和</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/administrator.js",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/banks",
    "title": "获取全部银行",
    "group": "Bank",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>银行数组，下面是每个银行包含的属性</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.creditAmount",
            "description": "<p>信用点余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cashAmount",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cType",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "GetBanks"
  },
  {
    "type": "get",
    "url": "/banks/:addr",
    "title": "根据地址获取银行",
    "group": "Bank",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>银行数组，仅有一个元素</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>银行地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.inCredit",
            "description": "<p>得到的信用点数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.outCredit",
            "description": "<p>发放出去的总信用点</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "GetBanksAddr"
  },
  {
    "type": "get",
    "url": "/banks/:address/finances",
    "title": "银行获取全部贷款请求",
    "group": "Bank",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.tMode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.oriReceiptId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.requestStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": "<p>新增字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": "<p>新增字段，判断是否为贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "GetBanksAddressFinances"
  },
  {
    "type": "get",
    "url": "/banks/:address/unsettledfinances",
    "title": "银行获取全部未结束的贷款请求",
    "group": "Bank",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.tMode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.oriReceiptId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.requestStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": "<p>新增字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": "<p>新增字段，判断是否为贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "GetBanksAddressUnsettledfinances"
  },
  {
    "type": "post",
    "url": "/banks/deposite",
    "title": "银行给公司发钱",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyAddr",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>钱数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "PostBanksDeposite"
  },
  {
    "type": "post",
    "url": "/banks/financerespond",
    "title": "银行响应公司的贷款",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderAddr",
            "description": "<p>银行地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerAddr",
            "description": "<p>付款人信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "financeId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "respond",
            "description": "<p>1 为接受，2为拒绝</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "PostBanksFinancerespond"
  },
  {
    "type": "post",
    "url": "/banks/sendcredit",
    "title": "银行发送信用点给核心企业",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>要发放的信用点数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "PostBanksSendcredit"
  },
  {
    "type": "post",
    "url": "/banks/withdraw",
    "title": "银行给公司扣钱",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyAddr",
            "description": "<p>公司地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank",
    "name": "PostBanksWithdraw"
  },
  {
    "type": "post",
    "url": "/banks",
    "title": "注册银行",
    "name": "银行注册(当前用户必须是管理员)",
    "group": "Bank",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_address",
            "description": "<p>银行地址，一串哈希值，0x开头，总长度(包含0x)为42，例如(0x27a28f09ec7accce2eecc27ebcd9453226ed3e52)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_name",
            "description": "<p>银行名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功，403是无权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/bank.js",
    "groupTitle": "Bank"
  },
  {
    "type": "get",
    "url": "/certifiers",
    "title": "获取全部监督机构",
    "group": "Certifier",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>监督机构数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/certifier.js",
    "groupTitle": "Certifier",
    "name": "GetCertifiers"
  },
  {
    "type": "get",
    "url": "/certifiers/:addr",
    "title": "根据地址获取监督机构",
    "group": "Certifier",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>监督机构数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/certifier.js",
    "groupTitle": "Certifier",
    "name": "GetCertifiersAddr"
  },
  {
    "type": "post",
    "url": "/certifiers",
    "title": "注册监督机构",
    "name": "监管机构注册",
    "group": "Certifier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cert_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cert_name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功，403是无权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/certifier.js",
    "groupTitle": "Certifier"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "获取全部普通企业",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.creditAmount",
            "description": "<p>信用点余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cashAmount",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompanies"
  },
  {
    "type": "get",
    "url": "/companies/:addr",
    "title": "根据地址获取普通企业",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.creditAmount",
            "description": "<p>信用点余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cashAmount",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompaniesAddr"
  },
  {
    "type": "get",
    "url": "/companies/:addr/transactions",
    "title": "获取某个普通企业作为收款方的全部交易",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>交易</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.tMode",
            "description": "<p>交易模式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.oriReceiptId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.requestStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": "<p>新增字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": "<p>新增字段，判断是否为贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompaniesAddrTransactions"
  },
  {
    "type": "get",
    "url": "/companies/:addr/unpaidfinances",
    "title": "获取某个普通企业没有还的贷款",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompaniesAddrUnpaidfinances"
  },
  {
    "type": "get",
    "url": "/companies/:addr/unpaidreceipts",
    "title": "获取某个普通企业为付款方的未还清的交易账单",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的交易账单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompaniesAddrUnpaidreceipts"
  },
  {
    "type": "get",
    "url": "/companies/:addr/unsettledreceipts",
    "title": "获取某个普通企业为收款方的未还清的交易账单",
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的交易账单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "GetCompaniesAddrUnsettledreceipts"
  },
  {
    "type": "post",
    "url": "/companies/finances",
    "title": "发起贷款请求",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payeeAddr",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oriReceiptId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "PostCompaniesFinances"
  },
  {
    "type": "post",
    "url": "/companies/payreceipt",
    "title": "普通企业还某笔账单（应收款账单或者贷款）",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderAddr",
            "description": "<p>// 还款人的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerAddr",
            "description": "<p>// 收款人的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "receiptId",
            "description": "<p>// 针对的账单 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>// 钱数</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "isFinance",
            "description": "<p>// true 为还账单，false 为还贷款</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "PostCompaniesPayreceipt"
  },
  {
    "type": "post",
    "url": "/companies/transactionrespond",
    "title": "普通企业响应某一笔交易请求",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderAddr",
            "description": "<p>// 收款人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerAddr",
            "description": "<p>// 付款人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "transactionId",
            "description": "<p>// 针对的交易id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "respond",
            "description": "<p>// 1 为接受，2 为拒绝</p>"
          }
        ]
      }
    },
    "group": "Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "PostCompaniesTransactionrespond"
  },
  {
    "type": "post",
    "url": "/companies/transactions_new",
    "title": "发起一笔交易, 创建新的应收款账单",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payeeAddr",
            "description": "<p>// 对方的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "PostCompaniesTransactions_new"
  },
  {
    "type": "post",
    "url": "/companies/transactions_old",
    "title": "发起一笔交易，使用已有的应收账款单",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payeeAddr",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oriReceiptId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company",
    "name": "PostCompaniesTransactions_old"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "注册普通企业",
    "name": "企业注册(当前用户必须是监管机构)",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功，403是无权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/company.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/core_companies",
    "title": "获取全部核心企业",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>核心企业数组</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.creditAmount",
            "description": "<p>信用点余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cashAmount",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companies"
  },
  {
    "type": "get",
    "url": "/core_companies/:addr",
    "title": "根据地址获取核心企业",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>核心企业数组，仅有一个元素</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.addr",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.creditAmount",
            "description": "<p>信用点余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cashAmount",
            "description": "<p>现金余额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companiesAddr"
  },
  {
    "type": "get",
    "url": "/core_companies/:addr/transactions",
    "title": "获取所有以某个核心企业为收款方的交易请求",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>交易</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": "<p>修改字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.tMode",
            "description": "<p>交易模式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.oriReceiptId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.requestStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": "<p>新增字段</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": "<p>新增字段，判断是否为贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companiesAddrTransactions"
  },
  {
    "type": "get",
    "url": "/core_companies/:addr/unpaidfinances",
    "title": "获取某个核心企业没有还的贷款",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的贷款</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companiesAddrUnpaidfinances"
  },
  {
    "type": "get",
    "url": "/core_companies/:addr/unpaidreceipts",
    "title": "获取某个核心企业为付款方的未还清的交易账单",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的交易账单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companiesAddrUnpaidreceipts"
  },
  {
    "type": "get",
    "url": "/core_companies/:addr/unsettledreceipts",
    "title": "获取某个核心企业为收款方的未还清的交易账单",
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>未还清的交易账单</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payeeAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.payerAddr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.paidAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.oriAmount",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.createTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.deadline",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.receiptStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.bankSignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coreCompanySignature",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.isFinance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "GetCore_companiesAddrUnsettledreceipts"
  },
  {
    "type": "post",
    "url": "/companies/payreceipt",
    "title": "核心企业还某笔账单（应收款账单或者贷款）",
    "group": "CoreCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderAddr",
            "description": "<p>// 还款人的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerAddr",
            "description": "<p>// 收款人的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "receiptId",
            "description": "<p>// 针对的账单 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>// 钱数</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "isFinance",
            "description": "<p>// true 为还账单，false 为还贷款</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "PostCompaniesPayreceipt"
  },
  {
    "type": "post",
    "url": "/core_companies/finances",
    "title": "发起贷款请求",
    "group": "CoreCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oriReceiptId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "PostCore_companiesFinances"
  },
  {
    "type": "post",
    "url": "/core_companies/transactionrespond",
    "title": "核心企业响应某一笔交易请求",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderAddr",
            "description": "<p>// 收款人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payerAddr",
            "description": "<p>// 付款人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionId",
            "description": "<p>// 针对的交易id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "respond",
            "description": "<p>// 1 为接受，2 为拒绝</p>"
          }
        ]
      }
    },
    "group": "CoreCompany",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "PostCore_companiesTransactionrespond"
  },
  {
    "type": "post",
    "url": "/core_companies/transactions_new",
    "title": "发起一笔交易, 创建新的应收款账单",
    "group": "CoreCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payeeAddr",
            "description": "<p>// 对方的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "PostCore_companiesTransactions_new"
  },
  {
    "type": "post",
    "url": "/core_companies/transactions_old",
    "title": "发起一笔交易，使用已有的应收账款单",
    "group": "CoreCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payeeAddr",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deadline",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oriReceiptId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany",
    "name": "PostCore_companiesTransactions_old"
  },
  {
    "type": "post",
    "url": "/core_companies",
    "title": "注册核心企业",
    "name": "核心企业提升为核心企业",
    "group": "CoreCompany",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码 200是成功，403是无权限</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/core_company.js",
    "groupTitle": "CoreCompany"
  }
] });
