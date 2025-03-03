<template>
  <ns-row justify="start">
    <ns-button
      width="100"
      color="primary"
      label="弹出消息" @click="onOpenToastButtonClick" />

    <ns-button
      width="100"
      color="primary"
      label="延迟关闭消息" @click="onOpenToastButtonClick1" />
  </ns-row>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenToastButtonClick = () => {
  $n.toast('客户信息已保存')
}

const onOpenToastButtonClick1 = () => {
  $n.toast('客户信息已保存', {
    duration: 2000,
  })
}
</script>
