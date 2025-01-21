<template>
  <ns-page>
    <ns-page-header title="客户详情"
      color-scheme="dark"
      fill="#000"
      has-back-button
      reveal>
    </ns-page-header>
    <ns-page-content>
      <h2>基本用法</h2>
      <!-- <ns-input label="姓名" v-model="val"/> -->
      <ns-form class="login-form">
        <ns-input variant="solid"
          label="手机号"
          size="md"
          placeholder="请输入手机号"
          name="phone" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const val = ref('')
</script>

