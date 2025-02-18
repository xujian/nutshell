<template>
  <ns-select
    v-model="value"
    variant="solid"
    searchable
    :clearable="false"
    :options="cities"
    placeholder="请选择城市"
    color="primary"
    label="城市" />

  <ns-select
    v-model="value"
    variant="solid"
    disabled
    :options="cities"
    placeholder="禁用选择"
    color="primary"
    label="城市" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const value = ref()

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
