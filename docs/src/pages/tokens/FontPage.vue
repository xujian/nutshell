<template>
  <ns-page class="font-page">
    <ns-page-content>
      <ns-image class="full-width"
        src="https://simple.shensi.tech/images/raptors.jpg"></ns-image>
      <h1>字型与版式</h1>
      <p class="caption">font</p>
      <h2>二标题</h2>
      <p class="caption">副标题</p>
      <p><lorem /></p>
      <h3>三标题</h3>
      <p class="caption">副标题</p>
      <ns-row :gap="10">
        <ns-card fill="#fff">
          <p><lorem /></p>
        </ns-card>
        <ns-card fill="#333" foreground="#fff">
          <p><lorem /></p>
        </ns-card>
        <ns-card fill="primary">
          <p><lorem /></p>
        </ns-card>
      </ns-row>
      <p>&nbsp;</p>
      <h3>四标题</h3>
      <p class="caption">副标题</p>
      <story minimal file="list/basic" />
      <p>&nbsp;</p>
      <h2>特殊样式</h2>
      <story file="font/gradient" />
      <p>&nbsp;</p>
      <h2>特殊样式</h2>
      <story file="font/decor" />
      <p>&nbsp;</p>
      <h2>Colors</h2>
      <color-cases v-slot="{color}">
        <h1 :class="`text-${color}`">待办任务</h1>
      </color-cases>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, sizes, variants } from '@uxda/nutshell'

const label = '提交'

</script>

<style lang="scss">
</style>
