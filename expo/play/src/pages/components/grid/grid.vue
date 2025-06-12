<template>
  <ns-page class="grid-page" fill="neutral">
    <ns-page-header title="Grid" />
    <ns-page-content>
      <ns-grid :columns="2" :rows="2" gap>
        <ns-card v-for="i in 4" :key="i" :title="`Card ${i}`" />
      </ns-grid>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>