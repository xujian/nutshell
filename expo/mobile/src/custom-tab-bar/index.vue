<template>
  <ns-tabbar class="basic-tabbar"
    :items="items"
    :style="style">
  </ns-tabbar>
</template>
<script lang="ts" setup>
import { useSafeArea } from '@uxda/appkit-next'

const { bottom } = useSafeArea()

// 使用 useSafeAre 避开底部的操作条
const style = {
  paddingBottom: `${bottom}px`
}

const items = [
  {
    label: '首页',
    icon: 'home'
  },
  {
    label: '账户',
    icon: 'account'
  },
]
</script>
<style lang="scss">
@import url('./index.scss');

.basic-tabbar {
  --font-size-sm: 14px;
  --icon-md: 16px;
  border-top: solid 1px #ddd;
  .ns-icon {
    width: 24px;
    height: 24px;
  }
  font-size: 12px;
  .ni-icon {
    --font-size-sm: 16px;
  }
}
</style>
