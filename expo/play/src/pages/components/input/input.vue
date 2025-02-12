<template>
  <ns-page class="input-page">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-input
          label="文本"
          placeholder="请输入文本"
          v-model="formData.val1" />
        <h2>禁用</h2>
        <ns-input
          label="文本"
          placeholder="输入框已禁用"
          v-model="formData.val2"
          disabled
        />
        <h2>插槽的使用</h2>
        <ns-input
          v-model="formData.val3"
          label="文本"
          placeholder="左侧label添加图标"
        >
          <template #prepend>
            <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
          </template>
        </ns-input>
        <ns-input
          v-model="formData.val4"
          label="文本"
          placeholder="右侧内容添加按钮"
        >
          <template #append>
            <ns-button size="sm" color="neutral" variant="outlined">按钮</ns-button>
          </template>
        </ns-input>
        <h2>长度限制(10)</h2>
        <ns-input
          v-model="formData.val5"
          label="文本"
          maxlength="10"
          placeholder="请输入文本"
        />
        <h2>对齐方式(props.variant === 'solid' ? 'left' : 'right')</h2>
        <ns-input
          v-model="formData.val6"
          label="文本"
          variant="solid"
          placeholder="输入框内容对齐方向"
        />
        <h2>身份证输入框</h2>
        <ns-id-input
          v-model.value="formData.val7"
          placeholder="请输入证件号码"
          name="id"
          label="证件号码"/>
        <h2>数字输入框</h2>
        <ns-number-input
          label="数字"
          name="phone"
          placeholder="请输入"
          v-model="formData.val8"
        />
        <h2>手机号输入框</h2>
        <ns-mobile-input
          label="手机号"
          name="phone"
          placeholder="请输入手机号"
          v-model="formData.val9"
        />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const formData = reactive({
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: '',
  val7: '',
  val8: '',
  val9: ''
})
</script>

<style lang="scss">

</style>

