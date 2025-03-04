<template>
  <ns-page class="list-page" fill="neutral">
    <ns-page-header
      title="列表"
      fill="#ffffff88"
      caption="<ns-list>"
      reveal
      :blur="40" has-back-button>
      <ns-tabs
        v-model="tab"
        fill="#ffffff"
        :r="0"
        :items="tabs" />
      </ns-page-header>
    <ns-page-content>
      <div class="pane-1" v-if="tab === '1'">
        <h2>账户消费明细表</h2>
        <p class="caption">范例之一</p>
        <ns-row justify="between">
          <h5>批量操作</h5>
          <ns-switch v-model="selectable"></ns-switch>
        </ns-row>
        <ns-list class="expense-list full-width"
          item-fill="#ffffff88"
          :data="items"
          :group-by
          :selectable
          gap>
          <template #prepend="item">
            <div class="text-icon">{{ item.type }}</div>
          </template>
          <template #append="item">
            <div class="amount">{{ item.value }}</div>
          </template>
        </ns-list>
        <p>&nbsp;</p>
        <callout title="说明">
          <p>以上范例使用了 &lt;template #append&gt;/&lt;template #prepend&gt; 来自订 list item 里的一格内容, 而 title/caption 是缺省样式</p>
        </callout>
        <code-view language="html" :code="codes[0]" />
        <code-view language="javascript" :code="codes[1]" />
        <callout title="说明">
          <p>以上列表未设置底色(<code>fill</code>), 而给行填色(<code>itemFill</code>), 另使用 <code>gap</code> 实现行间的空隙</p>
        </callout>
      </div>
      <div class="pane-2" v-if="tab === '2'">
        <h2>系统消息</h2>
        <p class="caption">范例之二</p>
        <ns-list class="expense-list full-width"
          item-fill="#ffffff88"
          :data="items"
          gap>
          <template #prepend="item">
            <div class="text-icon">{{ item.type }}</div>
          </template>
          <template #append="item">
            <div class="amount">{{
              item.value
            }}</div>
          </template>
        </ns-list>
      </div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectable = ref(false)

const items = [
  {
    id: '123e4567-e89b-12d3-a456-426614174001',
    date: '2025-02-12',
    title: '权益',
    caption: '风险查询-初审',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174002',
    date: '2025-02-12',
    title: '权益',
    caption: '企业风险查询报告',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174003',
    date: '2025-02-12',
    title: '权益',
    caption: '企业风险查询报告',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174004',
    date: '2025-02-12',
    title: '权益',
    caption: '企业风险查询报告',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174005',
    date: '2025-02-11',
    title: '权益',
    caption: '企业风险查询报告',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174006',
    date: '2025-02-11',
    title: '权益',
    caption: '风险查询-初审',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174007',
    date: '2025-02-11',
    title: '权益',
    caption: '风险查询-终审',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174008',
    date: '2025-02-11',
    title: '权益',
    caption: '风险查询-初审',
    value: -1,
    type: '消耗'
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174009',
    date: '2025-02-10',
    title: '权益',
    caption: '风险查询-初审',
    value: -1,
    type: '消耗'
  }
]


const groupBy = (item: any) => item.date

const tab = ref('1'),
  tabs = [
    { label: '消费明细', value: '1' },
    { label: '系统消息', value: '2' },
    { label: '客户管理', value: '3' }
  ]

const codes = [
`<ns-list class="expense-list full-width"
  item-fill="#ffffff88"
  :data="list.items"
  gap>
  <template #prepend="item">
    <div class="text-icon">{{ item.type }}</div>
  </template>
  <template #append="item">
    <div class="amount">{{ item.value }}</div>
  </template>
</ns-list>`,
`const data = [
  {
    title: '权益',
    caption: '风险查询-初审',
    value: -1,
    type: '消耗'
  },
  {
    title: '权益',
    caption: '企业风险查询报告',
    value: -1,
    type: '消耗'
  }
]`
]
</script>

<style lang="scss">
.list-page {
  .group-title {
  }
  .expense-list {
    .text-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 12px;
      background-color: var(--ns-primary);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .amount {
      width: 60px;
      text-align: right;
      font-size: 16px;
      font-weight: bold;
      color: var(--ns-danger);
    }
  }
}
</style>

