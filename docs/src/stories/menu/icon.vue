<template>
  <ns-row justify="start">
    <ns-menu :items="items" direction="inline" />
  </ns-row>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

const items = [
  {
    icon: () => h(MailOutlined),
    label: '账户',
    value: 'account',
  },
  {
    label: '选项',
    icon: () => h(AppstoreOutlined),
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
    icon: () => h(SettingOutlined),
    value: 'logout',
  },
  {
    label: '用户手册',
    value: 'help',
  }
]
</script>
