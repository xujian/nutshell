<template>
  <ns-page class="create-contact-page">
    <ns-page-content>
      <ns-form class="contract-form" v-model="formData" ref="form" failed="notice">
        <ns-card fill="#fff" class="mb-md" title="添加备注">
          <ns-select v-model="formData.婚姻状态" name="提醒人员" label="提醒人员" placeholder="请选择提醒人员"
            :rules="['required']"
            :options="marrageOptions" />
          <ns-textarea name="备注" :rules="['required']" label="备注" placeholder="请输入备注" v-model="formData.备注" :maxlength="200" hasCount />
        </ns-card>
      </ns-form>
    </ns-page-content>
    <ns-page-footer fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button style="flex: 1; background: #fff" size="lg" variant="outlined" >取消</ns-button>
        <ns-button style="flex: 1" size="lg" color="primary" @click="save">保存</ns-button>
      </div>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Taro from '@tarojs/taro'

const formData = reactive({
  提醒人员: '',
  备注: '',
})


// 婚姻状态数据
const marrageOptions = [
  { label: '张三', value: 'zs' },
  { label: '李四', value: 'ls' },
  { label: '王五', value: 'ww' },
]

// 客户来源数据
const customOrigins = [
{ label: '其他', value: 'QT' },
{ label: '渠道', value: 'QD' },
{ label: '直营', value: 'ZY' },
]

function save(){
  Taro.navigateBack()
}

</script>

<style lang="scss">
</style>
