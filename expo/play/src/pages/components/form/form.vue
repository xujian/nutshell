<template>
  <ns-page class="form-page" fill="neutral">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
        <h3>文本输入框</h3>
        <ns-input
          v-model.trim="formData.name"
          name="name"
          :rules="['required']"
          label="姓名"
          placeholder="请输入姓名" />
        <h3>文本域输入框</h3>
        <ns-card fill="#fff">
          <ns-textarea
            style="height: 60px; --h: 60px"
            v-model="formData.description"
            name="description"
            :rules="['required']"
            label="补充信息"
            hasCount
            placeholder="请输入补充信息" />
        </ns-card>
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
        <h3>级联选择框</h3>
        <ns-card fill="#fff">
          <ns-cascading-select
            v-model="formData.cycle"
            :options="cycles"
            name="cycle"
            placeholder="请输入审批周期"
            seperator=""
            :rules="['required']"
            label="审批周期" />
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
            v-model="formData.date"
            has-time />
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
  name: '',
  description: '',
  count: 100,
  due: void 0,
  followup: void 0,
  allowCancel: void 0,
  regions: [],
  gender: void 0,
  date: void 0,
  cycle: void 0,
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

const cycles = [
    { label: '每日', value: 'daily'},
    { label: '每周', value: 'weekly',
      children: [
        { label: '周一', value: 'weekly_1' },
        { label: '周二', value: 'weekly_2' },
        { label: '周三', value: 'weekly_3' },
        { label: '周四', value: 'weekly_4' },
        { label: '周五', value: 'weekly_5' },
        { label: '周六', value: 'weekly_6' },
        { label: '周日', value: 'weekly_7' },
      ] },
    { label: '每月', value: 'monthly',
      children: new Array(28).fill({}).map((_, index) => {
        return { label: `${index + 1}日`, value: `monthly_${index + 1}` }
      }) },
  ],
  cycleFormatter = ([a, b]: any[]) => [
      a.label,
      b ? `${b.label}` : ''
    ].join('')
</script>

