<template>
  <ns-page class="home-page">
    <ns-page-header reveal
      title="大道云 PRO"
      fill="neutral"></ns-page-header>
    <ns-page-content>
      <h2 class="h2">销售助手</h2>
      <scroll-view scroll-x="true">
        <ns-repeator class="numbers"
          :items="numbers"
          v-slot="item"
          :gap="10">
          <ns-number
            :value="item.value >= 99 ? 99 : item.value"
            :suffix="item.value >= 99 ? '+' : ''"
            :footer="item.title"
            justify="center"
            foreground="#fff"
            gradient="#e94057,#f27121/45" />
        </ns-repeator>
      </scroll-view>
      <h2 class="h2">快捷入口</h2>
      <ns-row class="mt-md" justify="stretch" :gap="10">
        <ns-card class="create-client entry flex-grow"
          gradient="#FA8BFF,#2BD2FF,#2BFF88/90"
          texture="https://simple.shensi.tech/images/client-girl.svg"
          :repeat="false"
          foreground="#fff"
          border-color="#fff">
          <h3 class="b">客户建档</h3>
          <p class="caption">新建意向客户</p>
        </ns-card>
        <ns-card class="entry flex-grow" fill="#000"
          foreground="#fff"
          border-color="#fff">
          <h3 class="b">产品进件</h3>
          <p class="caption">创建产品订单</p>
        </ns-card>
      </ns-row>
      <ns-row class="reminders" justify="stretch" :gap="10">
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
import { useTabbar } from '@uxda/appkit-next'
  import { endpoints, useHttp } from '../../api'
import { WithPaging } from '@uxda/nutshell'
import Taro from '@tarojs/taro'
  const http = useHttp()

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

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('home')
  http.get<WithPaging<any[]>>(endpoints.获取消息, {
    page: 1
  }).then((rsp) => {
    messages.value = rsp.data
  })
})
</script>

<style lang="scss">
.home-page {
  background-color: var(--ns-neutral);
  color: #fff;
  .numbers {
    .ns-repeator-item {
      width: calc(30% - 10px);
    }
  }
  .entry {
    background-color: var(--ns-primary);
    .caption {
      font-size: var(--ns-font-size-xs);
      color: var(--ns-neutral--60);
    }
  }
  .reminders {
    .entry {
      aspect-ratio: 1;
      background-size: 70%;
      background-position: center 25px;
      .card-body {
        padding: 0;
      }
      h4 {
        background-color: #000000;
        height: 20px;
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
