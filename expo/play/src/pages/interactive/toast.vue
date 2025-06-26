<template>
  <ns-page class="toast-page">
    <ns-page-header title="吐司消息" caption="$n.toast"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h3>用法</h3>
      <code-view language="javascript" :code="codes[0]" />
      <ns-card fill="#CDDC39" class="my-md">
        <ns-row justify="between">
          <ns-button @click="toastNormalMessage">缺省配置</ns-button>
          <div class="caption">显示在页面顶部正中</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[1]" />
      <p>&nbsp;</p>
      <h3>消息的类型</h3>
      <ns-card fill="#CDDC39" class="my-md">
        <ns-row justify="between">
          <ns-button @click="toastSuccessMessage">显示正面消息</ns-button>
          <div class="caption">type: 'success'</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[1]" />
      <ns-card fill="#CDDC39" class="my-md">
        <ns-row justify="between">
          <ns-button @click="toastErrorMessage">显示负面消息</ns-button>
          <div class="caption">type: 'error'</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[2]" />
      <ns-card fill="#CDDC39" class="my-md">
        <ns-row justify="between">
          <ns-button @click="toastWarningMessage">显示警告</ns-button>
          <div class="caption">type: 'warning'</div>
        </ns-row>
      </ns-card>
      <code-view language="javascript" :code="codes[3]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro'

const $n = useNutshell()

const toastNormalMessage = () => {
  $n.toast('操作已完成')
}
const toastSuccessMessage = () => {
  $n.toast('操作已完成', {
    type: 'success'
  })
}
const toastErrorMessage = () => {
  $n.toast('保存失败', {
    type: 'error'
  })
}
const toastWarningMessage = () => {
  $n.toast('手机号格式不对', {
    type: 'warning'
  })
}

const codes = [
`import { useNutshell } from '@uxda/nutshell/taro'

const $n = useNutshell()
$n.toast(<message>, {
  duration: 2000,
  type: 'success' // 可选值：'success' | 'error' | 'warning' | 'info'
})`,
`$n.toast('操作已完成')`,
`$n.toast('操作已完成', {
  type: 'success'
})`,
`$n.toast('保存失败', {
  type: 'error'
})`,
`$n.toast('手机号格式不对', {
  type: 'warning'
})`,
]
</script>

<style lang="scss">
.sheet-page {
  background-color: var(--ns-neutral);
}
</style>
