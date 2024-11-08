<template>
  <ns-page class="checkbox-page">
    <ns-page-content>
      <h1 class="my-lg">复选框</h1>
      <p class="caption">&lt;ns-checkbox&gt;/&lt;ns-checkbox-group&gt;</p>
      <ns-card fill="#fff">
        <div class="row" justify="start">
          <ns-checkbox
            name="check"
            label="我已阅读并同意用户条款"
            v-model="agreed" />
        </div>
      </ns-card>
      <h2>复选框组</h2>
      <p>&nbsp;</p>
      <story file="checkbox/group" />
    </ns-page-content>
  M</ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { brands, sizes, variants } from '@uxda/nutshell'

const agreed = ref(false)

</script>

<style lang="scss">
.sizes,
.colors,
.variants {
  .ns-checkbox {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
