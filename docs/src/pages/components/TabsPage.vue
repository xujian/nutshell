<template>
  <h1 class="my-lg">Tabs &lt;ns-table&gt;</h1>
  <h3>基本特性</h3>
  <p>&nbsp;</p>
  <ns-tabs class="normal-tabs"
    v-model="activeTab"
    align="center"
    variant="line"
    @change="onTabsChange">
    <ns-tabs-item key="single">
      <template #tab>
        <ns-row align="center">
          <svg class="icon">
            <use xlink:href="#icon-coffee" href="#icon-coffee" />
          </svg>
          <div>单方签署</div>
        </ns-row>
      </template>
    </ns-tabs-item>
    <ns-tabs-item key="ambi">
      <template #tab>
        <ns-row align="center">
          <svg class="icon">
            <use xlink:href="#icon-coffee" href="#icon-coffee" />
          </svg>
          <div>双方签署</div>
        </ns-row>
      </template>
    </ns-tabs-item>
    <ns-tabs-item key="multiple">
      <template #tab>
        <ns-row align="center">
          <svg class="icon">
            <use xlink:href="#icon-coffee" href="#icon-coffee" />
          </svg>
          <div>多方签署</div>
        </ns-row>
      </template>
    </ns-tabs-item>
  </ns-tabs>
  <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
    <symbol id="icon-coffee" viewBox="0 0 20 20">
      <title>icon-coffee</title>
      <path fill="var(--handle-color)" d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"></path>
      <rect fill="var(--cup-color)" x="1" y="7" width="15" height="12" rx="3" ry="3"></rect>
      <path fill="var(--smoke-color)" d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"></path>
      <path fill="var(--smoke-color)" d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"></path>
      <path fill="var(--smoke-color)" d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"></path>
    </symbol>
  </svg>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const activeTab = ref<string>('single')

const onTabsChange = (value: string) => {
  console.log('OPOPOPOPOPOPOPOPOPOPOPOP', value)
}

onMounted(async () => {
})
</script>

<style lang="scss">
.normal-tabs {
  .icon {
    width: 64px;
    height: 64px;
    margin: 0.5em;
      --handle-color: #a5acbd;
      --cup-color: #a5acbd;
      --smoke-color: #e2e2e2;
  }
  .ant-tabs-tab-active {
    .icon {
      --handle-color: #1f2bac;
      --cup-color: #2f3fff;
      --smoke-color: #7f8aff;
    }
  }
}
</style>