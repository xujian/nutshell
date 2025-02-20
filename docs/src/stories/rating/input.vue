<template>
  <ns-row justify="start">
    <ns-rating-input name="rating" label="意向等级" v-model="formData.rating" :rules="['required']" />
  </ns-row>
  <ns-row justify="start">
    <ns-rating-input disabled name="rating" label="意向等级" v-model="formData.rating" :rules="['required']" />
  </ns-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  rating: 3,
})
</script>

