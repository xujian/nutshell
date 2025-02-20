<template>
  <ns-page class="upload-page">
    <ns-page-header title="文件上传" caption="<ns-upload>" fill="#ffffff88" :blur="40" has-back-button />
    <ns-page-content>
      <ns-form :model="formData">
        <ns-card fill="#ffffff" shadow>
          <ns-upload name="logo" label="企业LOGO" :rules="['required']" v-model="formData.logo" :handler="uploadHandler"
            preview-mode="circle" />
        </ns-card>
      </ns-form>
      <code-view language="html" :code="codes[0]" />
      <code-view language="javascript" :code="codes[1]" />
      <callout>
        <p>&lt;ns-upload&gt;使用的 modelValue 为表示上传文件的数组</p>
      </callout>
      <h2>上传模式</h2>
      <ns-card fill="#ffffff" shadow>
        <ns-form :model="formData">
          <ns-upload name="photos" label="生活照" multiple :rules="['required']" v-model="formData.photos"
            :handler="uploadHandler" preview-mode="circle" />
        </ns-form>
      </ns-card>
      <h2>关键属性</h2>
      <props-table :data="keyProps" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Media } from '@uxda/nutshell/taro'
import { useUpload } from '@uxda/appkit'

const formData = reactive<{
  logo: Media[],
  photos: Media[],
}>({
  logo: [],
  photos: [
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
  ],
})

const { upload } = useUpload({
  baseUrl: 'http://upload.acme.com',
})

const uploadHandler = async (file: Media) => {
  return upload('upload', file)
}

const keyProps = [
  {
    name: 'name',
    description: '上传字段名',
    type: 'string',
    default: 'file'
  },
  {
    name: 'label',
    description: '上传按钮文案',
    type: 'string',
    default: ''
  },
  {
    name: 'rules',
    description: '校验规则',
    type: 'string[]',
    default: '[]'
  },
  {
    name: 'preview-mode',
    description: '预览模式',
    type: 'square | circle',
    default: 'square'
  },
  {
    name: 'multiple',
    description: '是否支持多选',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'v-model',
    description: '绑定值',
    type: 'Media[]',
    default: '-'
  },
  {
    name: 'handler',
    description: '上传处理函数',
    type: 'Function',
    default: '-'
  },
]

const codes = [
  `<ns-form :model="formData">
  <ns-upload
    name="logo"
    label="企业LOGO"
    :rules="['required']"
    v-model="formData.logo"
    :handler="uploadHandler"
    preview-mode="circle" />
</ns-form>`,
  `import { Media } from '@uxda/nutshell/taro'
import { useUpload } from '@uxda/appkit'
const formData = reactive<{
  logo: Media[]
}>({
  logo: [],
})
const { upload } = useUpload({
  baseUrl: 'http://service.acme.com',
})
const uploadHandler = async (file: Media) => {
  return upload('/upload', file)
}`
]
</script>
