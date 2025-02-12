<template>
  <ns-page class="date-input-page" fill="neutral">
    <ns-page-header title="日期输入框"
      caption="<ns-time-input>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form v-model="formData">
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
})
</script>

<style lang="scss">

</style>

