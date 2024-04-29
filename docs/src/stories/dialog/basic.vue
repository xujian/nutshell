<template>
  <ns-button
    size="sm"
    width="100"
    color="negtive"
    label="弹出对话框" @click="onOpenDialogButtonClick" />

  <ns-button
    size="sm"
    width="100"
    color="negtive"
    label="无按钮弹窗" @click="onOpenDialogNoButtonsButtonClick" />
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const onOpenDialogButtonClick = () => {
  $n.dialog({
    title: '客户',
    message: '消息内容',
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
    onOk: () => {
      return true
    }
  })
}
</script>
