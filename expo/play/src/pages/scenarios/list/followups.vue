<template>
  <ns-page class="followups-page" fill="neutral">
    <ns-page-header title="跟进记录" fill="#ffffffff"
      :blur="40" has-back-button>
    </ns-page-header>
    <ns-page-content>
      <ns-card class="customer-card" fill="#ffffff88" body-fill="#ffffff">
        <ns-row justify="stretch" align="start" gap class="padding">
          <ns-avatar :src="customerInfo.avatar" color="#eee" class="shrink" />
          <ns-column justify="stretch" align="stretch" class="grow" :gap="4">
            <h4>{{ customerInfo.name }}</h4>
            <ns-rating :value="customerInfo.rating" size="sm" />
            <ns-row gap="4" justify="start">
              <ns-chip v-for="(tag, index) in customerInfo.tags"
                size="xs"
                :key="index" 
                :label="tag" fill="#FFC107" />
            </ns-row>
            <ns-row justify="between">
              <h5 class="caption">{{ customerInfo.status }}</h5>
              <span class="caption">{{ customerInfo.lastContact }}</span>
            </ns-row>
          </ns-column>
        </ns-row>
        <template #footer>
          <ns-repeator class="customer-fields"
            direction="row"
            :data="customerFields"
            v-slot="item">
            <ns-column>
              <h5>{{ item.label }}</h5>
              <p class="caption">{{ item.value }}</p>
            </ns-column>
          </ns-repeator>
        </template>
      </ns-card>
      <h2>跟进记录</h2>
      <ns-card fill="#ffffff">
        <ns-timeline
          variant="icon"
          :data="followupRecords"
          v-model="currentRecord">
        </ns-timeline>
      </ns-card>
      <h3>数据规格</h3>
      <code-view language="javascript" :code="JSON.stringify(followupRecords, null, 2)" />
      <callout title="说明" fill="#ffffff">
        <p>跟进记录使用 &lt;ns-timeline&gt; 组件实现</p>
      </callout>
    </ns-page-content>
    <ns-page-footer :blur="40">
      <ns-button class="add-button full-width" 
        label="添加跟进" 
        color="primary"
        block 
        @click="handleAddFollowup" />
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentRecord = ref(0)

const customerInfo = ref({
  name: '张文明',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  rating: 4,
  tags: ['房抵贷', '高意向'],
  status: '意向客户',
  lastContact: '2024/03/10 14:30',
  phone: '138****5678',
  loanNeeds: '房产抵押贷款 50万',
  assignee: '李敏克'
})

const customerFields = ref([
  { label: '电话', value: '138****5678' },
  { label: '贷款需求', value: '房产抵押贷款 50万' },
  { label: '跟进人', value: '李敏克' }
])

const followupRecords = ref([
  {
    title: '首次接触',
    time: '2024/03/10 14:30',
    caption: '客户通过官网咨询房产抵押贷款, 有50万资金需求, 用于企业经营周转。客户名下有两套房产, 均无抵押, 有较强还款能力。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '电话沟通',
    time: '2024/03/12 10:15',
    caption: '电话详细了解客户需求, 客户希望贷款期限在3年以上, 月供在1.5万以内。已向客户介绍我司产品方案, 客户表示满意, 约定次日上门查看房产。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '上门查看',
    time: '2024/03/13 15:40',
    caption: '实地查看客户房产情况, 位于市中心, 约120平米, 市场估值约300万。收集了房产证、身份证等资料, 客户决定申请我司A类产品。',
    assignee: '王大地',
    status: 'normal'
  },
  {
    title: '提交审核',
    time: '2024/03/15 09:30',
    caption: '已将客户资料提交审核, 预计3个工作日出结果。客户对利率有疑问, 已详细解释并获得理解。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '审核通过',
    time: '2024/03/18 16:20',
    caption: '贷款审核已通过, 批复金额45万, 期限5年, 月息0.55%。已电话告知客户, 客户表示接受, 约定明日签约。',
    assignee: '徐晋语',
    status: 'normal'
  }
])

const handleAddFollowup = () => {
  console.log('添加跟进')
}
</script>

<style lang="scss">
.followups-page {
  .customer-fields {
    .ns-repeator-item {
      width: 33.3%;
    }
  }
}
</style>
