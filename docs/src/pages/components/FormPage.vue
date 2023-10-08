<template>
  <h1 class="my-lg">表单 &lt;ns-form&gt;</h1>
  <regular-form />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h2>用户输入校验</h2>
  <ns-form name="validation" v-model="validationFormDate">
    <ns-input name="clientName" v-model="validationFormDate.clientName" label="客户名称" :rules="['required']" />
    <ns-select name="clientLocation" v-model="validationFormDate.clientLocation"
      :options="cities"
      label="区域" :rules="['required']" />
  </ns-form>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'
import RegularForm from '../../examples/RegularForm.vue'

const validationFormDate = reactive({
  clientName: '',
  clientLocation: '',
})

const cities = ref<any[]>([])

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