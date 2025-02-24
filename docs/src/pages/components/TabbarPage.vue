<template>
  <ns-page class="tabbar-page">
    <ns-page-content>
      <h1>导航栏</h1>
      <p class="caption">&lt;ns-tabbar&gt;</p>
      <mobile-button url="pages/components/tabbar" />
      <p>&nbsp;</p>
      <note>底部导航常用场景</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">v-model绑定当前激活的tabbar，items数组格式为[{name: string, label: string}]</div>
      <story file="tabbar/basic.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
