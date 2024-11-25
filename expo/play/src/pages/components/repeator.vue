<template>
  <ns-page>
    <ns-page-header title="连续平铺" has-back-button></ns-page-header>
    <ns-page-content>
      <h2>草稿箱</h2>
      <div class="caption">可右滑删除</div>
      <ns-repeator class="demo-repeator"
        direction="column"
        :items="items"
        fill="#fff"
        :gap="10"
        swipable
        align="stretch">
        <template #default="item">
          <div class="padding" justify="between">
            <h5 class="b">{{ item.name }}</h5>
            <div class="caption">{{ item.time }}</div>
          </div>
        </template>
        <template #swipe>
          <ns-button square size="sm" color="negtive">删除</ns-button>
        </template>
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const items = [
  {
    name: '居间借贷服务合同协议',
    time: '2024-10-11 15:00'
  },
  {
    name: '小贷结清证明',
    time: '2024-10-15 9:24'
  },
  {
    name: '赎楼交易通用合同',
    time: '2024-10-18 10:45'
  },
]
</script>

