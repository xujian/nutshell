<template>
  <ns-page class="input-page">
    <ns-page-header title="文件表"
      caption="<ns-files>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h2>基础用法</h2>
      <ns-card fill="#fff" title="文件表" class="files-card">
        <ns-files :items="filesItems"/>
      </ns-card>
      <h2>支持下载</h2>
      <ns-card fill="#fff" title="文件表" class="files-card">
        <ns-files :items="filesItems" downloadable/>
      </ns-card>
      <h2>支持删除</h2>
      <ns-card fill="#fff" title="文件表" class="files-card">
        <ns-files :items="filesItems" deletable/>
      </ns-card>
  </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

const filesItems = [
  {
    id: '65d6e700febeec0001323135',
    name: '方案.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e700febeec0001323135.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=%2FHcsmP4u5Q77DGv2t%2B9EvBxrqIg%3D',
  },
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop'
  },
]

const codes = []
</script>

<style lang="scss">
</style>

