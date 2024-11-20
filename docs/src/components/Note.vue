<template>
  <ns-card class="note-card" stroke="neutral" :title>
    <slot></slot>
  </ns-card>
</template>

<script lang="ts" setup>
export type NoteProps = {
  title: string
}
defineProps<NoteProps>();

</script>

<style lang="scss">
.note-card {
  background-color: #FFC107;
}
</style>
