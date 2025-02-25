<template>
  <ns-page class="menu-page" fill="neutral">
    <ns-page-header
      title="菜单"
      fill="#ffffff88"
      caption="<ns-menu>"
      :blur="40" reveal has-back-button />
    <ns-page-content>
      <ns-row justify="center">
        <ns-menu
          :items />
      </ns-row>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
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

</style>

