<template>
  <ns-page class="contract-detail-page" fill="#fff">
    <ns-page-header title="排行榜"></ns-page-header>
    <ns-page-content>
      <div class="rank" :class="'rank-'+ tab">
        <ns-button-group v-model="tab" :items="tabs" class="button-group" size="md" :class="'button-group-'+ tab" />
        <div class="rank-info">
          <div class="rank-info-title">{{ info?.title }}</div>
          <div class="rank-info-time">{{ info?.time }}</div>
        </div>
      </div>
      <div class="table">
        <div class="table-search">
          <ns-search placeholder="请输入名称搜索" color="#F1F7FE" variant="outlined" v-model="keyWord" />
        </div>
        <Table class="table-info" :column="info?.column" :data="info?.data"></Table>
      </div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'

interface pageDataType{
  key: string
  buttonName: string
  title: string
  time: string
  data: dataType[]
  column: columnType[]
}
interface optionType{
  value: string
  label: string
}

export interface columnType{
  key: string
  name: string
}
export interface dataType{
  sort: number
  name: string
  desc?: string
  kyx: number
  zsy: number
  zx: number
  zjf: number
}

const Table = defineAsyncComponent(()=> import('./table/index.vue'))

const tab = ref<string>('a')
const tabs = ref<optionType[]>([])
const pageData = ref<pageDataType[]>([
  {
    key: 'a',
    buttonName: '经营单位',
    time: '2020-10-10',
    title: '经营单位榜',
    column: [
      { key: 'name', name: '名称' },
      { key: 'kyx', name: '扩影响' },
      { key: 'zsy', name: '增收益' },
      { key: 'zx', name: '支线' },
      { key: 'zjf', name: '总积分' }
    ],
    data: [
      { sort: 1, name: '昆明分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '深圳分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '广州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 4, name: '东莞分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 5, name: '惠州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 6, name: '河源分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 7, name: '汕尾分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 8, name: '汕头分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 9, name: '潮州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 10, name: '揭阳分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 11, name: '清远分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 12, name: '韶关分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 13, name: '梅州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 14, name: '阳江分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 15, name: '云浮分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 16, name: '茂名分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 17, name: '湛江分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 18, name: '长沙分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 19, name: '襄阳分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 20, name: '黑龙江分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 21, name: '新疆分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 22, name: '上海分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000}
    ]
  },
  {
    key: 'b',
    buttonName: '合作商',
    time: '2020-02-10',
    title: '合作商榜',
    column: [
      { key: 'name', name: '名称' },
      { key: 'kyx', name: '扩影响' },
      { key: 'zsy', name: '增收益' },
      { key: 'zx', name: '支线' },
      { key: 'zjf', name: '总积分' }
    ],
    data: [
      { sort: 1, name: '昆明分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '深圳分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '广州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 4, name: '东莞分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 5, name: '惠州分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 6, name: '河源分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 7, name: '汕尾分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 8, name: '汕头分部', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
    ]
  },
  {
    key: 'c',
    buttonName: '个人',
    time: '2010-01-02',
    title: '个人榜',
    column: [
      { key: 'name', name: '名称' },
      { key: 'kyx', name: '业务' },
      { key: 'zsy', name: '战略' },
      { key: 'zx', name: '打卡' },
      { key: 'zjf', name: '总积分' }
    ],
    data: [
      { sort: 1, name: '昆明分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '深圳分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 2, name: '广州分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 4, name: '东莞分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 5, name: '惠州分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 6, name: '河源分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 7, name: '汕尾分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 8, name: '汕头分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 9, name: '潮州分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 10, name: '揭阳分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 11, name: '清远分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 12, name: '韶关分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 13, name: '梅州分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 14, name: '阳江分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 15, name: '云浮分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
      { sort: 16, name: '茂名分部', desc: '昆明第三营业厅', kyx: 10000, zsy: 10000, zx: 100, zjf: 1000},
    ]
  }
])
const keyWord = ref<string>('')

onMounted(() => {
  tabs.value = pageData.value.map((item: pageDataType) => {
    return { label: item.buttonName, value: item.key}
  })
})


const info = computed(()=>{
  return pageData.value.find((item: pageDataType) => {
    return item.key === tab.value
  })
})
</script>

<style lang="scss">
.contract-detail-page {
  --ns-spacing: 0px;
  .ns-page-content{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .rank{
    width: 100%;
    height: 180px;
    padding-top: 12px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .button-group{
      width: 280px;
      margin: 0px auto;
      padding:3px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.3);
      .button-group-scroll-view{
        width: 100%;
        .buttons{
          width: 100%;
          display: flex;
          .nut-button{
            color:#fff;
            flex: 1;
            background: transparent;
            &.active{
              background: #fff;
              color: #007FFF;
            }
          }
        }
      }
    }
    .button-group-a{
      .nut-button{
        &.active{
          color: #40A1AF !important;
        }
      }
    }
    .button-group-b{
      .nut-button{
        &.active{
          color: #007FFF !important;
        }
      }
    }
    .button-group-c{
      .nut-button{
        &.active{
          color: #ED7C08 !important;
        }
      }
    }
    &-info{
      position: absolute;
      left: 20px;
      bottom:40px;
      color: #fff;
      &-title{
        font-size: 30px;
        line-height: 40px;
      }
      &-time{
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  .rank-a{
    background-image: url(https://cdn.ddjf.com/static/images/loan-manage/bg_rank_day.webp);
  }
  .rank-b{
    background-image: url(https://cdn.ddjf.com/static/images/loan-manage/bg_rank_week.webp);
  }
  .rank-c{
    background-image: url(https://cdn.ddjf.com/static/images/loan-manage/bg_rank_month.webp);
  }
  .table{
    flex: 1;
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
     overflow: hidden;
    &-search{
      .ns-search{
        background: #F1F7FE;
        border:none;
        .nut-input{
          background: #F1F7FE;
        }
      }
    }
    &-info{
      flex: 1;
      background: red;
      overflow: hidden;
    }
  }
}
</style>
