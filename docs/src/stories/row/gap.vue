<template>
  <ns-row class="card-row padding my-md" :gap>
    <ns-card class="color-card"
      v-for="(c, index) in colors"
      :key="index"
      title="卡片"
      :fill="c"></ns-card>
  </ns-row>
  <prop-buttons v-model="gap" title="间隙" caption="gap" :options />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const colors = [
  '#8895B3', '#8E94F2', '#9FA0FF', '#BBADFF', '#DAB6FC'
]

const gap = ref(10)

const options = [
  { label: 1, value: 1},
  { label: 'sm', value: 5},
  { label: 'ms', value: 10},
  { label: 'lg', value: 15},
  { label: 'xl', value: 20},
  { label: '30', value: 20},
]
</script>
