<template>
  <ns-table ref="tableRef"
    :rows="balanceRows"
    :row-height="28"
    :fill="colorRef"
    :borders="bordersRef"
    foreground="#ffffff"
    header-color="#00000055"
    :header-height="48"
    :r="0"
    stroke="#00000033"
    round>
    <ns-table-column field="科目名称" label="科目名称" width="720" align="left" />
    <ns-table-column field="科目类型" label="科目类型" width="120" hidden />
    <ns-table-column field="科目编码" label="科目编码" width="120" />
    <ns-table-column field="科目级次" label="科目级次" width="120" />
    <ns-table-column-currency field="借方合计" label="借方合计" align="right" width="120" />
    <ns-table-column-currency field="贷方合计" label="贷方合计" align="right" width="120" />
    <ns-table-column-currency field="余额" label="余额" align="right" width="120" />
  </ns-table>
  <ns-row align="center" justify="between" class="mb-xs">
    <h4>边框线</h4>
    <ns-button-group color="secondary"
      size="xs"
      v-model="bordersRef"
      round
      :options="bordersValues" />
  </ns-row>
  <ns-row align="center" justify="between">
    <h4>底色</h4>
    <ns-button-group color="primary"
      size="xs"
      v-model="colorRef"
      round
      :options="colorsValues" />
    </ns-row>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { NsTable, NsTableColumn, NsRow,
  NsTableColumnCurrency, BORDERS_VALUES } from '@uxda/nutshell'
import type { Borders, Color  } from '@uxda/nutshell'

const tableRef = ref(null)

const bordersRef = ref<Borders>('all')
const colorRef = ref<Color>('primary')

const bordersValues = BORDERS_VALUES.map(v => ({
  label: v, value: v
}))

const colorsValues = ['primary', 'secondary', 'neutral'].map(v => ({
  label: v, value: v
}))

export type 科目余额 = {
  科目名称: string,
  科目类型: string,
  科目编码: string,
  科目级次: string,
  借方合计: number,
  贷方合计: number,
  余额: number,
}

const balanceRows = ref<科目余额[]>([])

function load () {
  axios.get<科目余额[]>('/json/balances.json').then(rsp => {
    balanceRows.value = rsp.data
  })
}

onMounted(() => {
  load()
})
</script>
