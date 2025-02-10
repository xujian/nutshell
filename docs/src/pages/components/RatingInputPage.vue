<template>
  <ns-page class="rating-input-page">
    <ns-page-content>
      <h1>星星输入框</h1>
      <p class="caption">&lt;ns-rating-input&gt;</p>
      <mobile-button url="pages/components/rating" />
      <p>&nbsp;</p>
      <note>对评级进行展示与操作</note>
      <p>&nbsp;</p>
      <h2>变体 Variant</h2>
      <color-cases direction="column" v-slot="{color}">
        <ns-rating-input name="rating" label="客户等级"
          v-model="rating"
          :color
          :rules="['required']" />
      </color-cases>
      <p>&nbsp;</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const rating = ref(0)
</script>

<style lang="scss">

</style>
