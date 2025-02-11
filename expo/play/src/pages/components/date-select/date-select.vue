<template>
  <ns-page>
    <ns-form>
      <h2>基础用法</h2>
      <ns-date-select v-model="formData.date1" />
    </ns-form>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  date1: '',
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

