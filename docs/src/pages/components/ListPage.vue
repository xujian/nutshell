<template>
  <ns-page>
    <ns-page-content>
      <h1>列表</h1>
      <p class="caption">&lt;ns-list&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>列表是单栏的数据表示组件。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">data - 列表项，格式为[{title: string, caption: string}]；hasNumbers - 是否有数字排序；title - 列表的标题</div>
      <story file="list/basic" />
      <p>&nbsp;</p>
      <h2>带边框、箭头</h2>
      <div class="caption">hasArrows - 是否带箭头；variant=outlined出现边框</div>
      <story file="list/border" />
      <h2>使用 SLOTS</h2>
      <div class="caption">prepend - 前缀插槽，可自定义图片；append - 后缀插槽</div>
      <story file="list/slots" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
