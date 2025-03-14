<template>
  <ns-page class="clients-page panel-page" fill="neutral">
    <ns-page-header title="客户" fill="#ffffff"
      :blur="40" has-back-button>
      <ns-row justify="stretch" gap>
        <ns-dropdown label="筛选" :items="filters"
          variant="plain"
          fill="#fff" v-model="filter" class="shrink" />
        <ns-search placeholder="搜索客户" color="#fff" variant="outlined" />
      </ns-row>
      <ns-tabs :items="tabs"
        :r="0"
        fill="#ffffff88"
        v-model="tab" />
      </ns-page-header>
    <ns-page-content>
      <h4>共 99 条</h4>
      <ns-repeator class="clients-repeator breakout-x"
        direction="column"
        :data
        fill="#ffffff"
        align="stretch"
        seperator
        :r="0"
        swipable>
        <template #default="item">
          <ns-row justify="stretch" align="start" gap class="client padding">
            <ns-avatar :src="item.跟进状态" color="#eee" class="shrink" />
            <ns-column justify="stretch" align="stretch" class="grow" :gap="4">
              <h5>{{ item.客户姓名 }}</h5>
              <ns-rating :value="item.星级" size="sm" />
              <ns-row gap="4" justify="start">
                <ns-chip v-for="(tag, index) in item.客户标签"
                  size="xs"
                  :key="index" 
                  :label="tag" fill="#FFC107" />
              </ns-row>
              <ns-row justify="between">
                <span class="caption">{{ item.呼叫状态 }}</span>
                <span class="caption">{{ item.呼叫时间 }}</span>
              </ns-row>
            </ns-column>
          </ns-row>
        </template>
        <template #swipe="item">
          <ns-button variant="plain" color="primary" icon="edit" @click="handleFollowUp(item)" label="写跟进" />
          <ns-button variant="plain" color="neutral" icon="tag" @click="handleTag(item)" label="打标签" />
          <ns-button variant="plain" color="warning" icon="star" @click="handleRating(item)" label="改星级" />
          <ns-button variant="plain" color="negtive" icon="bell" @click="handleReminder(item)" label="加提醒" />
        </template>
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = ref([
    { label: '全部', value: 'all', },
    { label: '线索', value: 'lead', },
    { label: '意向', value: 'intent', },
    { label: '做单', value: 'processing', },
    { label: '放款', value: 'loan', },
  ]),
  tab = ref('all')

const filters = ref([
    { label: '最近联系', value: 'recent', },
    { label: '星级排序', value: 'rating', },
    { label: '未跟进', value: 'unfollow', },
    { label: '已接通', value: 'connected', },
  ]),
  filter = ref('recent')

const getStatusColor = (status) => {
  const colors = {
    '线索': '#9e9e9e',
    '意向': '#2196f3',
    '做单': '#ff9800',
    '放款': '#4caf50'
  }
  return colors[status] || '#9e9e9e'
}

const data = ref([
  {
    客户姓名: '孙明亮',
    跟进状态: '意向',
    客户标签: ['经营贷', '高额度'],
    标注: '需要高额贷款，正在考虑方案',
    呼叫状态: '已接通',
    呼叫时间: '2024/11/02 10:30',
    星级: 4
  },
  {
    客户姓名: '郑建强',
    跟进状态: '线索',
    客户标签: ['转介绍', '企业主'],
    标注: '老客户介绍，需要联系',
    呼叫状态: '未接通',
    呼叫时间: '2024/10/30 15:40',
    星级: 3
  },
  {
    客户姓名: '吴芳菲',
    跟进状态: '放款',
    客户标签: ['房抵贷', 'VIP'],
    标注: '审核已通过，准备放款',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/28 11:20',
    星级: 5
  },
  {
    客户姓名: '周明华',
    跟进状态: '做单',
    客户标签: ['信用贷', '上班族'],
    标注: '资料已提交，等待初审',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/25 14:50',
    星级: 3
  },
  {
    客户姓名: '陈静怡',
    跟进状态: '意向',
    客户标签: ['车抵贷', '高意向'],
    标注: '对条件满意，考虑申请',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/22 09:45',
    星级: 4
  },
  {
    客户姓名: '刘伟东',
    跟进状态: '线索',
    客户标签: ['网络咨询', '小额贷'],
    标注: '通过官网留言咨询，需回电',
    呼叫状态: '未接通',
    呼叫时间: '2024/10/20 16:30',
    星级: 2
  },
  {
    客户姓名: '赵敏华',
    跟进状态: '放款',
    客户标签: ['企业贷', '老客户'],
    标注: '已审核通过，等待放款',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/18 10:15',
    星级: 5
  },
  {
    客户姓名: '王建强',
    跟进状态: '做单',
    客户标签: ['房产抵押', '急需'],
    标注: '资料已收集，准备提交审核',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/16 14:20',
    星级: 5
  },
  {
    客户姓名: '李华东',
    跟进状态: '意向',
    客户标签: ['有房产', '企业主'],
    标注: '对抵押贷款有兴趣，需要再次跟进',
    呼叫状态: '已接通',
    呼叫时间: '2024/10/15 11:45',
    星级: 4
  },
  {
    客户姓名: '张文明',
    跟进状态: '线索',
    客户标签: ['首次接触', '信用贷'],
    标注: '朋友介绍，有贷款需求',
    呼叫状态: '未接通',
    呼叫时间: '2024/10/15 09:30',
    星级: 3
  }
])

// 处理左滑按钮点击事件
const handleFollowUp = (item) => {
  console.log('写跟进', item)
}

const handleTag = (item) => {
  console.log('打标签', item)
}

const handleRating = (item) => {
  console.log('改星级', item)
}

const handleReminder = (item) => {
  console.log('加提醒', item)
}
</script>

<style lang="scss">
.clients-page {
  .clients-repeator {
    padding-bottom: 20px;
  }
  
  .client-card {
    .mt-2 {
      margin-top: 8px;
    }
    
    .caption {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
