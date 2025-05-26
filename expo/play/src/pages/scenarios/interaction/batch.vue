<template>
  <ns-page class="batch-page" fill="#f1f2f4">
    <ns-page-header title="批量操作"
      fill="#ffffff80"
      :blur="40"
      reveal
      has-back-button />
    <ns-page-content>
      <ns-row class="batch-header" justify="between" gap>
        <ns-column align="start" :gap="0">
          <h5>类型一</h5>
        </ns-column>
        <div class="spacer"></div>
        <ns-button icon="options" v-show="operatable">
          <ns-popover>
            <ns-menu :items="commands" />
          </ns-popover>
        </ns-button>
        <ns-button icon="delete" v-show="operatable"
          @click="onDelete" />
        <ns-switch label="批量选择" v-model="selectable" @change="onToggleSelectable" />
      </ns-row>
      <ns-list class="draft-list"
        :data
        item-fill="#ffffff"
        direction="column"
        :selectable
        @update:selected="onSelected"
        align="stretch"
        has-numbers
        gap>
      </ns-list>
      {{ selected }}

      <ns-row class="batch-header" justify="between" gap>
        <ns-column align="start" :gap="0">
          <h5>类型二</h5>
        </ns-column>
        <ns-switch label="批量选择" v-model="selectable2" @change="onToggleSelectable2" />
      </ns-row>
      <ns-repeator class="demo-repeator"
        direction="column"
        v-slot="item"
        :data="orderData"
        align="stretch"
        gap>
        <ns-card :title="item.type"
          @click="batchOrder(item)"
          :class="item.selected ? 'selected' : ''"
          class="full-width"
          :caption="`进件时间: ${item.进件时间}`"
          fill="#ffffff"
          :body-fill="getBgColor(item)"
          >
          <ns-facts fontSize="font-md" :items="toFact(item)" />
          <template #icon>
            <ns-avatar :fill="colors[item.type]" :edge="10" :src="images[item.type]" />
          </template>
          <template #corner>
            <span>{{ item.status }}</span>
          </template>
        </ns-card>
      </ns-repeator>
      <ns-card fill="#fff">
        <ns-row class="batch-header" justify="between" gap>
          <ns-column align="start" :gap="0">
            <h5>类型三</h5>
          </ns-column>
          <ns-switch label="批量选择" v-model="selectable3" @change="onToggleSelectable3" />
        </ns-row>
        <ns-repeator class="demo-repeator batch-three"
          direction="column"
          v-slot="item"
          :data="cardData"
          align="stretch"
          gap>
          <img
            v-show="selectable3"
            @click="batchCard(item)"
            :src="`https://cdn.ddjf.com/static/images/fnfundkit/file-${item.selected ? 'selected' : 'notSelected'}.png`"
            class="img" />
          <ns-card
            class="full-width"
            :title="item.卡类型"
            @click="batchCard(item)"
            :caption="`${item.开户行} | ${item.办理人员}`"
            >
            <template #corner>
              <ns-chip :color="item.卡状态 === '查封' ? '#f92b18' : '#2cd288'">{{ item.卡状态 }}</ns-chip>
            </template>
            <div>{{item.卡号}}</div>
          </ns-card>
        </ns-repeator>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNutshell } from '@uxda/nutshell/taro'

const $n = useNutshell()

const selectable = ref(false),
  selected = ref<any[]>([]),
  onToggleSelectable = () => {
    selected.value = []
    console.log('批量选择', selectable.value)
  },
  onSelected = (value: any[]) => {
    selected.value = value.map(item => item.id)
  }
  const operatable = computed<boolean>(() => selected.value.length > 0)

const onDelete = () => {
  $n.confirm('确定删除吗?', () => {
      console.log('删除', selected.value)
    }
  )
}

const commands = [
  { label: '撤销', name: 'cancel' },
  { label: '延期处理', name: 'postpone' },
  { label: '删除', name: 'delete' },
]

