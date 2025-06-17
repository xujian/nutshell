<template>
  <div class="design-tweak-container">
    <ns-card
      class="design-tweak-card"
      title="广发银行 - 小微贷"
      :fill
      :stroke
      :blur
      :brightness
      :shadow
      :depth
      foreground="#fff">
      <ns-number
        :value="4"
        suffix="天"
        footer="最快放款时长"
        align="start" />
      <ns-chips :options="tags.map(t => ({value: t, label: t})) || []"
        color="primary" />
    </ns-card>
    <ns-row class="design-row justify-between">
      <div class="label">fill</div>
      <ns-button-group v-model="fill" color="primary" :items="fills" />
    </ns-row>
    <ns-row class="design-row justify-between">
      <div class="label">stroke</div>
      <ns-button-group v-model="stroke" color="primary" :items="strokes" />
    </ns-row>
    <ns-row class="design-row justify-between">
      <div class="label">blur</div>
      <ns-button-group v-model="blur" color="primary" :items="blurs" />
    </ns-row>
    <ns-row class="design-row justify-between">
      <div class="label">brightness</div>
      <ns-button-group v-model="brightness"
        color="primary"
        :items="brightnesses" />
    </ns-row>
    <ns-row class="design-row justify-between">
      <div class="label">shadow</div>
      <ns-button-group v-model="shadow"
        color="primary"
        :items="shadows" />
    </ns-row>
    <ns-row class="design-row justify-between">
      <div class="label">depth</div>
      <ns-button-group v-model="depth"
        color="primary"
        :items="depthes" />
    </ns-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tags = ['放款快', '利率低', '支持提放保', '简易审核']

const fills = ['#ffffff22', '#ffffff44', '#ffffff88', '#00000088']
    .map(c => ({label: c, value: c})),
  strokes = ['#ffffff66', '#ffffff99', '#ffffff33']
    .map(c => ({label: c, value: c})),
  blurs = [5, 10, 15, 20, 30, 40, 50, 75, 100]
    .map(c => ({label: `${c}`, value: c})),
  brightnesses = [1, 1.2, 1.5, 2]
    .map(c => ({label: `${c}`, value: c})),
  shadows = ['#00000044', '#ffffff44']
    .map(c => ({label: c, value: c})),
  depthes = [5, 10, 15, 20]
    .map(c => ({label: `${c}`, value: c}))

const fill = ref(fills[0].value),
  stroke = ref(strokes[0].value),
  blur = ref(blurs[0].value),
  brightness = ref(brightnesses[0].value),
  shadow = ref(shadows[0].value),
  depth = ref(depthes[0].value)

</script>

<style lang="scss">
.design-row {
  background-color: var(--ns-primary--50);
  padding-inline-start: var(--ns-spacing);
  border-radius: var(--ns-r);
  margin: 10px 0;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
