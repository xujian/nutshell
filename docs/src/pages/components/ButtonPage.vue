<template>
  <ns-page class="button-page">
    <ns-page-content>
      <h1>按钮</h1>
      <p class="caption">&lt;ns-button&gt;</p>
      <mobile-button url="pages/components/button" />
      <p>&nbsp;</p>
      <note>按钮用于触发一个操作，如提交表单。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="button/basic.vue" />
      <!--panel file="forms/tasks.vue" /-->
      <!--board file="contracts/query.vue" /-->
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{size}">
        <ns-button color="primary"
          class="with-measure measure-height"
          :size label="确定" />
      </size-cases>
      <p>&nbsp;</p>
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-button
          :color="color"
          label="确定" />
      </color-cases>
      <p>&nbsp;</p>
      <h2>变体 Variant</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-button v-for="(color) in brands" class="my-xs"
          :key="color"
          :color="color"
          :variant="variant" label="创建订单"></ns-button>
      </variant-cases>
      <p>&nbsp;</p>
      <h2>形状 shape</h2>
      <story file="button/shapes.vue" />
      <p>&nbsp;</p>
      <h2>图标 icon</h2>
      <div class="caption">图标可前置及后置</div>
      <story file="button/icon.vue" />
      <p>&nbsp;</p>
      <h2>等待状态 loading</h2>
      <div class="caption">执行长任务时</div>
      <story file="button/loading.vue" />
      <p>&nbsp;</p>
      <h2>视觉效果 gradient</h2>
      <div class="caption">自定义填色及渐变效果</div>
      <story file="button/design.vue" />
      <p>&nbsp;</p>
      <h2>用在 &lt;ns-card&gt; 内</h2>
      <div class="caption">自定义填色及渐变效果</div>
      <story file="button/card.vue" />
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
  .variant-cases {
    .ns-button {
      width: 82px;
    }
  }
}
</style>
