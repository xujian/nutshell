<template>
  <ns-page class="page-approvals">
    <ns-page-header
      fill="#fff">
      <template #title>
        <ns-search placeholder="产品名称" />
      </template>
    </ns-page-header>
    <ns-page-content>
      <ns-tabs v-model="tab" :items="tabs" class="my-md" />
      <approval-list :items="facts" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { WithPaging } from '@uxda/nutshell/taro'
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

onMounted(() => {
  $http.get<WithPaging<any>>(endpoints.获取审批列表, {
    page: 1
  }).then((result) => {
    facts.value = result.data
  })
})
</script>

<style lang="scss">
.page-approvals {
  background-color: var(--ns-neutral);
}
.approvals-scroll {
  height: calc(100vh - 130px);
}
</style>
