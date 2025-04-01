<template>
  <ns-page class="contract-detail-page" fill="background">
    <ns-page-header 
      title="合同详情"
      fill="#ffffff44"
      :blur="50"
      reveal
      has-back-button>
      <ns-column class="name-pane" align="center" justify="center">
        <h2 class="name">{{ contract.名称 }}</h2>
        <p class="caption">{{ contract.编号 }}</p>
      </ns-column>
    </ns-page-header>
    <ns-page-content>
      <div class="hero cover align-end breakout">
        <ns-row align="center" justify="between">
          <ns-avatar fill="#2196f3"
            :edge="10"
            src="https://cdn.ddjf.com/static/images/nutshell/wait.svg" />
          <h2>{{ contract.状态 }}</h2>
        </ns-row>
      </div>
      <ns-card class="stage-card overlap mb-md" fill="#000" :blur="50" shadow="2">
        <ns-stepper :items="steps" :model-value="stage" />
      </ns-card>
      <ns-button-group fill="#00000080" v-model="tab" :items="tabs" round />

      <div v-if="tab === '1'">
        <ns-facts>
          <ns-facts-item label="合同编号">
            {{ contract.id }}
          </ns-facts-item>
          <ns-facts-item label="合同金额">
            ¥{{ contract.金额 }}
          </ns-facts-item>
          <ns-facts-item label="创建时间">
            {{ contract.创建时间 }}
          </ns-facts-item>
          <ns-facts-item label="合同状态">
            {{ contract.状态 }}
          </ns-facts-item>
        </ns-facts>

        <h2 class="h3">合同条款</h2>
        <ns-facts>
          <ns-facts-item label="贷款期限">
            36个月
          </ns-facts-item>
          <ns-facts-item label="利率">
            3.85%
          </ns-facts-item>
          <ns-facts-item label="还款方式">
            等额本息
          </ns-facts-item>
          <ns-facts-item label="担保方式">
            抵押担保
          </ns-facts-item>
        </ns-facts>
      </div>

      <div v-if="tab === '2'">
        <h2 class="h2">关联文件</h2>
        <div class="files">
          <ns-empty v-if="关联文件.length === 0" text="暂无关联文件" />
            <ns-card v-for="file in 关联文件" :key="file.id" class="file-card" fill="#ffffff22">
              <ns-image :src="file.thumb" class="file-thumb" />
              <p class="file-name">{{ file.name }}</p>
            </ns-card>
        </div>
        <ns-button color="primary" block @click="onUploadFile">上传文件</ns-button>
      </div>

      <div v-if="tab === '3'">
        <h2 class="h2">付款计划</h2>
        <div class="payment-plans">
          <ns-empty v-if="付款计划.length === 0" text="暂无付款计划" />
          <ns-timeline v-else
            variant="icon"
            :data="付款计划">
          </ns-timeline>
        </div>
      </div>

      <div v-if="tab === '4'">
        <h2 class="h2">关联客户</h2>
        <div class="clients">
          <ns-empty v-if="关联客户.length === 0" text="暂无关联客户" />
          <ns-repeator class="demo-repeator"
            direction="column"
            :data="关联客户"
            align="stretch"
            gap
            v-slot="item">
            <ns-card
              :title="item.姓名"
              :caption="`电话: ${item.手机号码}`"
              fill="#ffffff"
              body-fill="#f7f7f7"
              shadow>
              <ns-facts>
                <ns-facts-item label="证件号码">{{ item.证件号码 }}</ns-facts-item>
                <ns-facts-item label="地址">{{ item.证件地址 }}</ns-facts-item>
              </ns-facts>
              <template #icon>
                <ns-avatar fill="#2196f3" :edge="10" />
                <h2 class="h2">{{ contract.状态 }}</h2>
              </template>
            </ns-card>
          </ns-repeator>
        </div>
      </div>
      <ns-page-footer class="row">
        <ns-button color="negtive" @click="onDeleteClick">删除</ns-button>
        <ns-button class="grow" color="primary" @click="onEditClick">编辑</ns-button>
      </ns-page-footer>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useNutshell } from '@uxda/nutshell/taro'
import { type 合同, type 客户 } from '../../../models'
import Taro from '@tarojs/taro'

const $n = useNutshell()

const contract = ref<合同>({
  id: '1',
  名称: '房屋抵押贷款合同',
  金额: 1500000,
  状态: '签署中',
  编号: 'HT20230001',
  创建时间: '2023-05-15'
})

const tab = ref('1')
const stage = ref(2)
const 关联文件 = ref<any[]>([
  {
    id: '1',
    name: '合同正本',
    thumb: 'http://simple.shensi.tech/upload/asimo.jpg'
  },
  {
    id: '2',
    name: '客户身份证',
    thumb: 'http://simple.shensi.tech/upload/asimo.jpg'
  },
  {
    id: '3',
    name: '房产证',
    thumb: 'http://simple.shensi.tech/upload/asimo.jpg'
  }
])

const 付款计划 = ref([
  {
    title: '首付款',
    time: '2023/05/20',
    caption: '已收到首期付款300,000元',
    assignee: '张会计',
    status: 'done'
  },
  {
    title: '第一季度',
    time: '2023/08/15',
    caption: '已收到第一季度还款125,000元',
    assignee: '张会计',
    status: 'done'
  },
  {
    title: '第二季度',
    time: '2023/11/15',
    caption: '已收到第二季度还款125,000元',
    assignee: '张会计',
    status: 'done'
  },
  {
    title: '第三季度',
    time: '2024/02/15',
    caption: '待收取第三季度还款125,000元',
    assignee: '张会计',
    status: 'pending'
  },
  {
    title: '第四季度',
    time: '2024/05/15',
    caption: '待收取第四季度还款125,000元',
    assignee: '张会计',
    status: 'pending'
  }
])

const 关联客户 = ref<客户[]>([
  {
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
  }
])

const steps = [
  { title: '审核', value: 'review' },
  { title: '签约', value: 'sign' },
  { title: '放款', value: 'payment' },
  { title: '执行', value: 'execution' },
  { title: '完成', value: 'completed' },
]

const tabs = [
  { value: '1', label: '合同信息' },
  { value: '2', label: '合同文件' },
  { value: '3', label: '付款计划' },
  { value: '4', label: '关联客户' }
]

const onDeleteClick = () => {
  $n.confirm('确定要删除该合同吗?', {
    onOk: () => {
    }
  })
}

const onEditClick = () => {
  Taro.navigateTo({
    url: `/pages/contracts/edit?id=${contract.value.id}`
  })
}

const onUploadFile = () => {
  Taro.chooseImage({
    count: 1,
    success: (res) => {
      const tempFilePaths = res.tempFilePaths
      $n.toast('上传成功')
      关联文件.value.push({
        id: Date.now().toString(),
        name: '新上传文件',
        thumb: tempFilePaths[0]
      })
    }
  })
}

onMounted(() => {
  const id = Taro.getCurrentInstance().router?.params.id
  if (id) {
  }
})
</script>

<style lang="scss">
.contract-detail-page {
  color: #fff;
  --text: #fff;
  
  .hero {
    top: calc(var(--status) + var(--nav));
    height: 240px;
    padding: 2em 1em;
    transition: height 1s;
    box-sizing: border-box;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    transition: all .5s;
  }
  
  .files, .payment-plans, .clients {
    min-height: 200px;
    margin-bottom: 16px;
  }
  
  .file-card {
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .file-thumb {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }
  
  .file-name {
    font-size: 12px;
    margin-top: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
  }

  &.scrolled {
    .name-pane {
      .name {
        font-size: 14px;
      }
    }
  }
}
</style> 