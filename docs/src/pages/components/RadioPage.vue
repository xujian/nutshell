<template>
  <h1 class="my-lg">单选框 &lt;ns-radio&gt;</h1>
  <h3>子组件形式</h3>
  <p>&nbsp;</p>
  <ns-radio-group v-model="paramRadioValue" label="自定义参数" name="param">
    <ns-radio value="1" label="客户姓名"></ns-radio>
    <ns-radio value="2" label="手机号码"></ns-radio>
    <ns-radio value="3" label="身份证号"></ns-radio>
    <ns-radio value="4" label="单位名称"></ns-radio>
  </ns-radio-group>
  <p>&nbsp;</p>
  <ns-radio-group v-model="paramRadioValue" label="自定义参数" name="param" direction="vertical">
    <ns-radio value="1" label="客户姓名"></ns-radio>
    <ns-radio value="2" label="手机号码"></ns-radio>
    <ns-radio value="3" label="身份证号"></ns-radio>
    <ns-radio value="4" label="单位名称"></ns-radio>
  </ns-radio-group>
  <p>&nbsp;</p>
  <h3>属性(items)形式</h3>
  <p>&nbsp;</p>
  <ns-radio-group
    v-model="paramRadioValue"
    :items="radioItems"
    label="自定义参数"
    name="param"
    direction="vertical"
    @change="onRadioGroupChange" />
  <p>&nbsp;</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const paramRadioValue = ref('')

const radioItems = [
  { label: '客户姓名', value: '1' },
  { label: '手机号码', value: '2' },
  { label: '身份证号', value: '3' },
  { label: '单位名称', value: '4' },
]

const onRadioGroupChange = (value: string | number) => {
  console.log('onRadioGroupChange===', value)
}
</script>

<style lang="scss">

</style>