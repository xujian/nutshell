<template>
  <ns-page>
    <ns-page-header title="底部滑出浮窗"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-card fill="#fff">
        <ns-row justify="between">
          <ns-button @click="openSheet">底部弹出浮窗</ns-button>
          <div class="caption">打开 50 vh高度</div>
        </ns-row>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro';
import DemoSheet from '../../components/DemoSheet.vue'

const $n = useNutshell()

const openSheet = () => {
  $n.sheet({
    component: DemoSheet,
    props: {
      message: '香港著名演员梁朝伟获颁香港科技大学人文学荣誉博士'
    },
    height: '50vh'
  })
}
</script>

