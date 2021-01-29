# SupplyChain 文档仓库
- api-doc 为后端api文档
- report 为设计报告



修改：
### Administrator

- 查询管理员分给某一银行的credit总数 
  function getAdminOutCredit2Bank(address bankAddr) public view returns (uint256);

### Bank

- 所有Bank的data结构修改为：

  | addr         | 地址       |
  | ------------ | ---------- |
  | name         | 名字       |
  | cType        | 不用管     |
  | creditAmount | 信用点余额 |
  | cashAmount   | 现金余额   |

- Bank可以强制核心企业返回信用点，跟admin强制bank返回信用点是一样的
  - /** bank将credit分发给core company*/
        function creditDistributionToCore(
            address senderAddr, // bankAddr
            address coreAddr,
            uint256 amount
        );
- 可以获取以某个银行为收款方的全部贷款

### Certifier

- Certifier - 监管机构发送信用点给核心企业 X
  - 这不是监管机构的活，监管机构不能发送信用点

### Company

- 以下三者都可以不拆分成普通、核心企业，链端查账单、交易、贷款都不区分这个的
  - Company - 获取某个普通企业为收款方的未还清的交易账单 
  - Company - 获取某个普通企业的全部交易 
  - Company - 获取某个普通企业的全部贷款  —— X 不存在
- 





