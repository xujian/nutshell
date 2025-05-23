<template>
  <ns-page class="products-page">
    <ns-page-header fill="#ffffff99" :blur="10" :shadow="10" title="产品" />
    <ns-page-content>
      <ns-search placeholder="产品名称" fill="#fff" />
      <ns-tabs :items="tabs" fill="#ffffff33" :blur="10" class="my-md" />
      <ns-repeator :data="products"
        align="stretch"
        direction="column"
        v-slot="item"
        :gap="10"
        class="my-md">
        <ns-card fill="#fff" @click="() => onItemClick(item)">
          <h5 class="b">{{item.机构名称}} - {{item.名称}}</h5>
          <ns-chips :options="item.tags.map(t => ({ value: t, label: t }))" color="primary" />
          <div class="row rates">
            <ns-number header="最低年利率"
              size="sm"
              :value="item.最低年利率" suffix="%" />
            <ns-number header="最低月利率"
              size="sm"
              :value="item.最低月利率" suffix="%" />
            <ns-number header="最低日年利率"
              size="sm"
              :value="item.最低日利率" suffix="%" />
          </div>
        </ns-card>
      </ns-repeator>
    </ns-page-content>
  </ns-page>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useNutshell, WithPaging } from '@uxda/nutshell/taro'
import { endpoints, useHttp } from '../../api'
import { Product } from '../../models'
import Taro from '@tarojs/taro'
import { useTabbar } from '@uxda/appkit'

const $http = useHttp(),
  $n = useNutshell()

const tabs = [
  {
    label: '全部',
    value: '0'
  },
  {
    label: '抵押类',
    value: '1'
  },
  {
    label: '信用类',
    value: '2'
  },
]

const products = ref<Product[]>([])

const onItemClick = (item: Product) => {
  Taro.navigateTo({
    url: '/pages/products/details'
  })
}

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('products')
  $http.get<WithPaging<Product[]>>(endpoints.获取产品列表, {
    page: 1
  }).then((result) => {
    products.value = result.data
  })
})
</script>

<style lang="scss">
.products-page {
  background-color: var(--ns-neutral);
  h5 {
    font-size: 14px;
    color: var(--ns-primary);
  }
  .bg-white {
    background-color: #fff;
    padding: 5px 0;
  }
  .ns-tabs {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .rates {
    .ns-number {
      width: 33%;
    }
  }
  .ns-chips {
    margin-top: .5em;
  }
}
</style>
