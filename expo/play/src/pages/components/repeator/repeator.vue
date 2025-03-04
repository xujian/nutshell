<template>
  <ns-page>
    <ns-page-header title="连续平铺" caption="<ns-repeator>" has-back-button>
      <template #prepend>
        <ns-icon name="http://simple.shensi.tech/icons/camera.svg" />
      </template>
    </ns-page-header>
    <ns-page-content>
      <h2>草稿箱</h2>
      <div class="caption">可右滑删除</div>
      <ns-repeator class="demo-repeator"
        direction="column"
        :data
        fill="#CDDC39"
        :r="10"
        :gap="10"
        swipable
        align="stretch">
        <template #default="item">
          <div class="padding" justify="between">
            <h5 class="b">{{ item.name }}</h5>
            <div class="caption">{{ item.time }}</div>
          </div>
        </template>
        <template #swipe="item">
          <ns-button square size="sm" color="negtive" @click="() => deleteItem(item)">删除</ns-button>
        </template>
      </ns-repeator>
      <h2>草稿箱</h2>
      <div class="caption">可批量选择</div>
      <ns-repeator class="demo-repeator"
        direction="column"
        :data
        fill="#CDDC39"
        :r="10"
        :gap="10"
        selectable
        align="stretch">
        <template #default="item">
          <div class="padding" justify="between">
            <h5 class="b">{{ item.name }}</h5>
            <div class="caption">{{ item.time }}</div>
          </div>
        </template>
        <template #swipe="item">
          <ns-button square size="sm" color="negtive" @click="() => deleteItem(item)">删除</ns-button>
        </template>
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref<any>([
  {
    id: '1',
    name: '居间借贷服务合同协议',
    time: '2024-10-11 15:00'
  },
  {
    id: '2',
    name: '小贷结清证明',
    time: '2024-10-15 9:24',
    swipable: false
  },
  {
    id: '3',
    name: '赎楼交易通用合同',
    time: '2024-10-18 10:45'
  },
])

const deleteItem = (item) => {
  const index = data.value.findIndex(i => i.id === item.id)
  data.value.splice(index, 1)
}

</script>

