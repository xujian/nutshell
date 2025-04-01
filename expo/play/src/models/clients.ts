export type 客户 = {
  id: string,
  姓名: string,
  手机号码?: string,
  证件号码?: string,
  证件地址?: string,
  婚姻状态?: string,
  客户来源?: string,
  业务意向?: string,
  意向等级?: number,
  备注?: string
}

export type 订单 = {
  id: string,
  type?: string,
  createdAt: string,
  订单编号?: string,  
  客户姓名?: string,
  金额?: number,
  状态?: string,
  [key: string]: string | number | undefined
}

export type 跟进记录 = {
  id: string,
  时间: string,
  跟进人: string,
  内容: string
}
