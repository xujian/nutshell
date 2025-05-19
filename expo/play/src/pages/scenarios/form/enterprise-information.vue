<template>
  <ns-page class="create-contact-page" fill="#f1f2f4">
    <ns-page-header title="企业资料" has-back-button reveal :blur="10" />
    <ns-page-content>
      <ns-form class="contract-form" v-model="formData" ref="form" failed="notice">
        <ns-card fill="#fff" class="mb-md" title="企业认证信息">
          <ns-input v-model="formData.公司名称" label="公司名称" placeholder="请输入公司名称名" required name="公司名称"></ns-input>
          <ns-input v-model="formData.统一社会信用代码" label="统一社会信用代码" placeholder="请输入统一社会信用代码" required name="统一社会信用代码"></ns-input>
          <ns-input v-model="formData.法人姓名" label="法人姓名" placeholder="请输入法人姓名" required name="法人姓名">
            <template #append>
              <ns-icon name="https://cdn.ddjf.com/static/images/nutshell/camera.png" size="xl" />
            </template>
          </ns-input>
          <ns-id-input v-model="formData.法人证件号码" required placeholder="请输入法人证件号码" name="法人证件号码" label="法人证件号码"/>
          <ns-mobile-input name="法人手机号码" required label="法人手机号码" placeholder="请输入法人手机号码" v-model="formData.法人手机号码" />
          <ns-radio-group name="企业管理员" v-model="formData.企业管理员" label="企业管理员">
            <ns-radio value="FR" label="法人"></ns-radio>
            <ns-radio value="DLR" label="代理人"></ns-radio>
          </ns-radio-group>
          <ns-input v-model="formData.代理人姓名" label="代理人姓名" placeholder="请输入代理人姓名" required name="代理人姓名">
            <template #append>
              <ns-icon name="https://cdn.ddjf.com/static/images/nutshell/camera.png" size="xl" />
            </template>
          </ns-input>
          <ns-id-input v-model="formData.代理人证件号码" required placeholder="请输入代理人证件号码" name="代理人证件号码" label="代理人证件号码"/>
          <ns-mobile-input name="代理人手机号码" required label="代理人手机号码" placeholder="请输入代理人手机号码" v-model="formData.代理人手机号码" />
        </ns-card>
      </ns-form>
    </ns-page-content>
    <ns-page-footer fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button style="flex: 1" size="lg" color="primary">提交并且生成认证链接</ns-button>
      </div>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formData = reactive({
  公司名称: '',
  统一社会信用代码: '',
  法人姓名: '',
  法人证件号码: '',
  法人手机号码: '',
  企业管理员: 'FR',
  代理人姓名: '',
  代理人证件号码: '',
  代理人手机号码: ''
})

</script>

<style lang="scss">
</style>
