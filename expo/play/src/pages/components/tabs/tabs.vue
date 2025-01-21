<template>
  <ns-page fill="neutral">
    <ns-page-header title="Tabs"
      gradient="#ffffff,#FFC107"
      :blur="10" has-back-button>
      <ns-tabs v-model="state.headerTab"
        size="lg"
        :items="headerTabs" />
    </ns-page-header>
    <ns-page-content>
      <callout>
        Tabs 可以放在 &lt;ns-page-header&gt; 里面, 也可以放在 &lt;ns-page-content&gt; 里面。
      </callout>
      <h3>variant="<b>button</b>"</h3>
      <p class="caption">长得不一样, 行为还是一样的</p>
      <ns-tabs v-model="state.firstTab"
        size="sm"
        fill="#ffffff66"
        variant="button"
        :items="firstTabs" />
      <code-view :code="codes[0]" language="html" />
      <ns-tabs v-model="state.firstTab"
        size="md"
        fill="#00000033"
        variant="button"
        :edge="1"
        :items="firstTabs" />
      <code-view :code="codes[0]" language="html" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({
  headerTab: '0',
  firstTab: '0'
})

const headerTabs = [
    { label: '全部', value: '0' },
    { label: '待签署', value: '1' },
    { label: '签署中', value: '2' },
    { label: '已签署', value: '3' },
    { label: '已关闭', value: '4' },
    { label: '已取消', value: '5' },
  ],
  firstTabs = [
    { label: '全部', value: '0' },
    { label: '线索', value: '1' },
    { label: '意向', value: '2' },
    { label: '成交', value: '3' },
    { label: '降级', value: '4' },
    { label: '流失', value: '5' },
  ]

const codes = [
`<ns-tabs v-model="state.firstTab"
  size="sm"
  fill="#ffffff66"
  variant="button"
  :items="firstTabs" />`
]
</script>

