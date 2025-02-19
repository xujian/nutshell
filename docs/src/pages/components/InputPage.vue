<template>
  <ns-page>
    <ns-page-content>
      <h1 class="my-lg">文本输入框</h1>
      <p class="caption">&lt;ns-input&gt;</p>
      <mobile-button url="pages/components/input/input" />
      <p>&nbsp;</p>
      <note>通过鼠标或键盘输入内容，是最基础的表单域的包装</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="input/basic.vue" />
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}">
        <ns-input
          name="input"
          color="'primary'"
          placeholder="请输入订单编号"
          :variant="variant" label="创建订单" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>长度与不可清除输入内容</h2>
      <div class="caption">不可清除输入 - clearable设为false；长度限制 - 如maxlength=50；展示输入字数 - hasCount需设为true；禁用输入框 - disabled需设为true</div>
      <story file="input/disable.vue" />
      <p>&nbsp;</p>
      <h2>数字输入框</h2>
      <div class="caption">hasDaxie - 是否显示中文金额；step - 增减的步数；maximumFractionDigits - 最多小数位；formatter - 自定义格式</div>
      <div class="caption">数字区间组件&lt;ns-number-range-input&gt;</div>
      <story file="input/number" />
      <p>&nbsp;</p>
      <h2>身份证输入框</h2>
      <div class="caption">ns-id-input, 格式不对会自动检验</div>
      <story file="input/id" />
      <p>&nbsp;</p>
      <h2>手机号输入框</h2>
      <div class="caption">ns-mobile-input, 格式不对会自动检验</div>
      <story file="input/mobile" />
      <p>&nbsp;</p>
      <h2>搜索框</h2>
      <div class="caption">ns-search</div>
      <story file="input/search" />
      <p>&nbsp;</p>
      <h2>使用 SLOTS</h2>
      <div class="caption">前缀prepend/后缀append</div>
      <p>&nbsp;</p>
      <story file="input/slots" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands, variants } from '@uxda/nutshell'

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
