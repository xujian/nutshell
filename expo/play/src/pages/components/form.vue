<template>
  <ns-page class="form-page" fill="neutral">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
        <h3>数字输入框</h3>
        <ns-card fill="#fff">
          <ns-number-input
            v-model="formData.count"
            name="count"
            :step="1"
            :min="90"
            :max="110"
            :rules="['required']"
            label="最大数量" />
        </ns-card>
        <h3>选择框</h3>
        <ns-card fill="#fff">
          <ns-select
            v-model="formData.due"
            :options
            :formatter
            placeholder="请输入截止日期"
            hint="仅支持最高 720p、5 秒，限每月 50 个视频"
            :rules="['required']"
            label="截止日期" />
        </ns-card>
        <h3>多选框</h3>
        <ns-card fill="#fff">
          <ns-multiple-select
            v-model="formData.regions"
            placeholder="请选择经营地区"
            :options="regions"
            label="经营地区" />
        </ns-card>
        <h3>按钮组</h3>
        <ns-card fill="#fff" color-scheme="light">
          <ns-button-group-input label="跟进状态"
            v-model="formData.followup"
            :options="followupOptions" size="xs" />
        </ns-card>
        <h3>开关</h3>
        <ns-card fill="#fff" color-scheme="light">
          <ns-switch-input label="允许撤销"
            hint="仅支持最高 720p、5 秒，限每月 50 个视频"
            :rules="['required']"
            v-model="formData.allowCancel" />
        </ns-card>
        <h3>单选框</h3>
        <ns-card fill="#fff" color-scheme="light">
          <ns-radio-group label="性别"
            v-model="formData.allowCancel"
            :options="[{label: '男', value: 1}, { label: '女', value: 0}]" />
        </ns-card>
        <h3>日期输入框</h3>
        <ns-card fill="#fff" color-scheme="light">
          <ns-date-input label="开始日期"
            v-model="formData.date" />
        </ns-card>
        <h3>文件上传</h3>
        <ns-card fill="#fff" color-scheme="light">
          <ns-upload label="上传"
            v-model="files" />
        </ns-card>
      </ns-form>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { useBus } from '@uxda/nutshell/taro'

const $bus = useBus()

const options = [
  { label: '1天', value: 1 },
  { label: '2天', value: 2 },
  { label: '3天', value: 3 },
  { label: '4天', value: 4 },
  { label: '5天', value: 5 },
]

const regions = [
  { label: '北京', value: 'beijing' },
  { label: '南京', value: 'nanjing' },
  { label: '上海', value: 'shanghai' },
  { label: '深圳', value: 'shenzhen' },
  { label: '广州', value: 'guangzhou' },
  { label: '厦门', value: 'xiamen' },
  { label: '成都', value: 'chengdu' },
  { label: '杭州', value: 'hangzhou' },
  { label: '重庆', value: 'chongqing' },
  { label: '武汉', value: '武汉' },
]

const followupOptions = [
  {
    value: '1',
    label: '已跟进'
  },
  {
    value: '2',
    label: '未跟进'
  },
]

const formatter = (value: number | string) => {
  const today = dayjs(),
    due = today.add(+value, 'day').format('YYYY-MM-DD')
  return value
    ? `${value}天, ${due}`
    : ''
}

const formData = reactive({
  count: 100,
  due: void 0,
  followup: void 0,
  allowCancel: void 0,
  regions: [],
  gender: void 0,
  date: void 0,
})
const show1 = ref(false)

const list = ref([
  {
    name: 'option1'
  },
  {
    name: 'option2'
  },
  {
    name: 'option3'
  }
])

const files = ref([
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop'
  },
  {
    id: '65d6e705febeec0001323139',
    name: '1653152566529.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1653152566529-c3b44fd5efea',
    thumb: 'https://images.unsplash.com/photo-1653152566529-c3b44fd5efea?q=80&w=480&auto=format&fit=crop'
  }
])
</script>

