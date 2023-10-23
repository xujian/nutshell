<template>
  <h1 class="my-lg">星星输入框 &lt;ns-rating-input&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <ns-form>
    <ns-col class="variants" v-for="(variant) in variants" align="center" :key="variant">
      <h4 class="variant-label">{{ variant }}</h4>
      <ns-rating-input name="registerDate" label="客户等级"
        v-model="rating"
        :variant="variant"
        :rules="['required']" />
    </ns-col>
  </ns-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { variants } from '../../props'

const rating = ref(0)
</script>

<style lang="scss">

</style>