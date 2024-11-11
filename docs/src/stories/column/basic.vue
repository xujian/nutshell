<template>
  <ns-column class="number-column padding fill-primary my-md" :justify :align :gap="10">
    <ns-number fill="#fff" stroke="1" :value="1" />
    <ns-number fill="#fff" stroke="1" :value="2" />
    <ns-number fill="#fff" stroke="1" :value="3" />
    <ns-number fill="#fff" stroke="1" :value="4" />
  </ns-column>
  <ns-button-group
    label="justify"
    size="xs"
    :options="alignOptions"
    v-model="align" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { aligns } from '@uxda/nutshell'

const alignOptions = aligns.map(x => (
    { value: x, label: x}
  )),
  justify = ref('center'),
  align = ref('center')
</script>
