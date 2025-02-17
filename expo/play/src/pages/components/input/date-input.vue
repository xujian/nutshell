<template>
  <ns-page class="input-page">
    <ns-page-header title="日期选择框"
      caption="<ns-date-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-date-input name="date1" label="日期"
          format="YYYY-MM-DD"
          placeholder="请选择日期"
          :model-value="formData.date1"
          dense />
        <h2>对齐方式(props.variant === 'solid' ? 'left' : 'right')</h2>
          <ns-date-input
            name="date2"
            v-model="formData.date2"
            label="日期"
            variant="solid"
            placeholder="请选择日期"
          />
        <h2>包含时间</h2>
        <ns-date-input name="date3" label="选择时间"
          placeholder="请选择时间"
          has-time
          time-format="HH:mm"
          format="YYYY-MM-DD HH:mm"
          v-model="formData.date3" />
      </ns-form>
  </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  date1: '',
  date2: '',
  date3: ''
})
</script>

<style lang="scss">
h2 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #909ca4;
  padding: 0 10px;
  font-weight: 400;
}
</style>

