<template>
  <ns-page class="page-page" fill="neutral" color-mode="light">
    <ns-page-header title="卡片" fill="#CDDC3999"
      :blur="40"
      stroke="#999"
      foreground="text" has-back-button></ns-page-header>
    <ns-page-content :scrollable="contentScrollable">
      <h2>卡片</h2>
      <ns-card fill="#fff" title="卡片" class="my-md" stroke="#aaa" :thick="2">
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
      <ns-card fill="#222" foreground="#fff" title="卡片" stroke="#fff" class="my-md">
        <lorem />
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
