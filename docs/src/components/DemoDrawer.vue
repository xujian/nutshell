<template>
  <ns-page minimal class="demo-drawer">
    <ns-page-header title="DEMO" has-back-button />
    <ns-page-content>
      <div class="ns-row">
        <p>&nbsp;</p>
        <p>{{ message }}</p>
        <p>&nbsp;</p>
      </div>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>

defineProps({
  message: String
})
</script>
