<template>
  <ns-page class="apply-page">
    <page-header title="AI审批"
      color-mode="dark"
      texture="http://localhost:2024/images/mummy.svg"
      :minimal="false"
      fill="#0d0c98">
      <h1>智能风控引擎</h1>
      <p class="caption">值得信赖的审批助手</p>
    </page-header>
    <ns-form class="apply-form" name="apply">
      <h3 class="form-title">申请人</h3>
      <ns-input name="name"
        label="客户姓名"
        v-model="formData.name"
        :rules="['required']" />
      <ns-id-input name="id"
        label="身份证号"
        placeholder="请输入身份证号"
        v-model="formData.id" />
      <ns-input name="firm"
        label="企业名称"
        placeholder="请输入企业名称"
        v-model="formData.firm" />
      <ns-mobile-input
        name="mobile"
        label="手机号码"
        placeholder="请输入手机号码"
        v-model="formData.mobile" />
      <ns-date-input
        label="申请日期"
        name="date"
        placeholder="请输入申请日期"
        :has-calendar="false"
        v-model="formData.date" />
      <ns-select
        label="所在地"
        name="location"
        placeholder="请选择所在地"
        v-model="formData.location"
        :options="locations" />
      <ns-date-input
        label="起止日期"
        name="dateRange"
        placeholder="请输入起止日期"
        :has-calendar="true"
        v-model="formData.dateRange" />
    </ns-form>
    <div class="filter" @click="openDateFilter">
      <div class="text number">{{ dateRangeDisplay }}</div>
    </div>
  </ns-page>
</template>

<script lang="ts" setup>
import { NsPage, NsForm, NsInput, NsIdInput, NsMobileInput, useBus } from '@uxda/nutshell'
import { PageHeader } from '@uxda/appkit-next'
import { computed, reactive } from 'vue'
import DateFilter from '../../components/DateFilter.vue'

const $bus = useBus()

const filtering = reactive({
  dateFrom: '2024-06-01',
  dateTo: '2024-06-30',
})

const locations = [
  { label: '南京', value: 'Nanjing' },
  { label: '无锡', value: 'Wuxi' },
  { label: '海北', value: 'Haibei' },
  { label: '北京', value: 'Beijing' },
  { label: '连云港', value: 'Lianyungang' },
  { label: '长沙', value: 'Changsha' },
  { label: '武汉', value: 'Wuhan' }
]

const dateRangeDisplay = computed(() => {
  let startTime = filtering.dateFrom?.replace(/-/g, ".").substring(2);
  let endTime = filtering.dateTo?.replace(/-/g, ".").substring(2);
  return startTime + " - " + endTime;
})

function openDateFilter () {
  $bus.emit('sheet', {
    component: DateFilter,
    props: {
      from: filtering.dateFrom,
      to: filtering.dateTo,
    }
  })
}

const formData = reactive({
  name: '',
  id: '',
  firm: '',
  mobile: '',
  date: '',
  dateRange: void 0,
  location: '',
})
</script>

<style lang="scss">
.apply-page {
  height: 100vh;
  .page-header {
    margin-bottom: -16px;
    .content {
      padding: 3em 1em;
      h1 {
        font-size: 32px;
      }
      .caption {
        font-size: 12px;
        color: #4d4dff;
      }
    }
  }
  .filter {
    line-height: 3em;
    padding: 0 1em;
    font-size: 12px;
  }
  .apply-form {
    .nut-cell-group {
      position: relative;
      padding: 0 var(--ns-spacing);
      border-radius: 16px;
      background-color: #fff;
      overflow: hidden;
    }
  }
}
</style>
