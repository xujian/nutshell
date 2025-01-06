<template>
  <ns-row class="number-row padding fill-primary my-md" :justify :gap="10">
    <ns-number fill="#fff" stroke="1" :value="1" />
    <ns-number fill="#fff" stroke="1" :value="2" />
    <ns-number fill="#fff" stroke="1" :value="3" />
    <ns-number fill="#fff" stroke="1" :value="4" />
  </ns-row>
  <ns-button-group
    label="justify"
    size="xs"
    :items="justifyOptions"
    v-model="justify" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { justifies } from '@uxda/nutshell'

const justifyOptions = justifies.map(x => (
    { value: x, label: x}
  )),
  justify = ref('center'),
  align = ref('center')
</script>
