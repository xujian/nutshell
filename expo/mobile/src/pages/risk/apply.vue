<template>
  <div class="page apply-page">
    <page-header title="AI审批"
      color-mode="dark"
      texture="http://localhost:2024/images/mummy.svg"
      minimal="false"
      fill="#0d0c98">
      <h1>智能风控引擎</h1>
      <p class="caption">值得信赖的审批助手</p>
    </page-header>
    <ns-form class="apply-form" name="apply">
      <h3 class="form-title">申请人</h3>
      <ns-input label="客户姓名"
        v-model="formData.name"
        :rules="['required']" />
      <ns-id-input label="身份证号" placeholder="请输入身份证号"
        v-model="formData.id" />
      <ns-input label="企业名称" placeholder="请输入企业名称"
        v-model="formData.firmName" />
      <ns-mobile-input label="手机号码" placeholder="请输入手机号码"
        v-model="formData.mobile" />
    </ns-form>
  </div>
</template>

<script lang="ts" setup>
import { NsForm, NsInput, NsIdInput, NsMobileInput } from '@uxda/nutshell'
import { PageHeader } from '@uxda/appkit-next'
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  id: '',
  firmName: '',
  mobile: '',
})
</script>

<style lang="scss">
.apply-page {
  height: 100vh;
  .page-header {
    margin-bottom: -16px;
    .content {
      padding: 3em 1em;
      h1 {
        font-size: 32px;
      }
      .caption {
        color: #4d4dff;
      }
    }
  }
  .apply-form {
    .nut-cell-group {
      position: relative;
      padding: 0 var(--ns-spacing);
      border-radius: 16px;
      background-color: #fff;
      overflow: hidden;
    }
  }
}
</style>
