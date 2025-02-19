<template>
  <ns-page class="radio-page">
    <ns-page-content>
      <h1 class="my-lg">单选框组</h1>
      <p class="caption">&lt;ns-radio-group&gt;/&lt;ns-radio&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>用于在多个备选项中选中单个状态。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p class="caption">ns-radio-group与ns-radio配合使用</p>
      <story file="radio/item" />
      <p>&nbsp;</p>
      <h2>数据形式</h2>
      <p class="caption">用 (options) 属性呈现选择项</p>
      <story file="radio/items" />
      <p>&nbsp;</p>
      <h2>方向与禁用状态</h2>
      <p class="caption">direction设为column选项垂直排列；options选项设置disabled可实现单个选项禁用；ns-radio-group组件设置disabled属性可实现整个组件禁用</p>
      <story file="radio/direction" />
      <p>&nbsp;</p>
      <h2>使用按钮形式</h2>
      <p class="caption">用 &lt;ns-button-group-input&gt; 实现相同的功能</p>
      <story file="button-group/input" />
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const paramRadioValue = ref('')

const onRadioGroupChange = (value: string | number) => {
  console.log('onRadioGroupChange===', value)
}
</script>

<style lang="scss">

</style>
