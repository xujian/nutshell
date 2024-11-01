<template>
  <h1 class="my-lg">列表 &lt;ns-list&gt;</h1>
  <h2 class="my-md">Variants</h2>
  <latest-releases />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { variants } from '@uxda/nutshell'
import LatestReleases from '@/components/LatestReleases.vue'

</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
