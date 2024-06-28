<template>
  <div class="page page-approvals">
    <ns-page-header
      @close="onPageHeaderClose">
      <template #title>
        <ns-input class="search-input full-width"
          placeholder="搜索审批记录"
          round
          name="search"
          variant="solid">
          <template #prepend>
            <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
          </template>
        </ns-input>
      </template>
    </ns-page-header>
    <ns-tabs v-model="tab" :items="tabs" />
    <scroll-view
      class="approvals-scroll"
      :scroll-y="true"
      :lower-threshold="50">
      <approval-list :items="facts" />
    </scroll-view>
  </div>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { NsPageHeader, WithPaging } from '@uxda/nutshell'
import { onMounted, ref } from 'vue'
import { endpoints, useHttp } from '../../api'
import ApprovalList from '../../components/ApprovalList.vue'

const $http = useHttp()
const tab = ref('tab1')
const facts = ref<any[]>([])

const tabs = [
  {
    value: 'tab1',
    label: '全部'
  },
  {
    value: 'tab2',
    label: '待审批'
  },
  {
    value: 'tab3',
    label: '审批通过'
  },
  {
    value: 'tab4',
    label: '有条件通过'
  },
  {
    value: 'tab5',
    label: '审批拒绝'
  }
]

// const facts = [
//   {
//     label: '申请人',
//     value: '都庆寿'
//   },
//   {
//     label: '企业名称',
//     value: '青岛尚风尚水名都酒店管理有限公司'
//   },
//   {
//     label: '授权状态',
//     value: '1'
//   },
//   {
//     label: '创建用户',
//     value: '赵悦'
//   }
// ]

function onPageHeaderClose () {
  Taro.navigateBack()
}

onMounted(() => {
  $http.get<WithPaging<any>>(endpoints.获取审批列表, {
    page: 1
  }).then((result) => {
    console.log('===XXXXX', result)
    facts.value = result.data
  })
})
</script>

<style lang="scss">
.approvals-scroll {
  height: calc(100vh - 130px);
}
</style>
