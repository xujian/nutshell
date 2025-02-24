<template>
  <ns-page class="card-page">
    <ns-page-content>
      <h1>卡片</h1>
      <p class="caption">&lt;ns-card&gt;</p>
      <mobile-button url="components/card/card" />
      <p>&nbsp;</p>
      <note>通用卡片容器, 可承载文字、列表、图片、段落</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">卡片分为header、body、footer、bottom四部分组成；支持使用插槽；支持通过变量控制样式</div>
      <story minimal file="card/anatomy" />
      <h2>橱窗</h2>
      <div class="caption">支持下面插槽：corner-标题右侧角标位，header-头部区域，title-标题区域，titleAfter-标题右侧区域，footer-底部区域，bottom-底部说明区域</div>
      <div class="caption" style="margin-top: -10px; margin-bottom: 15px;">padding-控制body区域内边距；foreground-控制文字颜色；stroke：控制边框颜色；tick-控制边框宽度</div>
      <story minimal file="card/showcase" />
      <h2>颜色 Colors</h2>
      <div class="caption">fill属性控制卡片背景色</div>
      <story file="card/colors" />
      <p>&nbsp;</p>
      <h2>渐变 Gradient</h2>
      <div class="caption">gradient属性控制卡片渐变背景色</div>
      <story file="card/gradients" />
      <p>&nbsp;</p>
      <h2>视觉效果</h2>
      <designer v-slot="{props}">
        <ns-card v-bind="props" title="卡片">
          <lorem />
        </ns-card>
      </designer>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, sizes, variants } from '@uxda/nutshell'

const label = '提交'

</script>

<style lang="scss">
.card-page {
  .variants, .colors {
    .ns-card {
      width: 200px;
    }
    .variant-label {
      width: 100px
    }
  }
  .story-card {
    .ns-card {
      min-width: 20%;
    }
  }
}
</style>
