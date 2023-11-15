<template>
  <h1 class="my-lg">弹窗 &lt;ns-dialog&gt;</h1>
  <ns-row class="variants" align="center">
    <ns-button
      size="sm"
      width="100"
      color="negtive"
      label="弹出对话框" @click="onOpenDialogButtonClick" />
  </ns-row>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenDialogButtonClick = () => {
  $n.dialog({
    title: '客户',
  })
}
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