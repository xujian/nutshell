<template>
  <ns-page class="sheet-page">
    <ns-page-header title="Sheet"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-card fill="#CDDC39" class="my-md">
        <ns-row justify="between">
          <ns-button @click="openSheetHalfHeight">底部弹出浮窗</ns-button>
          <div class="caption">打开 50vh 高度</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[0]" />
      <ns-card fill="#8BC34A" class="my-md">
        <ns-row justify="between">
          <ns-button @click="openSheetAutoHeight">底部弹出浮窗</ns-button>
          <div class="caption">自动高度、填色</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[1]" />
      <ns-card fill="#8BC34A" class="my-md">
        <ns-row justify="between">
          <ns-button @click="openSheetComplete">底部弹出浮窗</ns-button>
          <div class="caption">呼叫关闭</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[2]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro';
import DemoSheet from '../../components/DemoSheet.vue'

const $n = useNutshell()

const openSheetHalfHeight = () => {
  $n.sheet({
    component: DemoSheet,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    closable: true,
    height: '50vh',
    title: '客户详情'
  })
}

const openSheetAutoHeight = () => {
  $n.sheet({
    component: DemoSheet,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    fill: '#8BC34A',
    closable: true,
    title: '客户详情'
  })
}

const openSheetComplete = () => {
  $n.sheet({
    component: DemoSheet,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    fill: '#8BC34A',
    closable: true,
    title: '客户详情'
  })
}

const codes = [
`$n.sheet({
  component: DemoSheet,
  props: {
    message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
  },
  closable: true,
  height: '50vh',
  title: '客户详情'
})`,
`$n.sheet({
  component: DemoSheet,
  props: {
    message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
  },
  fill: '#8BC34A',
  closable: true,
  title: '客户详情'
})`,
`$n.sheet({
  component: DemoSheet,
  props: {
    message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
  },
  fill: '#8BC34A',
  closable: true,
  title: '客户详情'
})`,
]
</script>

<style lang="scss">
.sheet-page {
  background-color: var(--ns-neutral);
}
</style>
