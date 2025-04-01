<template>
  <ns-page class="batch-page" fill="neutral">
    <ns-page-header title="批量操作"
      fill="#ffffff80"
      :blur="40"
      reveal
      has-back-button />
    <ns-page-content>
      <ns-row class="batch-header" justify="between" gap>
        <ns-column align="start" :gap="0">
          <h5>选择</h5>
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
  },
  {
    id: '4',
    title: '房屋买卖合同',
    caption: '2024-10-19 11:30'
  },
  {
    id: '5',
    title: '装修施工协议',
    caption: '2024-10-20 14:15'
  },
  {
    id: '6',
    title: '租赁合同',
    caption: '2024-10-21 16:45'
  },
  {
    id: '7',
    title: '物业服务协议',
    caption: '2024-10-22 09:30'
  },
  {
    id: '8',
    title: '车位使用协议',
    caption: '2024-10-23 10:20'
  },
  {
    id: '9',
    title: '装修保证金协议',
    caption: '2024-10-24 13:40'
  },
  {
    id: '10',
    title: '验房交接单',
    caption: '2024-10-25 15:50'
  },
  {
    id: '11',
    title: '中介服务协议',
    caption: '2024-10-26 09:15'
  },
  {
    id: '12',
    title: '贷款申请书',
    caption: '2024-10-27 11:20'
  },
  {
    id: '13',
    title: '产权转让协议',
    caption: '2024-10-28 14:30'
  },
  {
    id: '14',
    title: '抵押合同',
    caption: '2024-10-29 16:40'
  },
  {
    id: '15',
    title: '装修设计合同',
    caption: '2024-10-30 10:25'
  },
  {
    id: '16',
    title: '家具采购协议',
    caption: '2024-10-31 13:45'
  },
  {
    id: '17',
    title: '物业装修备案',
    caption: '2024-11-01 15:20'
  },
  {
    id: '18',
    title: '水电安装协议',
    caption: '2024-11-02 09:40'
  },
  {
    id: '19',
    title: '消防验收报告',
    caption: '2024-11-03 11:35'
  },
  {
    id: '20',
    title: '质量保修书',
    caption: '2024-11-04 14:50'
  }
])

const openBatch = () => {
  console.log('批量操作')
}
</script>

<style lang="scss">
.batch-page {
  .batch-header {
    height: 48px;
  }
}
</style>
