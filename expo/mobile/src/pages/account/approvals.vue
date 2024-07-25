<template>
  <ns-page class="page-approvals">
    <ns-page-header
      fill="#fff"
      @close="onPageHeaderClose">
      <template #title>
        <ns-form>
          <ns-input class="search-input full-width"
            placeholder="搜索审批记录"
            round
            name="search"
            variant="solid">
            <template #prepend>
              <ns-icon name="https://cdn.ddjf.com/static/images/wx-yunservice/search-icon.png" />
            </template>
          </ns-input>
        </ns-form>
      </template>
    </ns-page-header>
    <ns-page-content>
      <ns-tabs v-model="tab" :items="tabs" class="my-md" />
      <approval-list :items="facts" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { WithPaging } from '@uxda/nutshell'
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

function onPageHeaderClose () {
  Taro.navigateBack()
}

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
}
.approvals-scroll {
  height: calc(100vh - 130px);
}
</style>
