<template>
  <ns-page class="create-contact-page">
    <ns-page-header fill='#fff' title="影像资料" has-back-button reveal :blur="10">
      <ns-tabs
        class="tab-header"
        size="lg"
        v-model="activeTab"
        fill="#fff"
        :items="items"
        variant="line"
        @change="tabChange">
      </ns-tabs>
    </ns-page-header>
    <ns-page-content>
      <template v-if="activeTab==='file'">
        <ns-card fill="#fff" class="mb-md" v-for="item in files" :key="item">
          <h4>{{item.name}}</h4>
          <ns-plank :key="it" v-for="it in item.children" :title="`${it.name}(${it.count})`">
            <template #content>
              <div class="icon-list">
                <ns-icon name="https://cdn.ddjf.com/static/images/risk_manage/camera_m.png"></ns-icon>
                <ns-icon name="https://cdn.ddjf.com/static/images/risk_manage/files.png"></ns-icon>
                <ns-icon name="https://cdn.ddjf.com/static/images/risk_manage/photo_m.png"></ns-icon>
              </div>
            </template>
          </ns-plank>
        </ns-card>
    </template>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const files = [
  {
    name: '原贷款资料',
    children: [
      {
        name: '原贷款合同',
        count: 0
      },
      {
        name: '原贷款还款记录',
        count: 0
      }
    ]
  },
  {
    name: '账户资料',
    children: [
      {
        name: '赎楼账户',
        count: 3
      },
      {
        name: '赎楼周转账户',
        count: 0
      }
    ]
  }
]

const activeTab = ref<string>('file')
const items = [
  {
    value: 'detail',
    label: '订单详情',
  },
  {
    value: 'flow',
    label: '流程备注',
  },
  {
    value: 'file',
    label: '影像资料',
  }
]
function tabChange({paneKey}){
  activeTab.value = paneKey
}
</script>

<style lang="scss">
.tab-header{
  .nut-tabs__list{
    display: flex;
    .nut-tabs__titles-item{
      flex: 1 !important;
    }
    .nut-tabs__titles-placeholder{
      min-width: 0 !important;
    }
  }
}
.icon-list{
  display: flex;
  justify-content: right;
  .ns-icon{
    margin-left: 8px;
  }
}
</style>
