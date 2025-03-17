<template>
  <ns-page class="messages-page" fill="neutral">
    <ns-page-header title="消息中心" fill="#ffffff66"
      :blur="40" has-back-button>
      <ns-tabs v-model="currentTab" :items="tabs" />
    </ns-page-header>
    <ns-page-content>
      <ns-repeator
        direction="column"
        :data="filteredMessages"
        v-slot="message"
        :gap="12">
        <ns-card
          fill="#ffffff"
          :class="['message-card', message.read ? 'read' : 'unread']"
          :title="message.title"
          :caption="message.time"
          @click="handleReadMessage(message)">
          <ns-column justify="stretch" align="stretch" class="grow" :gap="4">
            <p class="message-content justify">{{ message.content }}</p>
          </ns-column>
          <template #corner>
            <ns-chip 
              size="xs" 
              :label="message.type" 
              :fill="getMessageColor(message.type)" />
          </template>
        </ns-card>
      </ns-repeator>
      
      <h3>数据规格</h3>
      <code-view language="javascript" :code="JSON.stringify(messages, null, 2)" />
      <callout title="说明" fill="#ffffff">
        <p>消息中心使用 &lt;ns-repeator&gt; 和 &lt;ns-card&gt; 组件实现</p>
      </callout>
    </ns-page-content>
    <ns-page-footer :blur="40">
      <ns-button class="mark-all-button full-width" 
        label="标记全部已读" 
        color="primary"
        block 
        @click="handleMarkAllRead" />
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const currentTab = ref('0')
const tabs = ref([
  { label: '全部', value: '0' },
  { label: '系统', value: '1' },
  { label: '业务', value: '2' },
  { label: '通知', value: '3' }
])

