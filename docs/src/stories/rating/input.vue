<template>
  <ns-form v-model="formData">
    <ns-row justify="start">
      <ns-rating-input name="rating" label="意向等级" v-model="formData.rating" ruleTrigger="change" :rules="['required', checkNumber]" />
    </ns-row>
    <ns-row justify="start">
      <ns-rating-input disabled name="rating1" label="意向等级" v-model="formData.rating1"/>
    </ns-row>
  </ns-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  rating: 3,
  rating1: 3,
})
const checkNumber = (value: string) => {
  return Number(value) > 0
}
</script>

