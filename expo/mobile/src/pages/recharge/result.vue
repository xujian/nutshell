<template>
  <recharge-result @dismiss="onRechargeResultDismiss" />
</template>

<script lang="ts" setup>
import Taro, { useDidShow } from '@tarojs/taro'
import { RechargeResult } from '@uxda/appkit-next'
import { useStaging } from '@uxda/appkit-next'

const { jumped, leave, checkStage } = useStaging()

useDidShow(() => {
  checkStage()
})

function onRechargeResultDismiss() {
  if (jumped.value) {
    Taro.redirectTo({
      url: '/pages/recharge/result',
      complete() {
        leave()
      }
    })
  } else {
    leave()
  }
}
</script>

<style lang="scss"></style>
