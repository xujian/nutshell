<template>
  <ns-page class="upload-page" fill="neutral">
    <ns-page-header title="上传" has-back-button />
    <ns-page-content>
      <h2>上传企业认证资料</h2>
      <ns-row justify="center">
        <ns-upload-button class="upload-button" :handler/>
      </ns-row>
      <h2>已上传资料 ({{ files.length }})</h2>
      <ns-files :data="files" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Media } from '@uxda/nutshell/taro'

const files = ref<Media[]>([
  {
    id: '65d6e705febeec0001323137',
    name: 'laundry.jpg',
    type: 'image',
    url: 'https://simple.shensi.tech/upload/laundry.jpg',
    thumb: 'https://simple.shensi.tech/upload/laundry.jpg',
  },
  {
    id: '65d6e705febeec0001323138',
    name: 'flowers.jpg',
    type: 'image',
    url: 'https://simple.shensi.tech/upload/flowers.jpg',
    thumb: 'https://simple.shensi.tech/upload/flowers.jpg',
  }
])

const handler = async (file: Media) => {
  console.log(file)
}

const openUpload = () => {
  console.log('上传')
}
</script>

<style lang="scss">
.upload-page {
  .upload-button {
    width: 240px;
  }
}
</style>
