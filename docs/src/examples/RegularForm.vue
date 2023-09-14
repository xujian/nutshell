<template>
  <ns-card title="新建意向客户">
    <ns-form name="client" variant="outlined" autocomplete="off">
      <h3 class="mt-xl mb-lg">基础信息</h3>
      <ns-input name="name"
        label="客户姓名"
        v-model="formData.name" />
      <ns-id-input name="id"
        label="证件号码"
        v-model="formData.id" />
      <ns-select name="marriage"
        label="婚姻状态"
        v-model="formData.marrage"
        :options="marrageOptions" />
      <ns-mobile-input name="mobile"
        label="手机号"
        v-model="formData.mobile" />
      <h3 class="mt-xl mb-lg">基础信息</h3>
      <ns-rating label="意向等级"
        name="intention"
        v-model="formData.intention" />
      <ns-chips label="客户标签"
        name="tags"
        :options="chipsOptions"
        v-model="formData.tags" />
    </ns-form>
    {{ formData.mobile }}
  </ns-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

const formData = reactive({
  name: '',
  id: '',
  marrage: '',
  mobile: '18676768200',
  intention: 2,
  tags: []
})

const chipsOptions = [
  { label: '有车', value: 'YC' },
  { label: '保单', value: 'BD' },
  { label: '有经营公司', value: 'YJYGS' },
  { label: '未加微信', value: 'WJWX' },
  { label: '公积金', value: 'GJJ' },
  { label: '黑名单', value: 'HMD' },
]

const marrageOptions = [
  { label: '未婚', value: 'married' },
  { label: '已婚', value: 'unmarried' },
  { label: '离异', value: 'divorced' },
  { label: '丧偶', value: 'widowed' },
]

onMounted(() => {
  setTimeout(() => {
    formData.id = '132'
    formData.mobile = '189'
    console.log('+++')
  }, 2000)
})

</script>