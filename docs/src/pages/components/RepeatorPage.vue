<template>
  <ns-page class="repeator-page">
    <ns-page-content>
      <h1>连续平铺</h1>
      <p class="caption">&lt;ns-repeator&gt;</p>
      <mobile-button url="pages/components/repeator/repeator" />
      <p>&nbsp;</p>
      <note>统一风格的列表卡片展示，v-for的简化</note>
      <p>&nbsp;</p>
      <h2>基本特性</h2>
      <div class="caption">items - 平铺项的数据(数组)；gap - 控制间隙；wrap - 是否可换行</div>
      <story file="repeator/basic" />
      <p>&nbsp;</p>
      <h2>使用 devides 控制网格</h2>
      <div class="caption">divides - 控制每行的数量，最后一行铺满</div>
      <story file="repeator/basic-devides" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.demo-repeator {
  width: 100%;
  .repeator-card {
    color: #ffffff;
  }
}
</style>
