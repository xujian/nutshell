<template>
  <ns-facts>
    <ns-facts-item label="账户类型">
      {{accountInfo.账户类型}}
    </ns-facts-item>
    <ns-facts-item label="卡号">
      {{ accountInfo.卡号 }}
    </ns-facts-item>
    <ns-facts-item label="户名">
      {{  accountInfo.户名 }}
    </ns-facts-item>
    <ns-facts-item label="开户行">
      {{ accountInfo.开户行 }}
    </ns-facts-item>
    <ns-facts-item label="账户余额">
      <ns-number size="xs" :model-value="accountInfo.账户余额" />
    </ns-facts-item>
    <ns-facts-item label="业务余额">
      <ns-number size="xs" :model-value="accountInfo.业务余额" />
    </ns-facts-item>
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
</script>