const data = ref<any>([
  {
    id: '1',
    title: '居间借贷服务合同协议',
    caption: '2024-10-11 15:00'
  },
  {
    id: '2',
    title: '小贷结清证明',
    caption: '2024-10-15 9:24',
    swipable: false
  },
  {
    id: '3',
    title: '赎楼交易通用合同',
    caption: '2024-10-18 10:45'
  }
])

const openBatch = () => {
  console.log('批量操作')
}

// 批量操作类型二开始
const selectable2 = ref(false),
  orderData = ref([
    {
      type: '交易周转',
      进件时间: '2025/10/08 10:32',
      客户姓名: '李华明',
      渠道经理: '王伟强',
      放款机构: '联银小贷',
      订单编号: 'SZS0420230220001',
      status: '待审核'
    },
    {
      type: '交易周转',
      进件时间: '2025/10/08 11:45',
      客户姓名: '张敏杰',
      渠道经理: '李娜丽',
      放款机构: '中信银行',
      订单编号: 'SZS0420230220002',
      status: '待审核'
    }
  ]),
  onToggleSelectable2 = () => {
    orderData.value = orderData.value.map((item: any) => {return {...item, selected: false}})
  },
  colors = {
    交易周转: 'primary',
    非交易周转: 'positive'
  },
  images: Record<string, string> = {
    交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-JYZZ.png',
    非交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-FJYZZ.png'
  }


const toFact = (item) => {
  return Object.keys(item).map(key => {
    return {
      label: key,
      value: item[key]
    }
  }).filter(f => !['type', 'status', 'selected'].includes(f.label))
}

const getBgColor = (item) => {
  let isJy = item.type === '交易周转'
  return isJy ? 'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(241.09, 247.15, 255, 1) 117.45%)' :
  'linear-gradient(270deg, rgba(255, 255, 255, 1), rgba(241.29, 251.58, 246.83, 1) 163.889%)'
}

const batchOrder = (item: any) => {
  if(!selectable2.value){
    // 非批量情况下执行其他操作（例如跳转）
    return console.log('非批量操作情况')
  }
  item.selected = !item.selected
}
// 批量操作类型二结束

// 批量操作类三开始
const selectable3 = ref(false),
  cardData = ref([
    {
      卡类型: '赎楼账户',
      开户行: '工商银行',
      办理人员: '李华明',
      卡状态: '正常',
      卡号: '6228480402564829999',
      id: '1'
    },
    {
      卡类型: '回款账户',
      开户行: '招商银行',
      办理人员: '李华明',
      卡状态: '查封',
      卡号: '6228480402564828889',
      id: '2'
    }
  ]),
  onToggleSelectable3 = () => {
    cardData.value = cardData.value.map((item: any) => {return {...item, selected: false}})
  }

const batchCard = (item: any) => {
  if(!selectable3.value){
    // 非批量情况下执行其他操作（例如跳转）
    return console.log('非批量操作情况')
  }
  item.selected = !item.selected
}
// 批量操作类三结束

</script>

<style lang="scss">
.batch-page {
  .batch-header {
    height: 48px;
  }
  .ns-repeator{
    margin-bottom: 12px;
  }
  .ns-card{
    border:1px solid transparent;
    &.selected{
      border:1px solid var(--ns-primary);
      position: relative;
      overflow: hidden;
    }
    &.selected::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background: url('https://cdn.ddjf.com/static/images/fnfundkit/card-selected.png')
        no-repeat;
      background-size:  100% 100%;
    }
    .h5{
      font-size: 14px;
    }
  }
  .batch-three{
    .img{
      display: block;
      font-size: 0;
      height: 14px;
      width: 14px;
      margin-right: 5px;
    }
    .ns-card{
      background: url(https://cdn.ddjf.com/static/images/fnfundkit/card-bg.png)
        no-repeat;
      background-color: #f7f7f7;
      background-size: 100% 100%;
      .card-body{
        text-align: right;
      }
    }
  }
}
</style>
