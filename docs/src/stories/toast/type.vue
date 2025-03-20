<template>
  <ns-row justify="start">
    <ns-button color="primary" label="普通消息提示" @click="onOpenToast('info')" />
    <ns-button color="positive" label="成功消息提示" @click="onOpenToast('success')" />
    <ns-button color="negtive" label="失败消息提示" @click="onOpenToast('error')" />
    <ns-button color="warning" label="警告消息提示" @click="onOpenToast('warning')" />
    <ns-button color="neutral" label="加载消息提示" @click="onOpenToast('loading')" />
  </ns-row>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenToast = (type: string) => {
  $n.toast('用于表示普通操作信息提示，可关闭', {
    type
  })
}
</script>
