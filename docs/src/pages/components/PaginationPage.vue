

<template>
  <ns-page class="button-page">
    <ns-page-content>
      <h1>分页</h1>
      <p class="caption">&lt;ns-pagination&gt;</p>
      <p>&nbsp;</p>
      <note>采用分页的形式分隔长列表，每次只加载一个页面</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">current - 当前页码；pageSize - 每页的数量；total - 数量合计</div>
      <story file="pagination/basic" />
      <p>&nbsp;</p>
      <h2>快速跳转至某页</h2>
      <div class="caption">jumpable=false，可关闭快速跳转至某页；disabled - 禁用分页按钮</div>
      <story file="pagination/jumpable" />
      <h2>自定义每页数量</h2>
      <div class="caption">pageSizeOptions - 自定义每页数量</div>
      <story file="pagination/options" />
    </ns-page-content>
  </ns-page>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.switch-page {
}
</style>
