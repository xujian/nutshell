<template>
  <ns-page class="page-page" fill="neutral" color-mode="light">
    <ns-page-header title="卡片" fill="#CDDC3999"
      :blur="40"
      foreground="text" has-back-button reveal />
    <ns-page-content :scrollable="contentScrollable">
      <h2>卡片</h2>
      <p class="caption">卡片作为通用容器, 在用户界面上呈现出相关性较强的组件</p>
      <ns-card fill="#333" title="卡片" class="my-md" stroke="#aaa" :thick="2">
        <lorem />
      </ns-card>
      <callout>
      </callout>
      <h3>填色与渐变色</h3>
      <ns-row :gap="10">
        <ns-card fill="#CDDC39" title="卡片">
          <lorem />
        </ns-card>
        <ns-card gradient="#fff,#CDDC39" title="卡片">
          <lorem />
        </ns-card>
      </ns-row>
      <h3>Mesh 渐变</h3>
      <ns-card mesh="100" fill="#222" title="卡片" class="my-md" stroke="#aaa" :thick="2">
        <lorem />
      </ns-card>
      <h3>放置图片</h3>
      <ns-card fill="#fff" :padding="0">
        <ns-image class="full-width"
          aspect-ratio="2"
          src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1" />
        <template #footer>
          <div class="div">
            <p class="justify">图形和排版操作员很清楚这一点，实际上所有涉及通信领域的职业都与这些词有稳定的关系，但它是什么？</p>
          </div>
        </template>
      </ns-card>
      <h3>中央填色</h3>
      <ns-card title="卡片" class="my-md" fill="#ffffff22"
        stroke="#ffffff88"
        body-fill="#ffffff33"
        :edge="8">
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
