<template>
  <ns-page class="tabs-page">
    <ns-page-content>
      <h1>选项卡</h1>
      <p class="caption">&lt;ns-tabs&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>常用于平级区域大块内容的的收纳和展现</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">ns-tabs与ns-tabs-item配合使用，v-model绑定当前激活的tab</div>
      <story file="tabs/use-slots" />
      <p>&nbsp;</p>
      <h2>使用 ITEMS</h2>
      <story file="tabs/use-items" />
      <p>&nbsp;</p>
      <h2>使用(SVG)图标</h2>
      <div class="caption">ns-tabs-item中的tab支持插槽形式，搭配svg标签实现svg图片使用</div>
      <story file="tabs/icon" />
    </ns-page-content>
  </ns-page>
</template>

