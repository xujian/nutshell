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
        <div class="table-info">
          333
        </div>
      </div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

interface pageDataType{
  key: string
  buttonName: string
  title: string
  time: string
  data: any
}
interface optionType{
  value: string
  label: string
}

const tab = ref<string>('a')
const tabs = ref<optionType[]>([])
const pageData = ref<pageDataType[]>([
  {
    key: 'a',
    buttonName: '经营单位',
    time: '2020-10-10',
    title: '经营单位榜',
    data: []
  },
  {
    key: 'b',
    buttonName: '合作商',
    time: '2020-02-10',
    title: '合作商榜',
    data: []
  },
  {
    key: 'c',
    buttonName: '个人',
    time: '2010-01-02',
    title: '个人榜',
    data: []
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
    &-search{
      .ns-search{
        background: #F1F7FE;
        border:none;
        .nut-input{
          background: #F1F7FE;
        }
      }
    }
  }
}
</style>
