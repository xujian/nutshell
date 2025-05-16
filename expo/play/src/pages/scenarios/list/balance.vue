<template>
  <ns-page class="withdraw-page" fill="#f1f2f4">
    <ns-page-header curved
      fill="#3B393C"
      title="余额" has-back-button>
    </ns-page-header>
    <ns-page-content>
      <ns-card class="balance-card relative" gradient="#FFEBC1,#FFB875/90">
        <ns-row justify="between" align="end">
          <ns-number :value="余额"
            header="可提现余额(元)"
            :minimum-fraction-digits="1"
            :maxmimum-fraction-digits="2" />
          <ns-button label="提现" color="#000000"
            v-link="'/pages/scenarios/form/withdraw'"
            round />
        </ns-row>
        <div class="yundou-button row items-center absolute">
          <img
            class="image"
            src="https://cdn.ddjf.com/static/images/beidouxing/yundou.png"
            alt=""
          />
          <div class="text">兑换云豆</div>
        </div>
      </ns-card>
      <ns-row justify="start" :gap="10">
        <h2 class="section-title b">明细</h2>
        <date-range class="date-range" v-model="起止日期" />
        <div class="spacer"></div>
        <list-filter class="list-filter" v-model="筛选条件" />
      </ns-row>
      <ns-repeator :data="交易记录"
        gap
        v-slot="item"
        direction="column">
        <ns-card fill="#fff" class="full-width">
          <ns-row align="center" justify="between" :gap="4">
            <ns-chip :label="item.变更类型" fill="#FFD700" />
            <h4 class="b">{{ item.客户 || item.产品 }}</h4>
            <div class="spacer"></div>
            <ns-number :value="item.金额" size="xs" prefix="￥" justify="end" />
          </ns-row>
          <ns-row justify="between" align="center">
            <p class="account caption" v-if="item.变更类型 === '提现'">
              提现账号: {{ item.提现账号 }}
            </p>
            <p class="account caption" v-if="item.变更类型 === '收益'">
              查询电话: {{ item.查询电话 }}
            </p>
            <p class="account caption" v-if="item.变更类型 === '兑换'">
              租户名称: {{ item.租户名称 }}
            </p>
            <p class="account caption" v-if="item.变更类型 === '返佣'">
              {{ item.推荐人 }}
            </p>
            <div class="caption">余额: {{ item.余额 }}</div>
          </ns-row>
        </ns-card>
      </ns-repeator>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DateRange, ListFilter } from '@uxda/appkit'

const 余额 = ref(18760)
const 起止日期 = ref<{ from: string; to: string }>()
const 筛选条件 = ref({
  status: 'all',
})
const 交易记录 = ref([
  {
    id: 'w15',
    变更类型: '收益',
    金额: 2,
    客户: '秦重',
    余额: 27,
    时间: '2024-12-31 16:45:00'
  },
  {
    id: 'w14',
    变更类型: '提现',
    备注: '提现到银行卡',
    金额: -50,
    产品: '招商银行',
    余额: 25,
    时间: '2024-12-25 14:30:00'
  },
  {
    id: 'w13',
    变更类型: '收益',
    金额: 3,
    客户: '陈大郎',
    余额: 75,
    时间: '2024-12-20 09:15:00'
  },
  {
    id: 'w12',
    变更类型: '返佣',
    金额: 4,
    客户: '王安石',
    余额: 72,
    时间: '2024-12-15 11:20:00'
  },
  {
    id: 'w11',
    变更类型: '充值',
    备注: '6226.......0750',
    金额: 100,
    客户: '622********1234',
    余额: 68,
    时间: '2024-12-10 15:40:00'
  },
  {
    id: 'w10',
    变更类型: '收益',
    备注: '**赵',
    金额: 2,
    客户: '赵昂',
    余额: -32,
    时间: '2024-11-30 13:25:00'
  },
  {
    id: 'w9',
    变更类型: '收益',
    金额: 5,
    客户: '钱婆留',
    余额: -34,
    时间: '2024-11-25 10:15:00'
  },
  {
    id: 'w8',
    变更类型: '收益',
    金额: 1,
    客户: '周龙信',
    余额: -39,
    时间: '2024-11-20 16:30:00'
  },
  {
    id: 'w7',
    变更类型: '收益',
    金额: 3,
    客户: '潘又安',
    余额: -40,
    时间: '2024-11-15 14:20:00'
  },
  {
    id: 'w6',
    变更类型: '收益',
    金额: 2,
    客户: '吴大郎',
    余额: 4,
    时间: '2024-11-10 09:45:00'
  },
  {
    id: 'w5',
    变更类型: '收益',
    金额: 4,
    客户: '郑爱月',
    余额: -45,
    时间: '2024-10-25 15:50:00'
  },
  {
    id: 'w4',
    变更类型: '收益',
    金额: 3,
    客户: '王力方',
    余额: -49,
    时间: '2024-10-20 11:35:00'
  },
  {
    id: 'w3',
    变更类型: '收益',
    金额: 2,
    客户: '陈商',
    余额: -52,
    时间: '2024-10-15 14:25:00'
  },
  {
    id: 'w2',
    变更类型: '收益',
    金额: 3,
    客户: '刘思思',
    余额: 3,
    时间: '2024-10-10 10:40:00'
  },
  {
    id: 'w1',
    变更类型: '收益',
    备注: '**张',
    金额: 1,
    客户: '张宝官',
    余额: 0,
    时间: '2024-10-01 09:30:00'
  }
])
</script>

<style lang="scss">
.withdraw-page {
  .yundou-button {
    top: 16px;
    right: 0;
    font-size: 10px;
    background: rgba(255, 255, 255, 0.5);
    width: 80px;
    height: 24px;
    border-radius: 12px 0 0 12px;
    padding: 0 7px;
    box-sizing: border-box;
    .image {
      width: 12px;
      height: 12px;
      margin-right: 3px;
    }
    .text {
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDZMMTYgMTJMMTAgMThWNloiIGZpbGw9IiMzNTM1MzUiIHN0cm9rZT0iIzM1MzUzNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=');
      padding-right: 12px;
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 12px;
      white-space: nowrap;
    }
  }
  .sheet-scroll-view-content{
    padding: 0 !important;
    height: 400px !important;
    .list-filter-picker-title{
      line-height: 44px;
    }
    .list-filter-picker-btn{
      position: absolute;
      bottom: 12px;
      left: 0;
      right: 0;
    }
  }
}
</style>
