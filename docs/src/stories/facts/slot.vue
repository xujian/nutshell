<template>
  <ns-facts :items="items">
    <template #item="item">
      <h4>
        {{ item.value }}
      </h4>
      <div class="caption">不可更改</div>
    </template>
  </ns-facts>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const accountInfo = ref({
  账户类型: '监管户',
  卡号: '5187107580699970',
  户名: '深圳市公积金管理中心',
  开户行: '建设银行深圳分行',
  账户余额: 166_890_120_765.00,
  业务余额: 166_890_120_765.00,
})

const items = Object.entries(accountInfo.value)
  .map(([k, v])  => ({
    label: k,
    value: v
  }))
</script>
