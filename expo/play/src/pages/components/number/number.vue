<template>
  <ns-page fill="neutral" class="number-page">
    <ns-page-header title="数字"
      fill="#ffffff88"
      blur="40"
      reveal
      caption="<ns-number>" has-back-button />
    <ns-page-content>
      <ns-row justify="center">
        <ns-number :value />
      </ns-row>
      <code-view language="html" :code="codes[0]" />
      <h2>前缀与后缀</h2>
      <p class="caption">PREFIX & SUFFIX</p>
      <ns-row>
        <ns-number
          prefix="2023年净利润"
          suffix="亿元人民币"
          fill="#fff"
          hight="400"
          justify="center"
          :value />
      </ns-row>
      <code-view language="html" :code="codes[1]" />
      <h2>标题与标注</h2>
      <p class="caption">HEADING & FOOTER</p>
      <ns-number
        header="比特币实时总市值"
        suffix="USD"
        height="120"
        align="center"
        gradient="#e94057,#f27121/45"
        :padding="8"
        justify="center"
        :main-height="100"
        main-justify="center"
        :animated="true"
        foreground="#fff"
        :value="比特币实时总市值">
        <template #footer>
          <ns-row>
            <span>(刷新频率 1 分钟)</span>
          </ns-row>
        </template>
      </ns-number>
      <code-view language="html" :code="codes[2]" />
      <callout>
        <p>可以分别用 :header/:footer 属性与 #header/#footer 插槽</p>
      </callout>
      <h2>用在卡片里</h2>
      <ns-row gap="md">
        <ns-card fill="#ffffff88">
          <ns-number
            header="上周营收"
            suffix="%"
            hight="120"
            size="sm"
            align="start"
            mainAlign="center"
            :auto-trend="true"
            :minimum-fraction-digits="2"
            :value="上周营收" />
        </ns-card>
        <ns-card fill="#ffffff88">
          <ns-number
            header="本月活跃"
            suffix="%"
            hight="120"
            size="sm"
            align="start"
            mainAlign="center"
            :auto-trend="true"
            :minimum-fraction-digits="2"
            :value="本月活跃" />
        </ns-card>
        <ns-card fill="#ffffff88">
          <ns-number
            header="季度环比"
            suffix="%"
            hight="120"
            align="start"
            size="sm"
            mainAlign="center"
            trend="down"
            :minimum-fraction-digits="2"
            tooltip="数据存在1-2天延迟"
            :value="季度环比" />
        </ns-card>
      </ns-row>
      <code-view language="html" :code="codes[3]" />
      <h2>关键属性</h2>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
            <th>缺省值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>md</td>
          </tr>
        </tbody>
      </table>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(123.45),
  比特币实时总市值 = ref(1_390_767_963_266),
  上周营收 = ref(12.45),
  本月活跃 = ref(1.78),
  季度环比 = ref(0.12)

const codes = [
`<ns-number :value />`,
`<ns-number
  prefix="2023年净利润"
  suffix="亿元人民币"
  fill="#fff"
  hight="400"
  justify="center"
  :value />`,
`<ns-number
  header="比特币实时总市值"
  suffix="USD"
  height="120"
  align="center"
  gradient="#e94057,#f27121/45"
  :padding="8"
  justify="center"
  :main-height="100"
  main-justify="center"
  :animated="true"
  foreground="#fff"
  :value="比特币实时总市值">
  <template #footer>
    <ns-row>
      <span>(刷新频率 1 分钟)</span>
    </ns-row>
  </template>
</ns-number>`,
`<ns-row gap="md">
  <ns-card fill="#ffffff88">
    <ns-number
      header="上周营收"
      suffix="%"
      hight="120"
      size="sm"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      :value="上周营收" />
  </ns-card>
  <ns-card fill="#ffffff88">
    <ns-number
      header="本月活跃"
      suffix="%"
      hight="120"
      size="sm"
      align="start"
      mainAlign="center"
      :auto-trend="true"
      :minimum-fraction-digits="2"
      :value="本月活跃" />
  </ns-card>
  <ns-card fill="#ffffff88">
    <ns-number
      header="季度环比"
      suffix="%"
      hight="120"
      align="start"
      size="sm"
      mainAlign="center"
      trend="down"
      :minimum-fraction-digits="2"
      tooltip="数据存在1-2天延迟"
      :value="季度环比" />
  </ns-card>
</ns-row>`
]
</script>
