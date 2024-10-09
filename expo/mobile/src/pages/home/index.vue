<template>
  <ns-page class="home-page">
    <ns-page-header reveal sticky
      title="深思客户管理"
      :blur="20"
      :brightness="1.5"
      fill="#aaaaaa88"></ns-page-header>
    <ns-page-content>
      <scroll-view scroll-x="true">
        <ns-repeator class="numbers"
          :items="numbers"
          v-slot="item"
          :divides="3.15"
          :gap="10">
          <ns-number
            :value="item.value >= 99 ? 99 : item.value"
            :suffix="item.value >= 99 ? '+' : ''"
            :footer="item.title"
            justify="center"
            foreground="#fff"
            stroke="#CDDC39"
            gradient="#799f0c,#ffe000/45"
            v-link="'/pages/clients/list'" />
        </ns-repeator>
      </scroll-view>
      <h2 class="h2">快捷入口</h2>
      <ns-row class="entries" justify="stretch" :gap="10">
        <ns-card class="create-client entry flex-grow"
          gradient="#FA8BFF,#2BD2FF,#2BFF88/90"
          texture="https://simple.shensi.tech/images/client-girl.svg"
          :repeat="false"
          foreground="#fff"
          stroke="#ffffff44"
          :fluted="10">
          <h3 class="b">客户建档</h3>
          <p class="caption">新建意向客户</p>
        </ns-card>
        <ns-card class="entry flex-grow" fill="#000"
          foreground="#fff"
          stroke="#ffffff44"
          :fluted="10">
          <h3 class="b">产品进件</h3>
          <p class="caption">创建产品订单</p>
        </ns-card>
      </ns-row>
      <ns-row class="reminders mt-md" justify="stretch" :gap="10">
        <ns-card variant="outlined" class="entry my-md flex-grow"
          :repeat="false"
          texture="https://simple.shensi.tech/images/campain.svg">
          <h4>营销活动</h4>
        </ns-card>
        <ns-card variant="outlined" class="entry my-md flex-grow"
          :repeat="false"
          texture="https://simple.shensi.tech/images/tasks.svg">
          <h4>待办任务</h4>
        </ns-card>
        <ns-card variant="outlined" class="entry my-md flex-grow"
          :repeat="false"
          texture="https://simple.shensi.tech/images/flows.svg">
          <h4>流程处理</h4>
        </ns-card>
        <ns-card variant="outlined" class="entry my-md flex-grow"
          :repeat="false"
          texture="https://simple.shensi.tech/images/reports.svg"
          @click="onReportClick">
          <h4>工作报告</h4>
        </ns-card>
      </ns-row>
      <h2 class="h2">消息</h2>
      <ns-card class="messages" fill="#000000" foreground="#fff">
        <ns-timeline :items="messages">
          <template #title="{item}">
            <ns-row align="center" justify="between">
              <h5 class="h5">{{ item.title }}</h5>
              <div class="datetime">{{ item.time }}</div>
            </ns-row>
          </template>
          <template #content="{item}">
            <p class="line">{{ item.content }}</p>
          </template>
        </ns-timeline>
      </ns-card>
    </ns-page-content>
  </ns-page>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useTabbar } from '@uxda/appkit'
import { WithPaging, usePaging } from '@uxda/nutshell/taro'
import Taro from '@tarojs/taro'
import { endpoints, useHttp } from '../../api'

const $http = useHttp()

const numbers = [
  { title: '今日到店客户', value: 10 },
  { title: '未拨打客户', value: 1000 },
  { title: '今日提醒客户', value: 0 },
  { title: '即将掉落', value: 10 },
  { title: '今日任务', value: 10 },
]

const messages = ref<any[]>([])

const onReportClick = () => Taro.navigateTo({
  url: '/pages/home/report'
})

const 获取消息 = async (page: number) => {
    return $http.get<WithPaging<any[]>>(endpoints.获取消息, {
      page
    }).then(({paging, data}) => {
      messages.value = data
      return {paging, data}
    })
  },
  { nextPage } = usePaging(获取消息)

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('home')
  nextPage(1)
})
</script>

<style lang="scss">
.home-page {
  background-color: var(--ns-neutral);
  color: #fff;
  padding-bottom: 100vh;
  .numbers {
  }
  .entry {
    background-color: var(--ns-primary);
    .caption {
      font-size: var(--ns-font-xs);
    }
  }
  .reminders {
    .entry {
      aspect-ratio: 1;
      background-size: 70%;
      background-position: center 25px;
      background-repeat: no-repeat;
      .card-body {
        padding: 0;
      }
      h4 {
        text-align: center;
        font-size: 10px;
        background-color: #000000;
        line-height: 20px;
        border-radius: 10px;
        padding-inline: 10px;
      }
    }
  }
  .messages {
    .h5 {
      font-weight: bold;
      line-height: 2em;
    }
    .datetime {
      font-size: 11px;
      color: #ffffff88;
    }
  }
}
</style>
