<template>
  <ns-page class="date-input-page">
    <ns-page-content>
      <h1>日期输入框</h1>
      <p class="caption">&lt;ns-date-input&gt;</p>
      <h2>Variants</h2>
      <p class="caption">类型</p>
      <variant-cases v-slot="{variant}" class="column">
        <ns-date-input
          name="登记日期"
          label="选择日期"
          :variant
          v-model="formData.登记日期"
          :rules="['required']" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>带时间</h2>
      <story file="input/date" />
      <p>&nbsp;</p>
      <h2>日期区间</h2>
      <story file="input/date-range" />
      <p>&nbsp;</p>
      <h2>月份与年份</h2>
      <story file="input/month-year" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  登记日期: '2023-09-01',
})
</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
