<template>
  <ns-row justify="start">
    <ns-button label="保存草稿" color="primary" v-tooltip="{
      content: '草稿需要发布才生效'
    }" />
  </ns-row>
  <ns-row justify="start" style="margin-top: 10px;">
    <ns-chip variant="outlined" label="客户标签" v-tooltip="'客户标签的筛选值取自最新的建档配置，修改或删除的标签暂无法筛选'" />
  </ns-row>
</template>
