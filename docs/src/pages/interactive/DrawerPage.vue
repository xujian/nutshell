<template>
  <ns-page class="drawer-page">
    <ns-page-content>
      <h1>侧边栏</h1>
      <p class="caption">&lt;ns-drawer&gt;</p>
      <mobile-button url="pages/interactive/drawer" />
      <p>&nbsp;</p>
      <note>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <p class="caption">title - 标题；width - 宽度</p>
      <story file="drawer/basic.vue" />
      <p>&nbsp;</p>
      <h2>使用 SERVICE</h2>
      <p class="caption">$n.drawer(), component属性接收一个子组件，couldClose方法为true时可以关闭弹框，couldComplete方法为true点击确定按钮可关闭弹框</p>
      <story file="drawer/service.vue" />
      <p>&nbsp;</p>
      <h2>使用插槽</h2>
      <p class="caption">可使用footer、title插槽</p>
      <story file="drawer/slot.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>
