<template>
  <div class="virtual-sheet column">
    <component :is="SheetComponent" v-if="isLoaded" />
    <div class="full-width flex-row">
      <div class="flex-col flex-grow"></div>
      <div class="flex-col align-end">
        <ns-button label="CODE" round color="primary"
          variant="soft" size="xs" @click="openCode" />
      </div>
    </div>
    <Transition name="expand">
      <div class="code-view flex-row" v-if="codeOpen">
        <code-view :code="code" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { getSheet } from 'virtual:sheets'
import VirtualMissing from './VirtualMissing.vue'

const props = defineProps({
    /**
     * Sheet file path
     */
    file: {
      type: String,
      required: true,
    }
  })

const codeOpen = ref(false)

const imported = shallowRef(),
  code = ref<string>(),
  isLoaded = ref(false),
  isError = ref(false)
const SheetComponent = computed(() => isError.value
      ? VirtualMissing
      : isLoaded.value
        ? imported.value
        : null)

const importSheet = async () => {
  try {
    const {
      component: _component,
      source: _code
    } = await getSheet(props.file)
    imported.value = _component
    code.value = _code
    isLoaded.value = true
  } catch (e) {
    isError.value = true
    console.log('importSheet failed', e)
  }
}

const openCode = () => {
  codeOpen.value = !codeOpen.value
}

onMounted(importSheet)
</script>

<style lang="scss">
.virtual-sheet {
  .expand-leave-active,
  .expand-enter-active {
    transition: all 500ms ease;
    overflow: hidden;
  }
  .expand-enter-to,
  .expand-leave-from {
    max-height: 400px;
  }
  .expand-enter-from,
  .expand-leave-to {
    max-height: 0;
  }
  .ns-code-view {
    width: 100%;
  }
}
</style>
