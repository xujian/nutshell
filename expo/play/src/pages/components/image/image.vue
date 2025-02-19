<template>
  <ns-page class="image-page" fill="neutral">
    <ns-page-header title="图片"
      caption="<ns-image>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-image
        src="https://simple.shensi.tech/upload/laundry.jpg"
        width="100%" />
      <code-view language="html" :code="codes[0]" />
      <p>&nbsp;</p>
      <ns-column justify="center" :gap="10">
        <ns-image
          src="https://simple.shensi.tech/upload/laundry.jpg"
          :aspect-ratio
          :fit
          :drift
          :float
          stroke="#000"
          width="60%" />
        <ns-button-group fill="#000"
          size="sm"
          v-model="aspectRatio"
          :items="aspectRatios" />
        <ns-button-group fill="#000"
          size="sm"
          v-model="fit"
          :items="fits" />
        <ns-button-group fill="#000"
          size="sm"
          v-model="float"
          :items="floats" />
        <ns-button-group fill="#000"
          size="sm"
          v-model="drift"
          :items="drifts" />
      </ns-column>
      <callout fill="#fff" title="注意" icon="info">
        <p>可以用 :aspect-ratio="1" 使图片保持固定长宽比</p>
      </callout>
      <code-view language="html" :code="codes[1]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const aspectRatio = ref(1),
  aspectRatios = [
    { label: '1:1', value: '1' },
    { label: '4:3', value: '4/3' },
    { label: '16:9', value: '16/9' },
    { label: '3:2', value: '3/2' },
    { label: '2:1', value: '2' },
  ],
  float = ref('center'),
  floats = [
    { label: 'TOP', value: 'top' },
    { label: 'CENTER', value: 'center' },
    { label: 'BOTTOM', value: 'bottom' },
  ],
  drift = ref('center'),
  drifts = [
    { label: 'LEFT', value: 'left' },
    { label: 'CENTER', value: 'center' },
    { label: 'RIGHT', value: 'right' }
  ],
  fit = ref('cover'),
  fits = [
    { label: 'COVER', value: 'cover' },
    { label: 'CONTAIN', value: 'contain' },
  ]

const codes = [
`<ns-image
  src="https://simple.shensi.tech/upload/laundry.jpg"
  width="100%" />`,
`<ns-image
  src="https://simple.shensi.tech/upload/laundry.jpg"
  :aspect-ratio
  width="60%" />`
]
</script>

<style lang="scss">

</style>
