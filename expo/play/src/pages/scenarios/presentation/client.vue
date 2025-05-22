<template>
  <ns-page class="client-detail-page" fill="#f1f2f4">
    <ns-page-header
      title="客户"
      color-scheme="dark"
      fill="#33333399"
      :blur="50"
      has-back-button>
    </ns-page-header>
    <ns-page-content>
      <ns-card class="customer-card" fill="#fff">
        <ns-row justify="stretch" align="start" gap class="padding">
          <ns-avatar size="lg" src="https://randomuser.me/api/portraits/men/32.jpg" color="#eee" class="shrink" circle />
          <ns-column justify="stretch" align="stretch" class="grow" :gap="4">
            <ns-row justify="start" class="title">
              <div class="label">张三</div>
              <div>13138866215</div>
            </ns-row>
            <ns-row justify="start">
              <div class="label caption">跟进人</div>
              <div class="caption">张三</div>
            </ns-row>
          </ns-column>
        </ns-row>
        <ns-row justify="start">
          <ns-chips :items="tags" color="#F2F3FF" textColor="#007FFF" size="md"/>
        </ns-row>
      </ns-card>
      <ns-card class="content-card" fill="#fff">
        <ns-tabs :items="[
          { label: '记录', value: '0', },
          { label: '资料', value: '1', }
        ]"
          :r="0"
          fill="#fff"
          size="xl"
          v-model="activeTab" />
        <ns-button-group fill="#F0F1F4" v-model="tab" :items="tabs" class="button-group" size="md" />
      </ns-card>


      <div v-if="tab === '1'">
        <ns-card fill="#fff" class="base-card">
          <div class="title">基本信息</div>
          <ns-facts fontSize="font-md">
            <ns-facts-item label="手机号码">
              {{ client.手机号码 }}
            </ns-facts-item>
            <ns-facts-item label="证件号码">
              {{ client.证件号码 }}
            </ns-facts-item>
            <ns-facts-item label="证件地址">
              {{ client.证件地址 }}
            </ns-facts-item>
            <ns-facts-item label="婚姻状态">
              {{ client.婚姻状态 }}
            </ns-facts-item>
          </ns-facts>
          <div class="title">意向信息</div>
          <ns-facts fontSize="font-md">
            <ns-facts-item label="意向等级">
              <ns-rating :value="client.意向等级 || 3" color='#007FFF' />
            </ns-facts-item>
            <ns-facts-item label="业务意向">
              {{ client.业务意向 }}
            </ns-facts-item>
            <ns-facts-item label="客户标签" direction="column">
              <ns-chips :items="tags" color="#F2F3FF" textColor="#007FFF" justify="end" />
            </ns-facts-item>
            <ns-facts-item label="客户来源">
              {{ client.客户来源 }}
            </ns-facts-item>
            <ns-facts-item label="意向产品" direction="column">
              <ns-chips :items="interests" color="#F2F3FF" textColor="#007FFF" justify="end" />
            </ns-facts-item>
            <ns-facts-item label="备注">
              {{ client.备注 }}
            </ns-facts-item>
          </ns-facts>
        </ns-card>
      </div>

      <div v-if="tab === '2'">
        <h2 class="h2">跟进记录</h2>
        <div class="follow-records">
          <ns-empty v-if="跟进记录.length === 0" text="暂无跟进记录" />
          <ns-timeline v-else
            variant="icon"
            :data="跟进记录">
          </ns-timeline>
        </div>
        <ns-button color="primary" block @click="onAddFollowRecord">添加跟进记录</ns-button>
      </div>

      <div v-if="tab === '3'">
        <div class="orders">
          <ns-empty v-if="关联订单.length === 0" text="暂无关联订单" />
          <ns-repeator class="demo-repeator"
            direction="column"
            :data="关联订单"
            align="stretch"
            gap
            v-slot="item">
            <ns-card
              class="full-width"
              :caption="`进件时间: ${item.createdAt}`"
              :title="item.type"
              captionfontSize= "font-xs"
              titleFontSize = "font-lg"
              fill="#ffffff"
              :body-fill="getBgColor(item)">
                <ns-facts fontSize="font-md" :items="toFact(item)" />
                <template #icon>
                  <ns-avatar :fill="colors[item.type]" :edge="10" :src="images[item.type]" />
                </template>
                <template #corner>
                  <span>{{ item.status }}</span>
                </template>
            </ns-card>
          </ns-repeator>
        </div>
      </div>

      <div v-if="tab === '4'">
        <h2 class="h2">影像资料</h2>
        <div class="files">
          <ns-empty v-if="影像资料.length === 0" text="暂无影像资料" />
            <ns-card v-for="file in 影像资料" :key="file.id" class="file-card" fill="#ffffff22">
              <ns-image :src="file.thumb" class="file-thumb" />
              <p class="file-name">{{ file.name }}</p>
            </ns-card>
        </div>
        <ns-button color="primary" block @click="onUploadFile">上传资料</ns-button>
      </div>

      <ns-row justify="space-between" class="mt-lg">
        <ns-button color="negtive" @click="onDeleteClick">删除</ns-button>
        <ns-button class="grow" color="primary" @click="onEditClick">编辑</ns-button>
      </ns-row>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useNutshell, type Media, type File } from '@uxda/nutshell/taro'
