<template>
  <ns-page>
    <ns-page-content>
      <h1>列表</h1>
      <div class="caption">&lt;ns-list&gt;</div>
      <p>列表是单栏的数据表示组件。</p>
      <story minimal file="list/basic" />
      <p>&nbsp;</p>
      <h2>带边框、箭头</h2>
      <story minimal file="list/border" />
      <h2>使用 SLOTS</h2>
      <story minimal file="list/slots" />
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
