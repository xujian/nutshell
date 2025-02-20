<template>
  <ns-page class="facts-page">
    <ns-page-header title="详表" has-back-button />
    <ns-page-content>
      <h2>王长城</h2>
      <p class="caption">一般客户</p>
      <ns-facts>
        <ns-facts-item label="意向等级">
          <ns-rating :value="3" />
        </ns-facts-item>
        <ns-facts-item label="业务意向">
          抵押类
        </ns-facts-item>
        <ns-facts-item label="客户标签" direction="column">
          <ns-chips :items="tags" color="#ff9800" justify="end" />
        </ns-facts-item>
        <ns-facts-item label="客户来源">
          直营
        </ns-facts-item>
        <ns-facts-item label="意向产品">
          <ns-chips :items="intrests" color="primary" justify="end" />
        </ns-facts-item>
      </ns-facts>
      <h2>企业认证</h2>
      <ns-facts :items="firmFacts" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const
  tags = [
    { label: '经营企业', value: '1' },
    { label: '房地产业', value: '2' },
    { label: '海外资产', value: '3' },
    { label: '互联网', value: '4' },
    { label: '金融', value: '5' },
    { label: '高管', value: '6' },
  ],
  intrests = [
    { label: '支付宝', value: '1' },
    { label: '提放宝', value: '2' },
  ],
  firmFacts = [
    { label: '公司名称', value: '深思网络有限公司' },
    { label: '统一社会信用代码', value: '91440300708461136T' },
    { label: '法人姓名', value: '张黄河' },
    { label: '法人证件号码', value: '440882198902163113' },
    { label: '法人手机号码', value: '18612345678' },
    { label: '企业管理员', value: '代理人' },
    { label: '代理人姓名', value: '王大地' },
    { label: '代理人证件号码', value: '440882198902163321' },
    { label: '代理人手机号码', value: '18612341234' },
  ]
</script>
