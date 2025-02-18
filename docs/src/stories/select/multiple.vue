<template>
  <ns-multiple-select
    v-model="multipleValue"
    :options="cities"
    :key="'primary'"
    placeholder="请选择客户区域"
    :color="'primary'"
    label="客户区域" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const multipleValue = ref([])

const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map((d: any) => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
})
</script>
