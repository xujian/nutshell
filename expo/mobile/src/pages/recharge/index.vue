<template>
  <div class="page recharge-page">
    <page-header
      color-mode="dark"
      class="recharge-header"
      title="大道云 Pro">
      <img
        class="caption-image"
        src="https://cdn.ddjf.com/static/images/appkit/recharge-title.png"
      />
      <view class="ribbon"></view>
    </page-header>
    <recharge-view
      v-if="loaded"
      :app="params.app"
      :tenant="params.tenant"
      @complete="onRechargeComplete"
    />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import Taro from '@tarojs/taro'
import { PageHeader, RechargeView, type PaymentParams } from '@uxda/appkit-next'
import { useStaging } from '~/composables/useStaging'

const { leave, checkStage } = useStaging()

checkStage()

const loaded = ref<boolean>(false)

const onPageHeaderClose = () => {
  leave()
}

/**
 * 支付完毕后
 * 跳回过来的小程序
 * @param result
 */
const onRechargeComplete = (result: boolean) => {
  // 用户取消支付时
  // 停在这里不动
  console.log(`===onRechargeComplete===, result=${result}`)
  if (!result) return
  Taro.redirectTo({
    url: '/pages/recharge/result'
  })
}

const params = reactive<Partial<PaymentParams>>({
  app: '',
  tenant: '',
  amount: ''
})

onMounted(() => {
  const search = Taro.getCurrentInstance().router?.params!
  params.app = search.app
  params.tenant = search.tenant
  loaded.value = true
})
</script>

<style lang="scss">
.recharge-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .recharge-view {
    flex-grow: 1;
    padding: 20px 10px 10px 10px;
  }
  .recharge-header {
    // break out container
    background-image: linear-gradient(149deg, #363231 -0.81%, #353137 47.43%);
    overflow: hidden;
    height: 172px;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -20px;
      right: 0;
      background-image: url(https://cdn.ddjf.com/static/images/cashier/coin.png);
      background-repeat: no-repeat;
      background-size: 120px;
      background-position: 90% bottom;
      opacity: 30%;
    }
    .caption-image {
      // 云豆充值
      position: absolute;
      width: 91px;
      height: 18.5px;
      bottom: 30px;
      left: 30px;
    }
    .ribbon {
      // 金色带
      width: 100%;
      height: 8px;
      left: 0;
      bottom: 0;
      position: absolute;
      background: linear-gradient(105deg, #f4e2ce 1.88%, #debb9b 98.18%);
      box-shadow: 0px -10px 9px -3px rgba(0, 0, 0, 0.33);
      &::before {
        // 小三角 圆角正方形旋转45度
        content: '';
        position: absolute;
        top: -6px;
        left: 64px;
        width: 12px;
        height: 12px;
        border-radius: 2px;
        background-color: #e9d6c0;
        transform: rotate(45deg);
        z-index: 0;
      }
    }

    &.showHome {
      .back-button {
        background-image: url('https://cdn.ddjf.com/static/images/customer-center/home-icon.png');
        background-size: 32px;
        left: 15px;
      }
    }
  }
}
</style>
