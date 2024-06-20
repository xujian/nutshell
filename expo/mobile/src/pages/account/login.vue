<template>
  <ns-column align="stretch" justify="between" class="page login-page">
    <ns-row class="image flex-grow">
      <img src="https://cdn.ddjf.com/static/images/customer-center/mini-login-img.png" />
    </ns-row>
    <Transition name="fade">
      <ns-button
        size="lg"
        color="positive"
        v-if="isQuickLogin">手机号快捷登录</ns-button>
      <ns-form class="login-form" v-else>
        <ns-input variant="solid"
          size="md"
          placeholder="请输入手机号"
          name="phone" />
        <ns-input variant="solid"
          size="md"
          placeholder="请输入验证码"
          maxlength="6"
          name="code" />
        <ns-button size="lg"
          class="full-width mt-md"
          color="positive"
          label="登录" />
      </ns-form>
    </Transition>
    <ns-checkbox v-model="agreed" class="agreement-checkbox">
      我已阅读并同意 <a class="link" @click="onAggreementClick">《用户协议和隐私政策》</a>
    </ns-checkbox>
    <div class="switch column">
      <ns-divider>其他登录方式</ns-divider>
      <ns-button variant="plain" color="positive"
        v-if="!isQuickLogin"
        @click="isQuickLogin = true">手机号快捷登录</ns-button>
      <ns-button variant="plain" color="positive"
        v-if="isQuickLogin"
        @click="isQuickLogin = false">验证码登录</ns-button>
      <p>&nbsp;</p>
    </div>
  </ns-column>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isQuickLogin = ref(true)
const agreed = ref(false)
const onAggreementClick = () => {

}
</script>

<style lang="scss">
.login-page {
  height: 100vh;
  background-color: #fff;
  padding: 0 var(--ns-spacing-lg);
  transition: all .5s ease;
  .image {
    img {
      width: 290px;
      height: 220px;
    }
  }
  .login-form {
  }
  .agreement-checkbox {
    font-size: 12px;
    .link {
      display: inline;
    }
  }
  .switch {
    flex-grow: 0;
  }
}
</style>
