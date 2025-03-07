<template>
  <ns-page class="create-contract-page">
    <ns-page-header title="提现" has-back-button
      fill="#ffffff" />
    <ns-page-content>
      <div class="mb-md">
        <p class="caption">
          当前仅支持支付宝提现, 最低提现金额30元, 最高提现金额2万元。预计1-2个工作日到账。
        </p>
      </div>
      <ns-form class="withdraw-form" v-model="formData" ref="formRef">
        <ns-card fill="#fff" class="mb-md">
          <ns-select
            label="提现方式"
            name="via"
            placeholder="请选择提现方式"
            :rules="['required']"
            :options="[
              { label: '银行卡', value: 'bank' },
              { label: '支付宝', value: 'alipay' },
              { label: '微信', value: 'wechat' }
            ]"
            v-model="formData.via" />
          <ns-input
            label="真实姓名"
            name="name"
            placeholder="请输入真实姓名"
            :rules="['required']"
            v-model="formData.name" />
        </ns-card>
        <ns-card fill="#fff" class="mb-md" v-if="formData.via === 'bank'">
          <h3 class="mb-sm">银行卡信息</h3>
          <ns-select
            label="银行"
            name="bank"
            placeholder="请选择银行"
            :rules="['required']"
            :options="[
              { label: '工商银行', value: 'icbc' },
              { label: '建设银行', value: 'ccb' },
              { label: '农业银行', value: 'abc' },
              { label: '招商银行', value: 'cmb' }
            ]"
            v-model="formData.bank" />
          <ns-input
            label="开户名"
            name="accountName"
            placeholder="请输入开户名"
            :rules="['required']"
            v-model="formData.accountName" />
          <ns-input
            label="银行卡号"
            name="accountNumber"
            placeholder="请输入银行卡号"
            :rules="['required']"
            v-model="formData.accountNumber" />
          <ns-input
            label="支行"
            name="branch"
            placeholder="请输入支行"
            v-model="formData.branch" />
        </ns-card>

        <ns-card fill="#fff" class="mb-md"
          v-if="formData.via === 'alipay'">
          <ns-input
            label="支付宝账号"
            name="alipayAccount"
            placeholder="请输入支付宝账号"
            :rules="['required']"
            v-model="formData.alipayAccount" />
          <ns-input
            label="真实姓名"
            name="alipayName"
            placeholder="请输入真实姓名"
            :rules="['required']"
            v-model="formData.alipayName" />
        </ns-card>

        <ns-card fill="#fff" class="mb-md"
          v-if="formData.via === 'wechat'">
          <ns-input
            label="微信账号"
            name="wechatAccount"
            placeholder="请输入微信账号"
            :rules="['required']"
            v-model="formData.wechatAccount" />
        </ns-card>

        <ns-card title="提现金额" fill="#fff" class="mb-md">
          <ns-number-input
            class="amount-input"
            name="amount"
            label="¥"
            text-align="left"
            placeholder="请输入提现金额"
            v-model="formData.amount"
            :rules="[
              { name: 'required', message: '请输入提现金额' },
              { method: (v) => v <= 余额, message: '提取金额不能超过最大可提取金额' },
              { method: (v) => v >= 30, message: '提取金额不能小于30元' }
            ]">
            <template #append>
              <ns-button
                size="xs"
                label="全部提现"
                color="primary"
                variant="soft"
                class="all-btn"
                @click="withdrawAll"
              />
            </template>
          </ns-number-input>
          <template #footer>
            <p class="caption">当前可提现金额 {{ 余额 }} 元</p>
          </template>
        </ns-card>
      </ns-form>
      
    </ns-page-content>
    <ns-page-footer>
      <ns-row justify="stretch">
        <ns-button
          label="取消"
          variant="outlined"
          class="shrink"
          size="lg"
          @click="handleCancel" />
        <ns-button
          label="提现"
          color="primary"
          size="lg"
          @click="handleSubmit" />
      </ns-row>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formRef = ref<any>(null)
const 余额 = ref(18760) 

const formData = reactive<{
  amount: number | undefined,
  [key: string]: any
}>({
  amount: void 0,
  via: 'wechat',
  name: '',
  bank: '',
  accountName: '',
  accountNumber: '',
  branch: '',
  alipayAccount: '',
  alipayName: '',
  wechatAccount: '',
  remark: ''
})

const handleCancel = () => {
  console.log('取消')
}

const handleSubmit = () => {
  console.log('handleSubmit', formData)
  formRef.value.validate().then((res: any) => {
    console.log(res)
  })
}

const withdrawAll = () => {
  formData.amount = 余额.value
}
</script>

<style lang="scss">
.create-contract-page {
  background-color: #f5f5f5;
  .amount-input {
    .input-text {
      text-align: left;
      font-size: 24px;
      &::placeholder {
        color: #f99;
      }
    }
    .nut-form-item__label {
      font-size: 24px;
    }
  }
}


</style>