import { 订单, type 客户 } from '../../../models'
import Taro from '@tarojs/taro'

const $n = useNutshell()

const activeTab = ref(0)

const client = ref<客户>({
  id: '1001',
  姓名: '王大地',
  手机号码: '13800138000',
  证件号码: '310101199001011234',
  证件地址: '上海市浦东新区陆家嘴环路1234号',
  婚姻状态: '已婚',
  客户来源: '朋友推荐',
  业务意向: '房贷',
  意向等级: 4,
  备注: '客户资质良好，有购房意向'
})

const colors = {
  交易周转: 'primary',
  非交易周转: 'positive'
}

const images: Record<string, string> = {
  交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-JYZZ.png',
  非交易周转: 'https://cdn.ddjf.com/static/images/fnfundkit/icon-FJYZZ.png'
}

const mockFollowups = [
  {
    title: '首次接触',
    time: '2024/03/10 14:30',
    caption: '客户通过官网咨询房产抵押贷款, 有50万资金需求, 用于企业经营周转。客户名下有两套房产, 均无抵押, 有较强还款能力。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '电话沟通',
    time: '2024/03/12 10:15',
    caption: '电话详细了解客户需求, 客户希望贷款期限在3年以上, 月供在1.5万以内。已向客户介绍我司产品方案, 客户表示满意, 约定次日上门查看房产。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '上门查看',
    time: '2024/03/13 15:40',
    caption: '实地查看客户房产情况, 位于市中心, 约120平米, 市场估值约300万。收集了房产证、身份证等资料, 客户决定申请我司A类产品。',
    assignee: '王大地',
    status: 'normal'
  },
  {
    title: '提交审核',
    time: '2024/03/15 09:30',
    caption: '已将客户资料提交审核, 预计3个工作日出结果。客户对利率有疑问, 已详细解释并获得理解。',
    assignee: '李敏克',
    status: 'normal'
  },
  {
    title: '审核通过',
    time: '2024/03/18 16:20',
    caption: '贷款审核已通过, 批复金额45万, 期限5年, 月息0.55%。已电话告知客户, 客户表示接受, 约定明日签约。',
    assignee: '徐晋语',
    status: 'normal'
  }
]

const mockOrders: 订单[] = [
  {
    id: 'o0001',
    type: '交易周转',
    createdAt: '2025/10/08 10:32',
    客户姓名: '李华明',
    渠道经理: '王伟强',
    放款机构: '联银小贷',
    订单编号: 'SZS0420230220001',
    状态: '待审核'
  },
  {
    id: 'o0002',
    type: '交易周转',
    createdAt: '2025/10/08 11:45',
    客户姓名: '张敏杰',
    渠道经理: '李娜丽',
    放款机构: '中信银行',
    订单编号: 'SZS0420230220002',
    sta状态tus: '待审核'
  },
  {
    id: 'o0003',
    type: '交易周转',
    createdAt: '2025/10/08 12:50',
    客户姓名: '王强军',
    渠道经理: '刘洋明',
    放款机构: '招商银行',
    订单编号: 'SZS0420230220003',
    状态: '待审核'
  },
]

