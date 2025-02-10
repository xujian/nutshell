<template>
  <ns-page class="icon-page">
    <ns-page-content>
      <h1 class="my-lg">图标</h1>
      <p class="caption">&lt;ns-icon&gt;</p>
      <mobile-button url="pages/components/icon" />
      <p>&nbsp;</p>
      <note>语义化的矢量图形</note>
      <p>&nbsp;</p>
      <ns-card fill="#e7fe55">
        <code-view :code="samples[0]"></code-view>
        <p class="caption">最简化的用法，只需要提供 name 属性</p>
        <p>&nbsp;</p>
        <code-view :code="samples[1]"></code-view>
        <p class="caption">最简化的用法，只需要提供 name 属性</p>
        <p>&nbsp;</p>
        <ns-facts direction="column">
          <ns-facts-item label="font">
            CSS @font 字体
          </ns-facts-item>
          <ns-facts-item label="sprite">
            <p>SVG Sprite</p>
            <p class="caption">图标集中于 <a href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/">SVG Sprite</a>, 用 &lt;use&gt; 方式使用 </p>
          </ns-facts-item>
          <ns-facts-item label="svg">
            <p>使用单独的 SVG 文件</p>
          </ns-facts-item>
          <ns-facts-item label="image">
            使用图片
          </ns-facts-item>
        </ns-facts>
      </ns-card>
      <p>&nbsp;</p>
      <h2>缺省用法</h2>
      <p class="caption">format="sprite"</p>
      <p>&nbsp;</p>
      <story file="icon/sprite" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>SVG</h2>
      <p class="caption">format="svg"</p>
      <p>&nbsp;</p>
      <story file="icon/svg" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>直接使用图片</h2>
      <p class="caption">图片以 http:或 / 开头时, 可省略 format="image"</p>
      <p>&nbsp;</p>
      <story file="icon/image" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const samples = [
  `<ns-icon name="account" />`,
  `<ns-icon format="svg" name="account" />`,
]
</script>

<style lang="scss">
</style>
