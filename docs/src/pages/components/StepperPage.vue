<template>
  <ns-page class="stepper-page">
    <ns-page-content>
      <h1>Tabbar</h1>
      <p class="caption">&lt;ns-stepper&gt;</p>
      <h2>基本用法</h2>
      <story file="stepper/basic.vue" />
      <p>&nbsp;</p>
      <h2>Variant</h2>
      <variant-cases direction="column" v-slot="{variant}">
        <ns-stepper class="basic-stepper"
          status="wait"
          :items="items" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>箭头式</h2>
      <p class="caption">variant="<span class="b">arrow</span>"</p>
      <story file="stepper/arrow.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const items = [
  {
    title: '线索'
  },
  {
    title: '意向'
  },
  {
    title: '签单'
  },
  {
    title: '做单'
  },
  {
    title: '放款'
  },
  {
    title: '结单'
  }
]
</script>

<style lang="scss">
</style>
