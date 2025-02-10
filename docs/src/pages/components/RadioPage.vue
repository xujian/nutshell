<template>
  <ns-page class="radio-page">
    <ns-page-content>
      <h1 class="my-lg">单选框组</h1>
      <p class="caption">&lt;ns-radio-group&gt;/&lt;ns-radio&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>用于在多个备选项中选中单个状态。</note>
      <p>&nbsp;</p>
      <h2>子组件形式</h2>
      <p class="caption">&lt;ns-radio-group&gt;/&lt;ns-radio&gt;</p>
      <story file="radio/item" />
      <p>&nbsp;</p>
      <h2>数据形式</h2>
      <p class="caption">用 (items) 属性呈现选择项</p>
      <story file="radio/items" />
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
