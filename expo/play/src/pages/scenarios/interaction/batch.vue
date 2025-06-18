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
          <h3>用于 &lt;ns-list&gt;</h3>
          <p class="caption">已选 ({{ selected.length }})</p>
        </ns-column>
        <div class="spacer"></div>
        <ns-dropdown v-show="operatable" label="操作" fill="neutral" :items="commands" />
        <ns-button icon="delete" v-show="operatable" variant="plain"
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
      <code-view language="html" :code="codes[0]" />
      <p>&nbsp;</p>
      <ns-row class="batch-header" justify="between" gap>
        <h3>用于 &lt;ns-repeator&gt;</h3>
        <ns-switch label="批量选择" v-model="selectable2" />
      </ns-row>
      <ns-repeator class="demo-repeator"
        direction="column"
        v-slot="item"
        :selectable="selectable2"
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
      <code-view language="html" :code="codes[1]" />
      <p>&nbsp;</p>
      <ns-card fill="#fff">
        <template #header>
          <h3>可以用另外一种选中样式</h3>
          <ns-flex-item grow />
          <ns-switch label="批量选择" v-model="selectable3" />
        </template>
        <ns-repeator class="batch-three"
          direction="column"
          v-slot="item"
          :data="cardData"
          :selectable="selectable3"
          select-type="ribbon"
          align="stretch"
          gap>
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
      <code-view language="html" :code="codes[2]" />
      <p>&nbsp;</p>
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
    caption: '2024-10-11 15:00',
    selected: true
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

const selectable2 = ref(false),
  orderData = ref([
    {
      id: '1',
      type: '交易周转',
      进件时间: '2025/10/08 10:32',
      客户姓名: '李华明',
      渠道经理: '王伟强',
      放款机构: '联银小贷',
      订单编号: 'SZS0420230220001',
      status: '待审核'
    },
    {
      id: '2',
      type: '交易周转',
      进件时间: '2025/10/08 11:45',
      客户姓名: '张敏杰',
      渠道经理: '李娜丽',
      放款机构: '中信银行',
      订单编号: 'SZS0420230220002',
      status: '待审核'
    }
  ]),
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

const selectable3 = ref(false),
  cardData = ref([
    {
      id: '1',
      卡类型: '赎楼账户',
      开户行: '工商银行',
      办理人员: '李华明',
      卡状态: '正常',
      卡号: '6228480402564829999',
      selected: true
    },
    {
      id: '2',
      卡类型: '回款账户',
      开户行: '招商银行',
      办理人员: '李华明',
      卡状态: '查封',
      卡号: '6228480402564828889',
    }
  ])

const batchCard = (item: any) => {
  if(!selectable3.value){
    // 非批量情况下执行其他操作（例如跳转）
    return console.log('非批量操作情况')
  }
  item.selected = !item.selected
}

const codes = [
`<ns-list :data
  item-fill="#ffffff"
  direction="column"
  :selectable
  @update:selected="onSelected"
  align="stretch"
  has-numbers
  gap>
</ns-list>`,
`<ns-repeator
  direction="column"
  v-slot="item"
  :data="orderData"
  align="stretch"
  gap>
  <ns-card fill="#ffffff">
    ...
  <ns-card>
</ns-repeator>`,
`<ns-repeator
  direction="column"
  v-slot="item"
  :data="cardData"
  :selectable="selectable3"
  select-type="ribbon"
  align="stretch"
  gap>
  <ns-card>
    ...
  </ns-card>
</ns-repeator>`
]

</script>

<style lang="scss">
.batch-page {
  .batch-three {
    .ns-card {
      margin: 1px;
      background: url(https://cdn.ddjf.com/static/images/fnfundkit/card-bg.png)
        no-repeat;
      background-color: #f7f7f7;
      background-size: 100% 100%;
      .card-body {
        text-align: right;
      }
    }
  }
}
</style>
