<template>
  <ns-page class="date-input-page">
    <ns-page-content>
      <h1>日期输入框</h1>
      <p class="caption">&lt;ns-date-input&gt;</p>
      <mobile-button url="pages/components/date-input" />
      <p>&nbsp;</p>
      <note>输入或选择日期的控件。</note>
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}">
        <ns-date-input
          name="登记日期"
          label="选择日期"
          :variant
          v-model="formData.登记日期"
          :rules="['required']" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>带时间 HasTime</h2>
      <p class="caption">设置时间格式 - 如time-format=HH:mm；设置展示的日期格式 - 如format=YYYY-MM-DD HH:mm；设置分钟步数 - minute-step=15</p>
      <story file="input/date" />
      <h2>禁用时间</h2>
      <p class="caption">禁用选择的日期 - 需传入disabledDate函数；禁用选择的时间 - 需传入disabledTime函数；禁用时间组件 - 需设置disabled为true</p>
      <story file="input/date-disabled" />
      <p>&nbsp;</p>
      <h2>日期区间输入组件</h2>
      <p class="caption">&lt;ns-date-range-input&gt;</p>
      <story file="input/date-range" />
      <p>&nbsp;</p>
      <h2>月份输入组件与年份输入组件</h2>
      <p class="caption">&lt;ns-month-input&gt; 与 &lt;ns-year-input&gt;</p>
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
