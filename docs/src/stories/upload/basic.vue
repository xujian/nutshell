<template>
  <ns-upload v-model="files" caption="支持格式 png/jpg/jpeg/pdf" @complete="onUploadComplete" @delete="onUploadDelete"  @download="onUploadDownload" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()
const files = ref([
  {
    id: '65d6e700febeec0001323135',
    name: '方案.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e700febeec0001323135.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=%2FHcsmP4u5Q77DGv2t%2B9EvBxrqIg%3D',
  },
  {
    id: '65d6e705febeec0001323136',
    name: 'cab367f61edfee609b0e2b2a1dddfdb4.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e705febeec0001323136.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=JHvj12S9%2FpXwsfPDMHsW6T5G%2FDY%3D',
  },
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop'
  },
  {
    id: '65d6e705febeec0001323139',
    name: '1653152566529.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1653152566529-c3b44fd5efea',
    thumb: 'https://images.unsplash.com/photo-1653152566529-c3b44fd5efea?q=80&w=480&auto=format&fit=crop'
  }
])
const onUploadComplete = () => {
  console.log('upload complete')
}

const onUploadDelete = () => {
  $n.toast('删除成功，这里写删除请求', {})
}

const onUploadDownload = () => {
  $n.toast('下载成功，这里写下载请求', {})
}
</script>
