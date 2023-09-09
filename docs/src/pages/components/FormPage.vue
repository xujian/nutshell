<template>
  <h1 class="my-lg">表单 &lt;ns-form&gt;</h1>
  <h2>新建意向客户</h2>
  <ns-form name="client" variant="outlined">
    <h3 class="mt-xl mb-lg">基础信息</h3>
    <ns-input name="name"
      label="客户姓名"
      v-model="formData.name" />
    <ns-input name="id"
      label="证件号码"
      v-model="formData.id" />
    <ns-select name="marriage"
      label="婚姻状态"
      v-model="formData.marrage"
      :options="marrageOptions" />
    <ns-input name="mobile"
      label="手机号"
      v-model="formData.mobile" />
    <h3 class="mt-xl mb-lg">基础信息</h3>
    <ns-rating label="意向等级"
      v-model="formData.intention" />
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  id: '',
  marrage: '',
  mobile: '',
  intention: 2,
  tags: []
})

const marrageOptions = [
  { label: '未婚', value: 'married' },
  { label: '已婚', value: 'unmarried' },
  { label: '离异', value: 'divorced' },
  { label: '丧偶', value: 'widowed' },
]
</script>

<style lang="scss">

</style>