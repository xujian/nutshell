<template>
  <ns-card class="note-card" :title body-fill="#ffffff33">
    <slot></slot>
  </ns-card>
</template>

<script lang="ts" setup>
export type NoteProps = {
  title?: string
}
withDefaults(
  defineProps<NoteProps>(),
  {
    title: '注意'
  }
)

</script>

<style lang="scss">
.note-card {
  background-color: #FFC107;
  color: #00000088;
  .title-label {
    font-size: 12px;
    color: var(--ns-neutral);
  }
}
</style>
