<template>
  <ns-page class="clients-page">
    <ns-page-header title="客户列表"
      title-align="start"
      colorMode="dark"
      fill="transparent"
      :has-back-button="false"
      :minimal="false">
    </ns-page-header>
    <ns-page-content>
      <scroll-view scroll-x="true">
        <ns-repeator class="numbers"
          :items="numbers"
          v-slot="item"
          :gap="10">
          <ns-number
            :value="item.value"
            :footer="item.title"
            justify="center"
            foreground="#fff"
            gradient="#e94057,#f27121/45" />
        </ns-repeator>
      </scroll-view>
      <!--ns-tabs v-model="tab"
        class="my-md"
        variant="soft"
        fill="#ffffff44"
        :blur="10"
        :items="tabs"
        round /-->
      <ns-button-group v-model="tab"
        class="categories my-md"
        round
        fill="#ffffff44"
        color="#ffffff00"
        :blur="10"
        :options="tabs" />
      <client-list :items="clients" @click="onClientClick" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { type WithPaging } from '@uxda/nutshell'
import { endpoints, useHttp } from '../../api'
import { type Client } from '../../models'
import ClientList from '../../components/ClientList.vue'
import Taro from '@tarojs/taro'

const tab = ref('tab1')
const clients = ref<Client[]>([])

const numbers = [
  { title: '今日跟进客户', value: 10 },
  { title: '今日提醒客户', value: 10 },
  { title: '今日邀约客户', value: 10 },
  { title: '今日上门客户', value: 10 },
]

const tabs = [
  {
    value: 'tab1',
    label: '未拨打'
  },
  {
    value: 'tab2',
    label: '需跟进'
  },
  {
    value: 'tab3',
    label: '即将掉落公海'
  },
  {
    value: 'tab4',
    label: '异常'
  },
  {
    value: 'tab5',
    label: '需反馈'
  },
  {
    value: 'tab6',
    label: '今日上门'
  },
  {
    value: 'tab7',
    label: '新客户'
  }
]

const $http = useHttp()

const onClientClick = (client: Client) => {
  Taro.navigateTo({
    url: `/pages/clients/detail?id=${client.id}`
  })
}

const onScroll = (e: Event) => {
  console.log('===Scroll: e', e)
}

onMounted(() => {
  $http.get<WithPaging<Client[]>>(endpoints.获取客户列表, {
    page: 1,
  }).then(result => {
    console.log('===result.data', result.data)
    clients.value = result.data
  })
})
</script>

<style lang="scss">
.clients-page {
  background-image: url(http://simple.shensi.tech/images/background.jpeg);
  color: #fff;
  .numbers {
    .ns-repeator-item {
      width: calc(30% - 10px);
    }
  }
  .categories {
    position: sticky;
    top: var(--ns-spacing);
    z-index: 10;
  }
}
</style>
