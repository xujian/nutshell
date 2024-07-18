<template>
  <ns-page class="home-page">
    <ns-page-header title="运营日报"></ns-page-header>
    <ns-page-content>
      <ns-date-select v-model="selected" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selected = ref('2024-07-01')
</script>