const mockFiles: File[] = [
  {
    id: '1',
    name: '文件1',
    thumb: 'http://simple.shensi.tech/upload/asimo.jpg'
  }
]

const mockMedias: Media[] = [
  {
    id: '1',
    name: '文件1',
    type: 'image',
    createdAt: '2021-01-01'
  }
]

const tab = ref('1')
const stage = ref(2)
const 跟进记录 = ref(mockFollowups)
const 关联订单 = ref(mockOrders)
const 影像资料 = ref(mockMedias)

const steps = [
  { title: '线索', value: 'lead' },
  { title: '意向', value: 'opportunity' },
  { title: '上门', value: 'visit' },
  { title: '签单', value: 'open' },
  { title: '做单', value: 'deal' },
  { title: '放款', value: 'payment' },
  { title: '结单', value: 'done' },
]

const tabs = [
  { value: '1', label: '基本资料' },
  { value: '2', label: '跟进记录' },
  { value: '3', label: '关联订单' },
  { value: '4', label: '影像资料' }
]

const tags = [
  { label: '经营企业', value: '1', textColor: '#007FFF' },
  { label: '房地产', value: '2' },
  { label: '海外资产', value: '3' },
]

const interests = [
  { label: '支付宝', value: '1' },
  { label: '提放宝', value: '2' },
]

const onDeleteClick = () => {
  $n.confirm('确定要删除该客户吗?', {
    onOk: () => {

    }
  })
}

const onEditClick = () => {
  Taro.navigateTo({
    url: `/pages/clients/edit?id=${client.value.id}`
  })
}

const onAddFollowRecord = () => {
  Taro.navigateTo({
    url: `/pages/follow-records/create?clientId=${client.value.id}`
  })
}

const onUploadFile = () => {
  Taro.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths
      $n.toast('上传成功')
      // files.value.push({
      //   id: Date.now().toString(),
      //   name: '新上传文件',
      //   thumb: tempFilePaths[0]
      // })
    }
  })
}

const toFact = (item) => {
  return Object.keys(item).map(key => {
    return {
      label: key,
      value: item[key]
    }
  }).filter(f => !['type', 'createdAt', 'id'].includes(f.label))
}

onMounted(() => {
})

const getBgColor = (item) => {
  let isJy = item.type === '交易周转'
  return isJy ? 'linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(241.09, 247.15, 255, 1) 117.45%)' :
  'linear-gradient(270deg, rgba(255, 255, 255, 1), rgba(241.29, 251.58, 246.83, 1) 163.889%)'
}
</script>

<style lang="scss">
.client-detail-page {
  color: #fff;
  --text: #fff;
  .customer-card{
    margin-bottom: 10px;
    .title{
      font-size: 16px;
      line-height: 14px;
    }
    .label{
      width: 52px;
    }
  }
  .content-card{
    margin-bottom: 10px;
    .nut-tabs__titles-item{
      flex: 1 !important;
    }
    .button-group{
      width: 100%;
      margin: 12px 0px 0px;
      padding:4px;
      box-sizing: border-box;
      .button-group-scroll-view{
        width: 100%;
        .buttons{
          width: 100%;
          display: flex;
          .nut-button{
            flex: 1;
            &.active{
              background: #fff;
              color: #007FFF;
            }
          }
        }
      }
    }
  }
  .base-card{
    .title{
      position: relative;
      padding-left: 6px;
      font-size: 16px;
      line-height: 22px;
    }
    .title::after{
      position: absolute;
      left: 0px;
      width: 2px;
      height: 8px;
      background: var(--ns-primary);
      border-radius: 4px;
      top: 50%;
      transform: translateY(-50%);
      content: "";
    }
    .ns-facts{
      margin: 10px 0;
      .ns-facts-item{
        font-size: 14px;
      }
    }
  }
}
</style>