const messages = ref([
  {
    id: 1,
    title: '系统升级通知',
    content: '系统将于2024年4月15日凌晨2:00-4:00进行升级维护, 期间系统将暂停服务, 请提前做好工作安排。',
    type: '系统',
    time: '2024/04/10 09:30',
    read: false
  },
  {
    id: 2,
    title: '新客户分配',
    content: '您有一个新的客户已分配, 客户姓名：李明, 联系电话：139****1234, 请及时跟进。',
    type: '业务',
    time: '2024/04/09 15:45',
    read: false
  },
  {
    id: 3,
    title: '贷款审批通过',
    content: '客户张文明的贷款申请已审批通过, 批复金额45万, 请及时联系客户办理后续手续。',
    type: '业务',
    time: '2024/04/08 14:20',
    read: false
  },
  {
    id: 4,
    title: '月度业绩报告',
    content: '您的3月份业绩报告已生成, 完成业务12笔, 总金额320万, 排名第3, 请查看详情。',
    type: '通知',
    time: '2024/04/05 10:00',
    read: false
  },
  {
    id: 5,
    title: '客户资料更新提醒',
    content: '客户王丽的联系方式已更新, 新电话号码为：138****5678, 请知悉。',
    type: '业务',
    time: '2024/04/03 16:30',
    read: false
  },
  {
    id: 6,
    title: '密码安全提醒',
    content: '您的账号密码已超过90天未修改, 为保障账号安全, 请及时修改密码。',
    type: '系统',
    time: '2024/04/01 08:15',
    read: true
  },
  {
    id: 7,
    title: '新产品上线通知',
    content: '新产品"快速小额贷"已上线, 额度5-20万, 最快1小时放款, 请熟悉产品详情。',
    type: '通知',
    time: '2024/03/28 11:20',
    read: true
  },
  {
    id: 8,
    title: '客户回访提醒',
    content: '客户张文明的贷款已发放7天, 请按流程进行回访并记录客户反馈。',
    type: '业务',
    time: '2024/03/25 09:45',
    read: true
  },
  {
    id: 9,
    title: '培训课程通知',
    content: '新产品培训将于4月20日14:00在三楼会议室举行, 请准时参加。',
    type: '通知',
    time: '2024/03/22 16:10',
    read: true
  },
  {
    id: 10,
    title: '系统Bug修复',
    content: '客户管理模块的搜索功能Bug已修复, 现可正常使用, 感谢您的反馈。',
    type: '系统',
    time: '2024/03/20 13:30',
    read: true
  },
  {
    id: 11,
    title: '客户投诉处理',
    content: '客户刘强对服务态度有投诉, 请及时联系客户了解情况并妥善处理。',
    type: '业务',
    time: '2024/03/18 10:25',
    read: true
  },
  {
    id: 12,
    title: '绩效考核结果',
    content: '您的一季度绩效考核结果为A, 请查看详细评分和反馈。',
    type: '通知',
    time: '2024/03/15 17:00',
    read: true
  },
  {
    id: 13,
    title: '系统功能更新',
    content: '客户管理模块新增批量导入功能, 可一次导入多个客户资料, 提高工作效率。',
    type: '系统',
    time: '2024/03/12 14:15',
    read: true
  },
  {
    id: 14,
    title: '贷款逾期提醒',
    content: '客户王明的贷款已逾期3天, 请立即联系客户了解情况。',
    type: '业务',
    time: '2024/03/10 09:00',
    read: true
  },
  {
    id: 15,
    title: '团队会议通知',
    content: '本周五下午15:00将召开团队周会, 请所有成员准时参加。',
    type: '通知',
    time: '2024/03/08 11:30',
    read: true
  },
  {
    id: 16,
    title: '账号异常登录',
    content: '您的账号于昨日22:30在非常用设备登录, 如非本人操作, 请立即修改密码。',
    type: '系统',
    time: '2024/03/05 08:45',
    read: true
  },
  {
    id: 17,
    title: '客户预约提醒',
    content: '客户张三预约于明日10:00到访洽谈贷款事宜, 请做好准备。',
    type: '业务',
    time: '2024/03/02 16:50',
    read: true
  },
  {
    id: 18,
    title: '节日放假通知',
    content: '清明节放假安排：4月5日至7日放假, 4月8日正常上班。',
    type: '通知',
    time: '2024/02/28 10:20',
    read: true
  },
  {
    id: 19,
    title: '系统数据备份',
    content: '系统将于今晚23:00进行数据备份, 预计持续30分钟, 期间系统响应可能较慢。',
    type: '系统',
    time: '2024/02/25 14:40',
    read: true
  },
  {
    id: 20,
    title: '客户满意度调查',
    content: '请协助完成本月客户满意度调查, 确保每位客户都收到调查问卷。',
    type: '业务',
    time: '2024/02/22 11:10',
    read: true
  }
])

const filteredMessages = computed(() => {
  if (currentTab.value === '0') {
    return messages.value
  } else {
    const typeMap = {
      '1': '系统',
      '2': '业务',
      '3': '通知'
    }
    return messages.value.filter(msg => msg.type === typeMap[currentTab.value])
  }
})

const getMessageIcon = (type) => {
  switch (type) {
    case '系统': return 'settings'
    case '业务': return 'work'
    case '通知': return 'notifications'
    default: return 'message'
  }
}

const getMessageColor = (type) => {
  switch (type) {
    case '系统': return '#2196F3'
    case '业务': return '#4CAF50'
    case '通知': return '#FF9800'
    default: return '#9E9E9E'
  }
}

const handleReadMessage = (message) => {
  message.read = true
  console.log('阅读消息', message.id)
}

const handleMarkAllRead = () => {
  messages.value.forEach(msg => {
    msg.read = true
  })
  console.log('标记全部已读')
}

const handleClearAll = () => {
  console.log('清空所有消息')
}
</script>

<style lang="scss">
.messages-page {
  .message-card {
    &.read {
      background-color: #ffffff88;
      --foreground: #999;
      .title {
        .h5 {
          font-weight: normal;
        }
      }
      .message-content {
        color: var(--ns-neutral);
      }
    }
    &.unread {
      background-color: #ffffff;
    }
  }
}
</style> 