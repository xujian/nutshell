<template>
    <ns-form
      :variant="variant"
      name="client" autocomplete="off"
      v-model="formData">
      <h3>基础信息</h3>
      <ns-display label="金额">
        <ns-number :model-value="1024"
          size="xs"
          :minimumFractionDigits="2"
          hasDaxie />
      </ns-display>
      <ns-input
        label="申请人姓名"
        name="name"
        v-model="formData.name"
        @change="onNameChange"
        :rules="['required', {
          method: (v: string) => v?.length > 1,
          message: '最少两个字'
        }]" />
      <ns-date-input
        v-model="formData.divorceDate"
        name="divorceDate"
        class="divorce-date"
        label="离婚日期"
        placeholder="请输入离婚日期"
        :disabled-date="disabledDateOfPicker" />
      <ns-id-input name="id"
        label="证件号码"
        v-model="formData.id" />
      <ns-select name="marrage"
        label="婚姻状态"
        v-model="formData.marrage"
        :options="marrageOptions" />
      <ns-mobile-input name="mobile"
        label="手机号"
        v-model="formData.mobile" />
      <h3>基础信息</h3>
      <ns-rating-input label="意向等级"
        name="intention"
        v-model="formData.intention" />
      <ns-chips-input label="客户标签"
        name="tags"
        dropdown
        :options="chipsOptions"
        v-model="formData.tags" />
      <ns-number-input
        name="amount"
        label="金额"
        :precision="2"
        has-daxie
        v-model="formData.amount"
        :rules="['required', {
          method: (v: string) => Number(v) > 1000,
          message: '金额要大于1000'
        }]">
        <template #append>
          <ns-button size="sm" color="neutral" variant="outlined">检查</ns-button>
        </template>
      </ns-number-input>
    </ns-form>
    <ns-row justify="end">
      <ns-button-group
        color="primary"
        size="xs"
        round
        v-model="variant"
        :options="variantOptions"/>
    </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import dayjs from "dayjs";

const formData = reactive({
  name: '',
  id: '',
  marrage: '',
  mobile: '18676768200',
  intention: 2,
  tags: [],
  divorceDate: null,
  amount: null,
  text: '这是一个只读的文案'
})

const variant = ref('')

const variantOptions = [
  { label: '(空)', value: '' },
  { label: 'outline', value: 'outline' },
  { label: 'plain', value: 'plain' },
  { label: 'soft', value: 'soft' },
  { label: 'solid', value: 'solid' },
]

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

function disabledDateOfPicker(current: any) {
  return current && dayjs().isBefore(current, 'day')
}

function onNameChange (value: string) {
  console.log('===onNameChange, value=', value)
}

onMounted(() => {
  setTimeout(() => {
    formData.id = '132'
    formData.mobile = '189'
    console.log('+++')
  }, 2000)
})

</script>
