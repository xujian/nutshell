<template>
  <ns-page class="products-page">
    <ns-card fill="#fff">
      <h3 class="b">天地会 - 没钱贷</h3>
    </ns-card>
  </ns-page>

</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { endpoints, useHttp } from '../../api'
import { Product } from '../../models'

const $http = useHttp()

const product = ref<Product>()

onMounted(() => {
  $http.get<Product>(endpoints.获取产品详情, {
  }).then((result) => {
    product.value = result
  })
})
</script>

<style lang="scss">
.products-page {
}
</style>
