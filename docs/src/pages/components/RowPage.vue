<template>
  <ns-page class="row-page">
    <ns-page-content>
      <h1>横向排列</h1>
      <mobile-button url="pages/components/row" />
      <p>&nbsp;</p>
      <note>栅格化布局系统中的行排版</note>
      <p>&nbsp;</p>
      <story minimal file="row/basic" />
      <p class="caption">当需要在一个区域内排列组件时可使用 &lt;ns-row&gt;</p>
      <h2>关键属性</h2>
      <ns-facts direction="column">
        <ns-facts-item label="justify">横向(主轴)对齐</ns-facts-item>
        <ns-facts-item label="align">纵向(副轴)对齐</ns-facts-item>
        <ns-facts-item label="gap">间隔</ns-facts-item>
      </ns-facts>
    </ns-page-content>
  </ns-page>
</template>

<style scoped lang="scss">
.menu-page {
}
</style>
