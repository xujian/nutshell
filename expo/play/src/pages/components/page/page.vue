<template>
  <ns-page class="page-page" :fill="bodyFill">
    <ns-page-header title="页面构成"
      foreground="text"
      has-back-button
      fill="#ffffff99"
      :blur="40"
      :reveal="pageHeaderReveal"></ns-page-header>
    <ns-page-content :scrollable="contentScrollable" :refreshable="contentRefreshable">
      <h2>页面</h2>
      <p></p>
      <code-view language="html" :code="codes[0]" />
      <ns-column :gap="10">
        <ns-row justify="between">
          <label>Page content scrollable</label>
          <ns-switch v-model="contentScrollable" />
        </ns-row>
        <ns-row justify="between">
          <label>Page content refreshable</label>
          <ns-switch v-model="contentRefreshable" />
        </ns-row>
        <ns-row justify="between">
          <label>Dark</label>
          <ns-switch v-model="darkScheme" />
        </ns-row>
        <ns-row justify="between">
          <label>PageHeader.reveal</label>
          <ns-switch v-model="pageHeaderReveal" />
        </ns-row>
      </ns-column>
      <p>&nbsp;</p>
      <ns-button color="primary" class="full-width" @click="openSheet">打开 SHEET</ns-button>
      <ns-card fill="#ffffff55" blur="40" stroke="#ffffff99"
        :thick="1" title="卡片" caption="副标题" class="my-md">
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
    <ns-page-footer :sunk="footerSunk">
      <ns-button class="full-width" color="primary" r="sm">底部按钮</ns-button>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, computed } from 'vue'
import { useBus, useNutshell } from '@uxda/nutshell/taro'
import DemoSheet from '../../../components/DemoSheet.vue'

const contentScrollable = ref(false),
  contentRefreshable = ref(false),
  darkScheme = ref(false),
  footerSunk = ref(false),
  pageHeaderReveal = ref(true),
  $bus = useBus(),
  $n = useNutshell()

const codes = [
`<ns-page>
  <ns-page-header />
  <ns-page-content />
  <ns-page-footer />
</ns-page>`
]

const bodyFill = computed(() => darkScheme.value === true
  ? '#333'
  : 'neutral')

// setTimeout(() => {
//   footerSunk.value = true
// }, 2000)

const openSheet = () => {
  $n.sheet({
    component: DemoSheet,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    fill: '#8BC34A',
    closable: true,
    title: '客户详情'
  })
}

const hideFooter = () => {
  footerSunk.value = true
}

const callbackFooter = () => {
  footerSunk.value = false
}

$bus.on('picker.open', hideFooter)
$bus.on('picker.close', callbackFooter)

onUnmounted(() => {
  $bus.off('picker.open', hideFooter)
  $bus.off('picker.close', callbackFooter)
})
</script>

<style lang="scss">
.page-page {
  background-color: var(--ns-neutral);
}
</style>
