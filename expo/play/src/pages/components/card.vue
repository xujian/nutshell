<template>
  <ns-page class="page-page" fill="neutral" color-mode="light">
    <ns-page-header title="卡片" fill="#CDDC3999"
      :blur="40"
      stroke="#CDDC39"
      foreground="text" has-back-button></ns-page-header>
    <ns-page-content :scrollable="contentScrollable">
      <h2>卡片</h2>
      <ns-card fill="#333" title="卡片" class="my-md" stroke="#aaa" :thick="2">
        <lorem />
      </ns-card>
      <ns-row :gap="10">
        <ns-card fill="#CDDC39" title="卡片">
          <lorem />
        </ns-card>
        <ns-card gradient="#fff,#CDDC39" title="卡片">
          <lorem />
        </ns-card>
      </ns-row>
      <ns-card mesh="100" fill="#222" title="卡片" class="my-md" stroke="#aaa" :thick="2">
        <lorem />
      </ns-card>
      <ns-card title="卡片" class="my-md" fill="#ffffff22"
        stroke="#ffffff88"
        body-fill="#ffffff33"
        :edge="5">
        <template #titleAfter>
          <ns-chip color="primary" label="实名" />
        </template>
        <template #corner>
          <ns-icon name="https://simple.shensi.tech/system-assets/icons/arrow-up-right.svg" />
        </template>
        <ns-number
          header="季度环比"
          suffix="%"
          width="30%"
          hight="100"
          align="start"
          mainAlign="center"
          trend="down"
          :padding="0"
          :minimum-fraction-digits="2"
          :value="1.25" />
        <template #footer>
          <div class="spacer"></div>
          <ns-button
            color="#fff"
            size="xs"
            icon="http://simple.shensi.tech/icons/arrow-right.svg"
            icon-position="end">数据图表</ns-button>
        </template>
      </ns-card>
    </ns-page-content>
    <ns-page-footer fill="#00000088" :blur="40">
      <ns-button class="full-width" color="primary" r="sm">底部按钮</ns-button>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const contentScrollable = ref(false)

const codes = [
`<ns-page>
  <ns-page-header />
  <ns-page-content />
  <ns-page-footer />
</ns-page>`
]
</script>

<style lang="scss">

</style>
