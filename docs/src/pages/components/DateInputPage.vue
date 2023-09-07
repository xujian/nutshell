<template>
  <h1 class="my-lg">日期输入框 &lt;ns-date-input&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-row class="variants" v-for="(variant) in variants" align="center" :key="variant">
    <h4 class="variant-label">{{ variant }}</h4>
    <ns-date-input name="registerDate" label="选择日期"
      v-model="registerDate"
      :variant="variant"
      :rules="['required']" />
    </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { variants } from '../../props'

const registerDate = ref<string>('2023-09-01')
</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>