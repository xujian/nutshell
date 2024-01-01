<template>
  <code-view :code="json">
  </code-view>
  <p>&nbsp;</p>
  <ns-button label="保存" @click="onSaveClick"></ns-button>
</template>

<script lang="ts" setup>
import { components } from '@uxda/nutshell'

const data = Object.entries(components).map(([name, component]) => ({
  name,
}))

const json = JSON.stringify(data, null, 2)

function onSaveClick () {
}
</script>
