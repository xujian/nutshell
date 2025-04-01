<template>
  <ns-page class="create-contact-page">
    <ns-page-header fill='#fff' title="订单详情" has-back-button reveal :blur="10">
      <ns-tabs
        class="tab-header"
        size="lg"
        v-model="activeTab"
        fill="#fff"
        :items="items"
        variant="line"
        @change="tabChange">
      </ns-tabs>
    </ns-page-header>
    <ns-page-content>
      <template v-if="activeTab==='detail'">
        <ns-card fill="#fff" class="mb-md detail" :title="info.productName">
          <ns-plank :key="it" v-for="it in info.children" :title="it.label" :content="it.value"></ns-plank>
        </ns-card>
      </template>
      <template v-if="activeTab === 'flow'">
        <ns-row justify="stretch" class="mb-md" v-for="item in flowButtons" :key="item">
          <ns-button
            variant="outlined"
            style="flex: 1;"
            color="primary"
            @click="item.handleClick" >
            + {{ item.label }}
          </ns-button>
        </ns-row>
        <ns-card fill="#fff" class="flow-box mb-md">
          <ns-stepper :items="steps" :model-value="stage" />
        </ns-card>
        <ns-card fill="#fff" class="mb-md">
          <ns-timeline variant="icon" :data="mockFollowups">
          </ns-timeline>
        </ns-card>
      </template>
      <template v-if="activeTab==='file'">
        <ns-card fill="#fff" class="mb-md material-box" v-for="item in files" :key="item">
          <h4>{{item.name}}</h4>
          <ns-plank :key="it" v-for="it in item.children" :title="`${it.name}(${it.count})`">
            <template #content>
              <div class="icon-list">
                <span>上传资料</span>
                <ns-icon name="https://cdn.ddjf.com/static/images/fnfundkit/m-arrow.png"></ns-icon>
              </div>
            </template>
          </ns-plank>
        </ns-card>
    </template>
    </ns-page-content>
    <ns-page-footer fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button
        v-for="item in buttons"
        :key="item"
        style="flex: 1"
        size= 'lg'
        :loading="item.loading"
        @click="item.handle(item)"
        v-bind="item.attr">
          {{ item.buttonName }}
          <ns-popover fill="#fff" v-if="item.buttonKey === 'more'">
            <ns-menu fill="transparent" :items="commands" />
          </ns-popover>
        </ns-button>
      </div>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro';
import { computed, ref } from 'vue';
import { OrderFooterButtonType } from './types';
import Taro from '@tarojs/taro'

const $n = useNutshell()
const activeTab = ref<string>('detail')

const info = ref({
  productName: '交易周转',
  children: [
    { label: '客户姓名', value: '蒋颖'},
    { label: '业务经理', value: '测试1'},
    { label: '市场团队', value: '测试蜂鸟周转'},
    { label: '跟单人', value: '李四'},
    { label: '订单状态', value: '审批中'},
    { label: '放款机构', value: '博能小贷'}
  ]
})

const isFlowOrder = ref<boolean>(false)
const files = [
  {
    name: '原贷款资料',
    children: [
      {
        name: '原贷款合同',
        count: 0
      },
      {
        name: '原贷款还款记录',
        count: 0
      }
    ]
  },
  {
    name: '账户资料',
    children: [
      {
        name: '赎楼账户',
        count: 3
      },
      {
        name: '赎楼周转账户',
        count: 0
      }
    ]
  }
]
const items = [
  {
    value: 'detail',
    label: '订单详情',
  },
  {
    value: 'flow',
    label: '流程备注',
  },
  {
    value: 'file',
    label: '影像资料',
  }
]
function tabChange({paneKey}){
  activeTab.value = paneKey
}

// 按钮组
const flowButtons = [
  {
    label: '备注信息',
    handleClick: () => {
      Taro.navigateTo({
        url: `remark-form`,
      })
    }
  }
]
const stage = ref(3)
const steps = [
  { title: '业务进件', value: 'lead' },
  { title: '审批', value: 'opportunity' },
  { title: '放款', value: 'visit' },
  { title: '回款', value: 'open' },
  { title: '归档', value: 'deal' }
]
const mockFollowups = [
  {
    title: '操作风险控制',
    time: '2024/03/10 14:30',
    caption: '办理人：张三、李四、王五、某某某',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '抵押跟进',
    time: '2024/03/12 10:15',
    caption: '办理人：张三、李四、王五、某某某',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '面谈面签',
    time: '2024/03/13 15:40',
    caption: '办理人：张三、李四、王五、某某某',
    assignee: '王大地',
    status: 'normal'
  },
  {
    title: '同贷登记',
    time: '2024/03/15 09:30',
    caption: '办理人：张三、李四、王五、某某某',
    assignee: '李敏克',
    status: 'normal'
  }
]

const commands = [
  { label: '派单', name: 'cancel' },
  { label: '终止订单', name: 'postpone' },
]
const buttons = computed(()=>{
  return ref([
    {
      attr: { variant: 'outlined'},
      buttonName: '更多',
      buttonKey: 'more',
      loading: false,
      handle: () => {}
    },
    {
      attr: { variant: 'outlined', color: 'primary'},
      buttonName: '订单刷新',
      buttonKey: 'refresh',
      loading: false,
      handle: (item: OrderFooterButtonType) => {
        item.loading = true
        setTimeout(()=>{
          $n.toast('刷新成功', { duration: 1000})
          item.loading = false
        }, 1000)
      }
    },
    {
      attr: { color: 'primary'},
      buttonName: isFlowOrder.value ? '取消跟单' : '跟单',
      buttonKey: 'flow',
      loading: false,
      handle: (item: OrderFooterButtonType) => {
        item.loading = true
        setTimeout(()=>{
          isFlowOrder.value = !isFlowOrder.value
          $n.toast('操作成功', { duration: 1000})
          item.loading = false
        }, 1000)
      }
    }
  ]).value
})

</script>

<style lang="scss">
.tab-header {
  .nut-tabs__list {
    display: flex;
    .nut-tabs__titles-item {
      flex: 1 !important;
    }
    .nut-tabs__titles-placeholder {
      min-width: 0 !important;
    }
  }
}
.material-box {
  .ns-plank:last-child {
    border-bottom: none;
  }
  .icon-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .ns-icon {
      margin-left: 4px;
    }
  }
}
.flow-box{
  --text: #909ca4;
  .ns-stepper.nut-steps .nut-step.nut-step-finish .nut-step-icon.is-icon {
    background-color: var(--nut-primary-color) !important;
  }
  .ns-stepper.nut-steps .nut-step.nut-step-process .nut-step-icon.is-icon{
    background-color: var(--nut-primary-color) !important;
  }
}

</style>
