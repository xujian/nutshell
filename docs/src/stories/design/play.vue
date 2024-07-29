<template>
  <ns-card
    title="广发银行 - 小微贷"
    :fill
    :blur
    :brightness
    :shadow
    :depth
    stroke="#ffffff66"
    foreground="#fff">
    <ns-number
      :value="4"
      suffix="天"
      footer="最快放款时长"
      align="start" />
    <ns-chips :options="tags.map(t => ({value: t, label: t})) || []"
      color="primary" />
  </ns-card>
  <p>&nbsp;</p>
  <ns-row class="design-row justify-between">
    <div class="label">填色 <span class="caption">(fill)</span></div>
    <ns-button-group v-model="fill" color="primary" :options="fills" />
  </ns-row>
  <p>&nbsp;</p>
  <ns-row class="design-row justify-between">
    <div class="label">模糊 <span class="caption">(blur)</span></div>
    <ns-button-group v-model="blur" color="primary" :options="blurs" />
  </ns-row>
  <p>&nbsp;</p>
  <ns-row class="design-row justify-between">
    <div class="label">光照 <span class="caption">(brightness)</span></div>
    <ns-button-group v-model="brightness"
      color="primary"
      :options="brightnesses" />
  </ns-row>
  <p>&nbsp;</p>
  <ns-row class="design-row justify-between">
    <div class="label">投影 <span class="caption">(shadow)</span></div>
    <ns-button-group v-model="shadow"
      color="primary"
      :options="shadows" />
  </ns-row>
  <p>&nbsp;</p>
  <ns-row class="design-row justify-between">
    <div class="label">投影高度 <span class="caption">(depth)</span></div>
    <ns-button-group v-model="depth"
      color="primary"
      :options="depthes" />
  </ns-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ['放款快', '利率低', '支持提放保', '简易审核']

const fills = ['#ffffff22', '#ffffff44', '#ffffff66', '#ffffff88']
    .map(c => ({label: c, value: c})),
  blurs = [5, 10, 15, 20]
    .map(c => ({label: c, value: c})),
  brightnesses = [1, 1.2, 1.5, 2]
    .map(c => ({label: c, value: c})),
  shadows = ['#00000011', '#ffffff11']
    .map(c => ({label: c, value: c})),
  depthes = [5, 10, 15, 20]
    .map(c => ({label: c, value: c}))

const fill = ref(fills[0].value),
  blur = ref(blurs[0].value),
  brightness = ref(brightnesses[0].value),
  shadow = ref(shadows[0].value),
  depth = ref(depthes[0].value)

</script>

<style lang="scss">
.design-row {
  background-color: var(--ns-primary--50);
  padding-inline-start: var(--ns-spacing);
  border-radius: var(--ns-border-radius);
  color: #666;
}
</style>
