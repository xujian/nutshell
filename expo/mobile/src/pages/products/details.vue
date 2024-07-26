<template>
  <ns-page class="product-details-page has-page-bottom">
    <ns-page-header
      title="产品"
      gradient="#799f0c,#ffffff33/180"
      has-back-button />
    <div class="cover" :style="coverStyle"></div>
    <ns-page-content class="overlap">
      <ns-card
        :title="`${product?.机构名称} - ${product?.名称}`"
        fill="#ffffff33"
        :blur="10"
        :brightness="1.2"
        body-fill="#CDDC39">
        <ns-number
          :value="product.最快放款时长"
          suffix="天"
          footer="最快放款时长"
          align="start" />
        <ns-chips :options="product?.tags?.map(t => ({value: t, label: t})) || []"
          :blur="0"
          :brightness="1"
          color="primary" />
      </ns-card>
      <ns-card title="业务流程" fill="#ffffff">
        <ul class="procedures row justify-between">
          <li class="item" v-for="(item, index) in product.流程" :key="index">{{ item.label }}</li>
        </ul>
      </ns-card>
      <ns-card title="产品大纲" fill="#ffffff">
        <h4>授信方案</h4>
        <ns-facts>
          <ns-facts-item label="金额范围">100万元</ns-facts-item>
          <ns-facts-item label="期限范围">12</ns-facts-item>
          <ns-facts-item label="还款方式">
            <ns-chips :options="product.还款方式?.map(t => ({value: t, label: t}))"
              variant="soft"
              color="neutral" />
          </ns-facts-item>
        </ns-facts>
        <p>&nbsp;</p>
        <h4>申请条件</h4>
        <ul class="ul-circle">
          <li>年龄 60 岁以下</li>
          <li>名下无其他贷款</li>
        </ul>
        <p>&nbsp;</p>
        <h4>所需材料</h4>
        <ul class="ul-circle">
          <li>身份证</li>
          <li>房产证</li>
          <li>户口本</li>
        </ul>
      </ns-card>
    </ns-page-content>
    <ns-page-bottom fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button
          round
          color="secondary"
          icon="http://simple.shensi.tech/icons/share.svg" />
        <ns-button label="快速进件"
          class="flex-grow"
          round
          color="primary"
          icon="http://simple.shensi.tech/icons/arrow-right.svg"
          icon-position="end"
          icon-fill="#00000088"
          @click="onOrderClick" />
      </div>
    </ns-page-bottom>
  </ns-page>

</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { endpoints, useHttp } from '../../api'
import { Product } from '../../models'
import Taro from '@tarojs/taro'

const $http = useHttp()

const product = ref<Product>({
  id: '2',
  名称: '',
  机构名称: '',
})

const coverStyle = computed(() => ({
  ...product.value ? {
    backgroundImage: `url(${product.value.bannerUrl})`
  } : {}
}))

const onOrderClick = () => {
  Taro.navigateTo({
    url: '/pages/products/order'
  })
}

onMounted(() => {
  $http.get<Product>(endpoints.获取产品详情, {
  }).then((result) => {
    console.log('===product', result)
    product.value = result
  })
})
</script>

<style lang="scss">
.product-details-page {
  .cover {
    aspect-ratio: 1;
    background-position: center;
    background-size: cover;
  }
  .ns-card {
    margin-bottom: var(--ns-spacing);
  }
  .procedures {
    .item {
      padding: var(--ns-spacing);
      text-align: center;
      border-radius: 10px;
      background-color: var(--ns-primary--20);
      color: #fff;
      position: relative;
      &::after {
        content: '➔';
        font-size: 16px;
        position: absolute;
        right: -30px;
        color: #999;
      }
      &:last-child::after {
        content: ''
      }
    }
  }
}
</style>
