<template>
  <div class="page card-page">
    <h1 class="my-lg">提示 v-tooltip</h1>
    <ns-button label="保存草稿" color="primary" v-tooltip="{
      content: '草稿需要发布才生效'
    }" />
  </div>
</template>
