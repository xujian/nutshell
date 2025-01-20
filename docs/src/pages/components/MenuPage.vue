<template>
  <ns-page class="menu-page">
    <ns-page-content>
      <h1>选单</h1>
      <p class="caption">&lt;ns-menu&gt;</p>
      <p>&nbsp;</p>
      <note>为页面和功能提供导航的菜单列表。</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="menu/basic" />
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-menu :items="items" :fill="color" />
      </color-cases>
      <h2>方向 Direction</h2>
      <div class="case-list direction-cases flex">
        <div class="item flex align-center justify-center"
          v-for="direction in directions"
          :key="direction"
          :class="[direction]">
          <h6 class="title">direction="<span class="b">{{ direction }}</span>"</h6>
          <ns-menu :items="items" :direction="direction" />
        </div>
      </div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const directions = ['inline', 'vertical', 'horizontal']

const items = [
  {
    label: '账户',
    value: 'account',
  },
  {
    label: '选项',
    value: 'settings',
    children: [
      {
        label: '色彩模式',
        value: 'theme',
      },
      {
        label: '语言',
        value: 'language'
      }
    ]
  },
  {
    label: '退出登录',
    value: 'logout',
  },
  {
    label: '用户手册',
    value: 'help',
  }
]
</script>

<style lang="scss">
.menu-page {
  .case-list {
    .item {
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding-left: 30px;
    }
    .title {
      position: relative;
      top: 0;
      left: 0;
      margin-bottom: 15px;
    }
  }

  .direction-cases {
    width: 100%;
    .item {
      min-height: 220px;
    }
  }
}
</style>
