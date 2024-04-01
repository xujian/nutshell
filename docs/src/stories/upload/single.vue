<template>
  <ns-upload v-model="files" :single="true" @complete="onUploadComplete" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const files = ref([
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop'
  }
])
const onUploadComplete = () => {

}
</script>
