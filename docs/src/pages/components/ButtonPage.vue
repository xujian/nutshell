<template>
  <ns-page class="button-page">
    <ns-page-content>
      <h1>按钮</h1>
      <p class="caption">&lt;ns-button&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>按钮</note>
      <p>&nbsp;</p>
      <story minimal file="button/basic.vue" />
      <p>用来替换标准的 HTML 按钮</p>
      <!--panel file="forms/tasks.vue" /-->
      <!--board file="contracts/query.vue" /-->
      <p>&nbsp;</p>
      <h2>Size</h2>
      <size-cases v-slot="{size}">
        <ns-button color="primary"
          class="with-measure measure-height"
          :size label="确定" />
      </size-cases>
      <p>&nbsp;</p>
      <h2>Color</h2>
      <color-cases v-slot="{color}">
        <ns-button
          :color="color"
          label="确定" />
      </color-cases>
      <p>&nbsp;</p>
      <h2>Variants</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-button v-for="(color) in brands" class="my-xs"
          :key="color"
          :color="color"
          :variant="variant" label="创建订单"></ns-button>
      </variant-cases>
      <p>&nbsp;</p>
      <h2>形状</h2>
      <story minimal file="button/shapes.vue" />
      <p>&nbsp;</p>
      <h2>图标</h2>
      <div class="caption">图标可前置及后置</div>
      <story minimal file="button/icon.vue" />
      <p>&nbsp;</p>
      <h2>等待状态</h2>
      <div class="caption">执行长任务时</div>
      <story minimal file="button/loading.vue" />
      <p>&nbsp;</p>
      <h2>视觉效果</h2>
      <div class="caption">自定义填色及渐变效果</div>
      <story minimal file="button/design.vue" />
      <p>&nbsp;</p>
      <h2>用在 &lt;ns-card&gt; 内</h2>
      <div class="caption">自定义填色及渐变效果</div>
      <story minimal file="button/card.vue" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell'
import { MobileMockup } from '@/components'

</script>

<style lang="scss">
.button-page {
}
</style>
