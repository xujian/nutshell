<template>
  <ns-cascading-select
    :options="cities"
    v-model="value"
    searchable
    placeholder="请选择区域"
    label="选择区域" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const value = ref([])
const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/locations.json')
    .then(response => response.data)
    .then(data => {
      cities.value = data
    })
})
</script>
