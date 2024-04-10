<template>
  <ns-button
    size="sm"
    width="100"
    color="negtive"
    label="弹出消息" @click="onOpenDialogButtonClick" />
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenDialogButtonClick = () => {
  $n.toast('客户信息已保存', {
    duration: 2000,
  })
}
</script>
