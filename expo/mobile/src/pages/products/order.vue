<template>
<ns-page class="has-page-bottom">
  <div class="page-content">
    <ns-card
      title="广发银行 - 过桥贷"
      fill="#ffffff33"
      :blur="20"
      :brightness="2">
    </ns-card>
    <ns-form class="">
      <ns-card title="企业信息" body-fill="#fff">
        <div class="breakout">
          <ns-switch
            label="是否法人"
            name="是否法人"
            v-model="formData.是否法人"
            :items="yesNoItems"
            :rules="['required']" />
          <ns-date-input
            label="注册时间"
            name="注册时间"
            v-model="formData.注册时间" />
          <ns-radio-group
            label="缴纳社保"
            name="近2年是否缴纳社保"
            v-model="formData.缴纳社保"
            :items="yesNoItems" />
        </div>
      </ns-card>
      <p>&nbsp;</p>
      <ns-card title="申请人" body-fill="#fff">
        <div class="breakout">
          <ns-id-input
            label="证件号码"
            name="证件号码"
            v-model="formData.证件号码"
            :rules="['required']" />
          <ns-input
            label="姓名"
            name="姓名"
            v-model="formData.姓名" />
          <ns-select
            label="婚姻状态"
            name="婚姻状态"
            v-model="formData.婚姻状态"
            :items="婚姻状态选项" />
          <ns-radio-group
            label="缴纳社保"
            name="近2年是否缴纳社保"
            v-model="formData.申请人缴纳社保"
            :items="yesNoItems" />
        </div>
      </ns-card>
      <p>&nbsp;</p>
      <ns-card title="房产信息" body-fill="#fff">
        <div class="breakout">
          <ns-number-input
            label="房产面积"
            name="房产面积"
            v-model="formData.房产面积"
            :rules="['required']" />
          <ns-cascading-select
            label="房产区域"
            name="房产区域"
            placeholder="请选择"
            :options="regionOptions"
            :columns="3"
            v-model="formData.房产区域" />
          <ns-select
            label="房产类型"
            name="房产类型"
            v-model="formData.房产类型"
            :items="房产类型选项" />
          <ns-radio-group
            label="抵押状态"
            name="抵押状态"
            v-model="formData.抵押状态"
            :items="抵押状态选项" />
          <ns-date-input
            label="建成日期"
            name="建成日期"
            v-model="formData.建成日期" />
        </div>
      </ns-card>
      <p>&nbsp;</p>
      <ns-card title="前手贷款信息" body-fill="#fff">
        <div class="breakout">
          <ns-number-input
            label="贷款金额"
            name="贷款金额"
            v-model="formData.前手贷款金额" />
          <ns-select
            label="贷款类型"
            name="贷款类型"
            v-model="formData.前手贷款类型"
            :items="贷款类型选项" />
        </div>
      </ns-card>
      <p>&nbsp;</p>
      <ns-card title="共同申请人" body-fill="#fff">
        <div class="breakout">
          <ns-id-input
            label="证件号码"
            name="共同申请人证件号码"
            v-model="formData.共同申请人证件号码" />
          <ns-input
            label="姓名"
            name="姓名"
            v-model="formData.共同申请人姓名">
            <template #append>
              <ns-button variant="plain" icon="http://simple.shensi.tech/icons/camera.svg" />
            </template>
          </ns-input>
        </div>
      </ns-card>
    </ns-form>
  </div>
  <ns-page-bottom fill="#ffffff11"
    :blur="10" :brightness="2">
    <div class="row">
      <ns-button
        round
        color="secondary"
        label="保存草稿" />
      <ns-button label="下一步"
        class="flex-grow"
        round
        color="primary"
        icon="http://simple.shensi.tech/icons/arrow-right.svg"
        icon-position="end"
        icon-fill="#00000088"
        @click="onNextClick" />
    </div>
  </ns-page-bottom>
</ns-page>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import Taro from '@tarojs/taro'

const yesNoItems = [
  { label: '是', value: 1 },
  { label: '否', value: 0 },
]

const 婚姻状态选项 = [
  { label: '未婚', value: 1 },
  { label: '已婚', value: 2 },
  { label: '离异', value: 3 },
  { label: '丧偶', value: 4 },
]

const 房产类型选项 = [
  { label: '住宅', value: 1 },
  { label: '写字楼', value: 2 },
  { label: '商城', value: 3 },
  { label: '公寓', value: 4 },
  { label: '厂房', value: 4 },
]

const 抵押状态选项 = [
  { label: '已抵押', value: 1 },
  { label: '未抵押', value: 2 },
]

const 贷款类型选项 = [
  { label: '按揭', value: 1 },
  { label: '经营', value: 2 },
  { label: '其他', value: 3 },
]

const formData = reactive({
  是否法人: void 0,
  注册时间: void 0,
  缴纳社保: void 0,
  证件号码: void 0,
  姓名: void 0,
  婚姻状态: void 0,
  申请人缴纳社保: void 0,
  房产面积: void 0,
  房产区域: ['130000', '130100', '130102'],
  房产类型: void 0,
  抵押状态: void 0,
  建成日期: void 0,
  前手贷款金额: void 0,
  前手贷款类型: void 0,
  共同申请人证件号码: void 0,
  共同申请人姓名: void 0,
})

const regionOptions = ref<{id: string, name: string}[][]>([])

const onNextClick = () => {

}

onMounted(() => {
  Taro.request({
    url: 'http://simple.shensi.tech/json/locations.json'
  }).then(({ data }) => {
    regionOptions.value = data
  })
})
</script>
