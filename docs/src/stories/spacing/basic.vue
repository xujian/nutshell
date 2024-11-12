<template>
  <ns-column align="start" class="card-column">
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[0]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[1]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[2]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[3]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[4]"></ns-card>
    <h3>客户列表</h3>
    <ns-card class="color-card full-width" title="卡片"
      :fill="colors[0]"></ns-card>
  </ns-column>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const colors = [
  '#DEF2C8', '#C5DAC1', '#BCD0C7', '#A9B2AC', '#898980'
]

</script>
