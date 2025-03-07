<template>
  <ns-page class="input-page">
    <ns-page-header title="输入框"
      fill="#ffffff88"
      caption="<ns-input>"
      :blur="40" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法</h2>
        <ns-card fill="#fff">
          <ns-input
            label="姓名"
            placeholder="请输入姓名"
            v-model="formData.val1" />
        </ns-card>
        <code-view language="html" :code="codes[0]" />
        <h2>禁用</h2>
        <ns-card fill="#fff">
          <ns-input
            label="姓名"
            placeholder="输入框已禁用"
            v-model="formData.val2"
            disabled
          />
        </ns-card>
        <code-view language="html" :code="codes[1]" />
        <h2>插槽的使用</h2>
        <ns-card fill="#fff">
          <ns-input
            v-model="formData.val3"
            label="姓名"
            placeholder="左侧label添加图标">
          <template #prepend>
            <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
            </template>
          </ns-input>
        </ns-card>
        <ns-card fill="#fff">
          <ns-input
            v-model="formData.val4"
            label="姓名"
            placeholder="右侧内容添加按钮">
          <template #append>
            <ns-button size="sm" color="neutral" variant="outlined">按钮</ns-button>
          </template>
        </ns-input>
        </ns-card>
        <code-view language="html" :code="codes[2]" />
        <h2>长度限制(10)</h2>
        <ns-card fill="#fff">
          <ns-input
            v-model="formData.val5"
            label="姓名"
            name="name"
            maxlength="10"
            placeholder="请输入姓名"/>
        </ns-card>
        <code-view language="html" :code="codes[3]" />
        <h2>对齐方式(props.variant === 'solid' ? 'left' : 'right')</h2>
        <ns-card fill="#fff">
          <ns-input
          v-model="formData.val6"
          label="姓名"
            name="name"
          variant="solid"
          placeholder="输入框内容对齐方向" />
        </ns-card>
        <code-view language="html" :code="codes[4]" />
        <h2>身份证输入框</h2>
        <ns-card fill="#fff">
          <ns-id-input
            v-model.value="formData.val7"
            placeholder="请输入证件号码"
            name="id"
            label="证件号码"/>
        </ns-card>
        <code-view language="html" :code="codes[5]" />
        <h2>数字输入框</h2>
        <ns-card fill="#fff">
          <ns-number-input
            label="年龄"
            name="phone"
            placeholder="请输入年龄"
            v-model="formData.val8"
          />
        </ns-card>
        <code-view language="html" :code="codes[6]" />
        <h2>手机号输入框</h2>
        <ns-card fill="#fff">
          <ns-mobile-input
            label="手机号"
            name="phone"
            placeholder="请输入手机号"
            v-model="formData.val9"
          />
        </ns-card>
        <code-view language="html" :code="codes[7]" />
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

const codes = [
`<ns-input
  label="姓名"
  placeholder="请输入姓名"
  v-model="formData.val1" />`,
`<ns-input
  label="姓名"
  placeholder="输入框已禁用"
  v-model="formData.val2"
  disabled
/>`,
`<ns-input
  v-model="formData.val3"
  label="姓名"
  placeholder="左侧label添加图标"
>
  <template #prepend>
    <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
  </template>
</ns-input>
<ns-input
  v-model="formData.val4"
  label="姓名"
  placeholder="右侧内容添加按钮"
>
  <template #append>
    <ns-button size="sm" color="neutral" variant="outlined">按钮</ns-button>
  </template>
</ns-input>`,
`<ns-input
  v-model="formData.val5"
  label="姓名"
  maxlength="10"
  placeholder="请输入姓名"
/>`,
`<ns-input
  v-model="formData.val6"
  label="姓名"
  variant="solid"
  placeholder="输入框内容对齐方向"
/>`,
`<ns-id-input
  v-model.value="formData.val7"
  placeholder="请输入证件号码"
  name="id"
  label="证件号码"/>`,
`<ns-number-input
  label="数字"
  name="phone"
  placeholder="请输入"
  v-model="formData.val8"
/>`,
`<ns-mobile-input
  label="手机号"
  name="phone"
  placeholder="请输入手机号"
  v-model="formData.val9"
/>`
]
</script>

<style lang="scss">

</style>

