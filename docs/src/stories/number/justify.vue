<template>
  <ns-number
    prefix="2023年净利润"
    suffix="亿元人民币"
    gradient="101"
    width="480"
    height="100"
    :justify
    :align
    :value="净利润" />
  <ns-row justify="between">
    <h5>JUSTIFY</h5>
    <div class="caption">横向</div>
    <div class="spacer"></div>
    <ns-button-group
      label="justify"
      size="xs"
      :options="justifyOptions"
      v-model="justify" />
  </ns-row>
  <ns-row justify="between">
    <h5>ALIGN</h5>
    <div class="caption">纵向</div>
    <div class="spacer"></div>
    <ns-button-group
      label="align"
      size="xs"
      :options="justifyOptions"
      v-model="align" />
  </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const 净利润 = 8012.591,
  justifyOptions = [
    {
      value: 'start',
      label: 'start'
    },
    {
      value: 'center',
      label: 'center'
    },
    {
      value: 'end',
      label: 'end'
    },
    {
      value: 'between',
      label: 'between'
    },
  ],
  justify = ref('center'),
  align = ref('center')
</script>

<style lang="scss">
</style>
