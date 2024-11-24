<template>
  <div class="color-card r-md p-sm">
    <div class="paint r-sm" :class="[`fill-${props.color?.name}`]"></div>
    <div class="info p-sm">
      <h3>{{props.color?.label}}</h3>
      <p class="text-caption">{{props.color?.name}}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({
  color: {
    type: Object,
  }
})

</script>

<style lang="scss">
.color-card {
  display: inline-block;
  width: 200px;
  .paint {
    height: 100px;
  }
  .info {
    height: 60px;
    width: fit-content;
  }
}
</style>
