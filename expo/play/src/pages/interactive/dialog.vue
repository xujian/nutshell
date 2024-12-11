<template>
  <ns-page class="dialog-page">
    <ns-page-header title="对话框" has-back-button />
    <ns-page-content>
      <ns-card fill="#fff">
        <ns-row justify="center">
          <ns-button @click="openMessageDialog">弹出消息对话框</ns-button>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[0]" />
      <ns-card>
        <ns-row justify="center">
          <ns-button @click="openFormDialog">弹出嵌入对话框</ns-button>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[1]" />
      <ns-card>
        <ns-row justify="center">
          <ns-button @click="openConfirm">弹出确认框</ns-button>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[2]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro'
import DemoDialog from '../../components/DemoDialog.vue'


const $n = useNutshell()

const codes = [
`$n.dialog({
  title: '注意',
  message: [
    '该合同已过截止日期',
    '如需签署请重置截止日期'
  ],
  cancelText: ''
})`,
`$n.dialog({
  component: DemoDialog,
  props: {
    total: 100
  }
})`,
`$n.confirm('确定要删除吗?')`
]

const openMessageDialog = () => {
  $n.dialog({
    title: '注意',
    message: [
      '该合同已过截止日期',
      '如需签署请重置截止日期'
    ],
    cancelText: ''
  })
}

const openFormDialog = () => {
  $n.dialog({
    component: DemoDialog,
    props: {
      total: 100
    }
  })
}

const openConfirm = () => {
  $n.confirm('确定要删除吗?')
}
</script>
