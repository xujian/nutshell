<template>
  <ns-form name="validation" v-model="validationFormDate" ref="formRef">
    <ns-input name="clientName"
      v-model="validationFormDate.clientName"
      label="客户名称"
      placeholder="请输入客户名称"
      :rules="['required']"
      @change="onNameChange" />
    <ns-select name="clientLocation"
      v-model="validationFormDate.clientLocation"
      :options="cities"
      placeholder="请选择区域"
      label="区域"
      :rules="['required']" />
    <ns-radio-group v-model="validationFormDate.param" label="自定义参数" name="param" ruleTrigger="change" :rules="['required']">
      <ns-radio value="1" label="客户姓名"></ns-radio>
      <ns-radio value="2" label="手机号码"></ns-radio>
      <ns-radio value="3" label="身份证号"></ns-radio>
      <ns-radio value="4" label="单位名称"></ns-radio>
    </ns-radio-group>
  </ns-form>
  <ns-row justify="end">
    <ns-button variant="outlined" label="重置" @click="onFormReset"></ns-button>
    <ns-button color="primary" label="提交" @click="onFormSubmit"></ns-button>
  </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import { NsForm } from '@uxda/nutshell'

const formRef = ref<any>(null)
const cities = ref<any[]>([])

const validationFormDate = reactive({
  clientName: '',
  clientLocation: null,
  param: ''
})

const onFormSubmit = () => {
  formRef.value && formRef.value.validate()
}

const onFormReset = () => {
  formRef.value && formRef.value.resetFields()
}

const onNameChange = (value: string) => {
  console.log('onNameChange+++++', value)
}

onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map(((d: any) => ({value: d.id, label: d.name}))))
    .then((data: any) => {
      cities.value = data
    })
  })
</script>
