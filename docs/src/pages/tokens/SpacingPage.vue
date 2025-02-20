<template>
  <ns-page class="spacing-page">
    <ns-page-content>
      <h1>间距</h1>
      <p class="caption">Spacing</p>
      <mobile-button url="pages/tokens/spacing" />
      <h2>标准间距</h2>
      <p class="caption">在总控样式下, 组件之间的间距统一调节, 不需要写本地样式</p>
      <story minimal file="spacing/basic" />

      <p>&nbsp;</p>
      <h2>可调间距</h2>
      <story file="row/gap" />
      <p>&nbsp;</p>
      <h2>间距的产生</h2>
      <ns-facts direction="column" class="full-width">
        <ns-facts-item label="自然间距">
          <ol>
            <li>文本标题(h1-h4)强制带有垂直外边距(margin)</li>
          </ol>
        </ns-facts-item>
        <ns-facts-item label="使用属性调节间距">

        </ns-facts-item>
        <ns-facts-item label="使用 FLEX GAP">

        </ns-facts-item>
      </ns-facts>
    </ns-page-content>
  </ns-page>
</template>

<style lang="scss">
</style>
