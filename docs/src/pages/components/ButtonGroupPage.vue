<template>
  <ns-page class="button-group-page">
    <ns-page-content>
      <h1>按钮组</h1>
      <p class="caption">&lt;ns-button-group&gt;</p>
      <h2>Color</h2>
      <color-cases direction="column" v-slot="{color}">
        <ns-button-group v-model="state.selected" :color :items size="xs" />
      </color-cases>
      <p>&nbsp;</p>
      <h2>Size</h2>
      <size-cases direction="column" v-slot="{size}">
        <ns-button-group v-model="state.selected" color="primary" :size :items />
      </size-cases>
      <p>&nbsp;</p>
      <h2>Variant</h2>
      <variant-cases direction="column" v-slot="{variant}">
        <ns-button-group v-model="state.selected" color="primary" :variant :items size="xs" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>用法</h2>
      <story file="button-group/basic" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  selected: '1'
})
const items = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]
</script>

<style lang="scss">
.button-group-page {
  .variants {
    .ns-button {
      margin: 2px
    }
    .variant-label {
      width: 100px
    }
  }
}
</style>
