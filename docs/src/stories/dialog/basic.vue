<template>
  <ns-row justify="start">
    <ns-button
      color="primary"
      label="弹出对话框" @click="onOpenDialogButtonClick" />
    <ns-button
      color="primary"
      label="无按钮弹窗" @click="onOpenDialogNoButtonsButtonClick" />
    <ns-button
      color="primary"
      label="异步回调方法" @click="onOpenDialogAsyncOnCompleteClick" />
  </ns-row>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenDialogButtonClick = () => {
  $n.dialog({
    title: '客户',
    message: '消息内容',
    cancelText: '',
    centered: true,
    onOk: () => {
      return true
    }
  })
}

const onOpenDialogNoButtonsButtonClick = () => {
  $n.dialog({
    title: '客户',
    message: '消息内容',
    footer: false,
    centered: true,
    onOk: () => {
      return true
    }
  })
}

const onOpenDialogAsyncOnCompleteClick = () => {
  $n.dialog({
    title: '客户',
    message: '消息内容',
    centered: true,
    onComplete: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 5000)
      })
    }
  })
}
</script>
