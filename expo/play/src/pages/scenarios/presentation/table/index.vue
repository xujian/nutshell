<template>
  <div class="rank-table">
    <div class="rank-table-header">
      {{ column }}
    </div>
    <div class="rank-table-body">
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
      <p>222</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType } from 'vue'
import { columnType, dataType } from '../contract.vue';

const props = defineProps({
  column: {
    type: Array as PropType<columnType[]>,
    default: []
  },
  data: {
    type: Array as PropType<dataType[]>,
    default: []
  }
})

const column = computed(() => props.column)
const data = computed(() => props.data)

onMounted(() => {

})
</script>
<style lang="scss">
.rank-table{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &-header{
    height: 40px;
  }
  &-body{
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
