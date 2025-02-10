<template>
  <ns-page class="chip-page">
    <ns-page-content>
      <h1 class="my-lg">标签</h1>
      <p class="caption">&lt;ns-chip&gt;</p>
      <mobile-button url="pages/components/chip/chip" />
      <p>&nbsp;</p>
      <note>进行标记和分类的小标签。</note>
      <p>&nbsp;</p>
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-chip
          label="已批复"
          :color="color" />
      </color-cases>
      <p>&nbsp;</p>
      <h2>图标 Icon</h2>
      <story file="chip/icon.vue" />
      <h2>圆角 R</h2>
      <story file="chip/radius.vue" />
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}" class="column">
        <ns-chip
          v-for="color in brands"
          :key="variant"
          :fill="color"
          label="已批复"
          :variant="variant" />
      </variant-cases>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <h2>Chips</h2>
      <div class="caption">可以用 :items 输出标签</div>
      <story file="chip/basic.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, sizes, variants } from '@uxda/nutshell'

const label = '标签'

</script>

<style lang="scss">
.variants, .colors, .sizes {
  .ns-chip {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
