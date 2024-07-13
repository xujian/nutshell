<template>
  <ns-tabbar class="basic-tabbar"
    :modelValue="selected"
    @update:modelValue="onChange"
    :items="items"
    :style="style">
  </ns-tabbar>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import { useSafeArea, useTabbar } from '@uxda/appkit-next'

const { bottom } = useSafeArea()
const selected = ref<string>('home')

// 使用 useSafeAre 避开底部的操作条
const style = {
  paddingBottom: `${bottom}px`
}

const items = [
  {
    label: '首页',
    value: 'home',
    icon: 'home',
    url: '/pages/home/index',
  },
  {
    label: '客户',
    value: 'clients',
    icon: 'clients',
    url: '/pages/clients/list',
  },
  {
    label: '产品',
    value: 'products',
    icon: 'products',
    url: '/pages/products/list',
  },
  {
    label: '账户',
    value: 'account',
    icon: 'account',
    url: '/pages/account/index',
  },
]

function onChange (value: string) {
  const index = items.findIndex(item => item.value == value || item.label == value)
  Taro.switchTab({
    url: items[index].url
  })
}

const { onTabChange } = useTabbar()
onTabChange((value: string) => {
  selected.value = value
})
</script>
<style lang="scss">
@import url('./index.scss');

.basic-tabbar {
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
