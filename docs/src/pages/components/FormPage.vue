<template>
  <h1 class="my-lg">表单 &lt;ns-form&gt;</h1>
  <regular-form />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>用户输入校验</h2>
  <p>&nbsp;</p>
  <ns-form name="validation" v-model="validationFormDate" ref="formRef">
    <ns-input name="clientName" 
      :model-value="validationFormDate.clientName" 
      label="客户名称" 
      :rules="['required']" 
      fill="white"
      @change="onNameChange" />
    <ns-select name="clientLocation" v-model="validationFormDate.clientLocation"
      :options="cities"
      label="区域" :rules="['required']"
      fill="white" />
  </ns-form>
  <ns-button label="提交" @click="onFormSubmit"></ns-button>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import { NsForm } from '@uxda/nutshell'
import RegularForm from '../../examples/RegularForm.vue'

const formRef = ref(null)

const validationFormDate = reactive({
  clientName: '',
  clientLocation: '',
})

const cities = ref<any[]>([])

const onFormSubmit = () => {
  formRef.value?.validate()
}

const onNameChange = (value: string) => {
  console.log('onNameChange+++++', value)
}

onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map(d => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
})
</script>

<style lang="scss">

</style>