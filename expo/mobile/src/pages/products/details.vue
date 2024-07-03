<template>
  <ns-page class="product-details-page has-page-bottom">
    <div class="cover" :style="coverStyle"></div>
    <div class="page-content overlap">
      <ns-card
        :title="`${product?.机构名称} - ${product?.名称}`"
        fill="#ffffff33"
        :blur="20"
        :brightness="2">
        <ns-number
          :value="product.最快放款时长"
          suffix="天"
          footer="最快放款时长"
          align="start"
          :style="{'--padding': 0}" />
        <ns-chips :options="product?.tags?.map(t => ({value: t, label: t})) || []" color="primary" />
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
        <ul>
          <li>年龄 60 岁以下</li>
          <li>名下无其他贷款</li>
        </ul>
      </ns-card>
    </div>
    <ns-page-bottom>
      <ns-button label="提交申请"
        round
        size="lg"
        color="primary"
        class="full-width" />
    </ns-page-bottom>
  </ns-page>

</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { endpoints, useHttp } from '../../api'
import { Product } from '../../models'

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
