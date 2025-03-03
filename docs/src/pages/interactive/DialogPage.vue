<template>
  <ns-page class="dialog-page">
    <ns-page-content>
      <h1>弹窗</h1>
      <p class="caption">&lt;ns-dialog&gt;</p>
      <mobile-button url="pages/interactive/dialog" />
      <p>&nbsp;</p>
      <note>模态对话框，在浮层中显示，引导用户进行相关操作</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p class="caption">&lt;ns-dialog&gt;</p>
      <p class="caption" style="margin-top: -15px; margin-bottom: 10px;">title - 标题；centerd - 弹框是否屏幕中央显示；closable - 是否有关闭按钮；@ok - 成功事件；@hide - 取消事件</p>
      <story file="dialog/static" />
      <p>&nbsp;</p>
      <h2>使用 SERVICE</h2>
      <p class="caption">$n.dialog()</p>
      <p class="caption" style="margin-top: -15px; margin-bottom: 10px;">title - 标题；message - 弹框内容；onOk - 成功事件；onHide - 取消事件；footer - 是否显示底部；cancelText - 取消按钮文案，为空则不显示</p>
      <story file="dialog/basic" />
      <p>&nbsp;</p>
      <h2>弹出子界面</h2>
      <p class="caption">$n.dialog的component属性接收一个子组件，couldClose方法为true时可以关闭弹框，couldComplete方法为true点击确定按钮可关闭弹框</p>
      <story file="dialog/component" />
      <p>&nbsp;</p>
      <h2>自定义 footer </h2>
      <story file="dialog/slot" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
