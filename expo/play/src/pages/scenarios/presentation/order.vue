<template>
  <ns-page class="create-contact-page">
    <ns-page-header fill='#fff' title="订单详情" has-back-button reveal :blur="10">
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
      <template v-if="activeTab==='detail'">
        我是详情
      </template>
      <template v-if="activeTab==='file'">
        <ns-card fill="#fff" class="mb-md material-box" v-for="item in files" :key="item">
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
    <ns-page-footer fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button
        v-for="item in buttons"
        :key="item"
        style="flex: 1"
        size= 'lg'
        :loading="item.loading"
        @click="item.handle(item)"
        v-bind="item.attr">
          {{ item.buttonName }}
          <ns-popover fill="#fff" v-if="item.buttonKey === 'more'">
            <ns-menu fill="transparent" :items="commands" />
          </ns-popover>
        </ns-button>
      </div>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell/taro';
import { computed, ref } from 'vue';
import { OrderFooterButtonType } from './types';

const $n = useNutshell()
const activeTab = ref<string>('detail')
const isFlowOrder = ref<boolean>(false)
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

const commands = [
  { label: '派单', name: 'cancel' },
  { label: '终止订单', name: 'postpone' },
]
const buttons = computed(()=>{
  return ref([
    {
      attr: { variant: 'outlined'},
      buttonName: '更多',
      buttonKey: 'more',
      loading: false,
      handle: () => {}
    },
    {
      attr: { variant: 'outlined', color: 'primary'},
      buttonName: '订单刷新',
      buttonKey: 'refresh',
      loading: false,
      handle: (item: OrderFooterButtonType) => {
        item.loading = true
        setTimeout(()=>{
          $n.toast('刷新成功', { duration: 1000})
          item.loading = false
        }, 1000)
      }
    },
    {
      attr: { color: 'primary'},
      buttonName: isFlowOrder.value ? '取消跟单' : '跟单',
      buttonKey: 'flow',
      loading: false,
      handle: (item: OrderFooterButtonType) => {
        item.loading = true
        setTimeout(()=>{
          isFlowOrder.value = !isFlowOrder.value
          $n.toast('操作成功', { duration: 1000})
          item.loading = false
        }, 1000)
      }
    }
  ]).value
})

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
</style>
