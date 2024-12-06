<template>
  <ns-page class="page-page">
    <ns-page-header title="页面构成" fill="#fff" foreground="text" has-back-button></ns-page-header>
    <ns-page-content :scrollable="contentScrollable">
      <h2>页面</h2>
      <p></p>
      <code-view language="html" :code="codes[0]" />
      <ns-row justify="between">
        <label>Page content scrollable</label>
        <ns-switch v-model="contentScrollable" />
      </ns-row>
      <ns-card fill="#fff" title="卡片" class="my-md">
        <lorem />
      </ns-card>
      <ns-row :gap="10">
        <ns-card fill="#CDDC39" title="卡片">
          <lorem />
        </ns-card>
        <ns-card fill="#CDDC39" title="卡片">
          <lorem />
        </ns-card>
      </ns-row>
      <ns-card fill="#222" foreground="#fff" title="卡片" class="my-md">
        <lorem />
      </ns-card>
    </ns-page-content>
    <ns-page-footer fill="#fff">
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
.page-page {
  background-color: var(--ns-neutral);
}
</style>
