<template>
  <ns-page>
    <ns-page-header title="右侧栏"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-card fill="#fff">
        <ns-row justify="between">
          <ns-button @click="openDrawer">打开右侧栏</ns-button>
          <div class="caption">打开80%宽度</div>
        </ns-row>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro';
import DemoDrawer from '../../components/DemoDrawer.vue'

const $n = useNutshell()

const openDrawer = () => {
  $n.drawer({
    component: DemoDrawer,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    width: '80vw'
  })
}
</script>

