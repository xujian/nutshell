<template>
  <div class="icon-preview col align-center justify-center">
    <ns-icon :name="props.icon" />
    <code-view :code="source" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'


const source = computed(() =>
  `<ns-icon name="${props.icon}" />`
)

type IconDialogProps = {
  icon: string
}

const props = defineProps<IconDialogProps>()
</script>

<style lang="scss">
.icon-preview {
  .ns-icon {
    margin: 16px;
    width: 96px;
    height: 96px;
  }
}
</style>
