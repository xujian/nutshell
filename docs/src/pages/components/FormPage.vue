<template>
  <h1 class="my-lg">表单 &lt;ns-form&gt;</h1>
  <story is-plain file="form/regular" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>用户输入校验</h2>
  <p>&nbsp;</p>
  <ns-form name="validation" v-model="validationFormDate" ref="formRef">
    <ns-input name="clientName"
      :model-value="validationFormDate.clientName"
      label="客户名称"
      :rules="['required']"
      @change="onNameChange" />
    <ns-select name="clientLocation" v-model="validationFormDate.clientLocation"
      :options="cities"
      label="区域" :rules="['required']" />
    <ns-radio-group v-model="validationFormDate.param" label="自定义参数" name="param" :rules="['required']">
      <ns-radio value="1" label="客户姓名"></ns-radio>
      <ns-radio value="2" label="手机号码"></ns-radio>
      <ns-radio value="3" label="身份证号"></ns-radio>
      <ns-radio value="4" label="单位名称"></ns-radio>
    </ns-radio-group>
  </ns-form>
  <ns-button label="提交" @click="onFormSubmit"></ns-button>
  <ns-button label="重置" @click="onFormReset"></ns-button>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>自定义校验方法</h2>
  <p>&nbsp;</p>
  <story file="form/custom-validate" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>多行输入框</h2>
  <p>&nbsp;</p>
  <story file="form/textarea" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>输入框组合</h2>
  <p>&nbsp;</p>
  <story file="form/input-group" />
  <p>&nbsp;</p>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import { NsForm } from '@uxda/nutshell'

const formRef = ref<any>(null)

const validationFormDate = reactive({
  clientName: '',
  clientLocation: '',
  param: ''
})

const cities = ref<any[]>([])

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

<style lang="scss">

</style>
