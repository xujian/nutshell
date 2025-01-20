<template>
  <ns-row justify="start">
    <ns-menu :items="items" />
  </ns-row>
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
