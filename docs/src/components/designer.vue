<template>
  <ns-row class="designer" justify="stretch" align="stretch">
    <ns-column class="main grow" justify="center" align="center">
      <slot :props></slot>
    </ns-column>
    <ns-column class="inspector" align="stretch" justify="start">
      <ns-input label="fill"></ns-input>
    </ns-column>
  </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { DesignProps } from '@uxda/nutshell'

const props = ref<DesignProps>()
</script>

<style lang="scss">
.designer {
  .main {
    width: 75%;
    padding: var(--ns-spacing);
  }
  .inspector {
    width: 25%;
    min-width: 200px;
    min-height: 400px;
    padding: var(--ns-spacing);
    background-color: var(--ns-surface);
  }
  .ns-form-item {
    width: 100%;
  }
}
</style>
