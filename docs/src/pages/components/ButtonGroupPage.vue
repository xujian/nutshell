<template>
  <div class="page button-group-page">
    <h1 class="my-lg">按钮组  &lt;ns-button-group&gt;</h1>
    <story file="button-group/basic" />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
</template>

<script lang="ts" setup>
import { colors, sizes, variants } from '@uxda/nutshell'

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
