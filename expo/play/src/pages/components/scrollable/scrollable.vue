<template>
  <ns-page class="scrollable-page">
    <ns-page-header title="可滚动区域"
      caption="<ns-scrollable>"
      :blur="10" reveal has-back-button />
    <ns-page-content scrollable>
      <ns-tabs v-model="activeTab":items="tabs"
        fill="neutral"
        variant="buttons" />
      <template v-if="activeTab === '1'">
        <h2>设置高度</h2>
        <p class="caption">:height="200"</p>
        <code-view :code="codes[0]" language="html" />
        <ns-scrollable
          class="scroll-a"
          :height="200">
          <ns-column align="start" :gap="10">
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
          </ns-column>
        </ns-scrollable>
        <p>&nbsp;</p>
      </template>
      <template v-if="activeTab === '2'">
        <h2>可下拉刷新</h2>
        <p class="caption">:refreshable="true"</p>
        <code-view :code="codes[1]" language="html" />
        <ns-scrollable
          class="scroll-b"
          :height="200"
          refreshable
          @refresh="onRefresh">
          <ns-column align="start" :gap="10">
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
          </ns-column>
        </ns-scrollable>
        <p>&nbsp;</p>
      </template>
      <template v-if="activeTab === '3'">
        <h2>滑动到底部加载下一页</h2>
        <p class="caption">@bottom-reached</p>
        <code-view :code="codes[2]" language="html" />
        <ns-scrollable
          class="scroll-c"
          :height="200"
          @bottom-reached="onScrollBottomReached">
          <ns-column align="start" :gap="10">
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
            <p><lorem /></p>
          </ns-column>
        </ns-scrollable>
        <p>&nbsp;</p>
      </template>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


const activeTab = ref('1')

const tabs = [
  {
    value: '1',
    label: '固定高度',
  },
  {
    value: '2',
    label: '可下拉刷新',
  },
  {
    value: '3',
    label: '滑动到底部',
  },
]

const onScrollBottomReached = () => {
  console.log('onScrollBottomReached')
}

const onRefresh = async (callback: () => void) => {
  setTimeout(() => {
    callback()
  }, 1000)
}

const codes = [
`<ns-scrollable :height="200">
  <ns-column align="start" :gap="10">
    <p><lorem /></p>
    ...
  </ns-column>
</ns-scrollable>`,
`<ns-scrollable :height="200"
  refreshable
  @refresh="onRefresh">
  <ns-column align="start" :gap="10">
    <p><lorem /></p>
    ...
  </ns-column>
</ns-scrollable>`,
`<ns-scrollable :height="200"
  @bottom-reached="onScrollBottomReached">
  <ns-column align="start" :gap="10">
    <p><lorem /></p>
    ...
  </ns-column>
</ns-scrollable>`,
]
</script>

<style lang="scss">
</style>

