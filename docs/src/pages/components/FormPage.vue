<template>
  <ns-page class="form-page">
    <ns-page-content>
      <h1 class="my-lg">表单</h1>
      <p class="caption">&lt;ns-form&gt;</p>
      <mobile-button url="pages/components/form" />
      <p>&nbsp;</p>
      <note>表单控件，自带数据域管理。包含数据录入、校验以及对应样式</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <div class="caption">与ant-design-vue类似ns-form组件需要接收数据模型，子组件需定义name/label/rules等属性</div>
      <story file="form/regular" />
      <p>&nbsp;</p>
      <h2>用户输入校验</h2>
      <div class="caption">点击按钮校验需调用validate方法，如: formRef.value.validate()；点击按钮重置校验需调用resetFields方法，如：formRef.value.resetFields()</div>
      <story file="form/validate" />
      <p>&nbsp;</p>
      <h2>自定义校验方法</h2>
      <div class="caption">rules属性可以接收自定义的方法，方法return true则校验通过</div>
      <story file="form/custom-validate" />
      <p>&nbsp;</p>
      <h2>多行输入框</h2>
      <div class="caption">表单项可使用label/append/prepend等插槽</div>
      <story file="form/textarea" />
      <p>&nbsp;</p>
      <h2>输入框组合</h2>
      <story file="form/input-group" />
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
