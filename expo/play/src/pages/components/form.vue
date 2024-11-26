<template>
  <ns-page class="form-page">
    <ns-page-header title="表单"
      caption="<ns-form>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h3>数字输入框</h3>
      <ns-card fill="#fff">
        <ns-form v-model="formData">
          <ns-number-input
            v-model="formData.count"
            name="count"
            :min="90"
            :max="110"
            label="最大数量" />
        </ns-form>
      </ns-card>

    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  count: 100
})
</script>

