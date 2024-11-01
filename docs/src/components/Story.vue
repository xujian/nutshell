<template>
  <ns-card :variant="props.isPlain ? 'plain' : 'solid'"
    :fill="props.isPlain ? 'transparent' : '#ffffff'"
    class="story-card">
    <component :is="StoryComponent" v-if="isLoaded" />
    <template #footer>
      <div class="full-width flex-row">
        <div class="flex-item flex-grow"></div>
        <div class="flex-item align-end">
          <ns-button label="CODE" round color="primary"
            variant="soft" size="xs" @click="openCode" />
        </div>
      </div>
    </template>
    <template #bottom>
      <Transition name="expand">
        <div class="code-view flex-row" v-if="codeOpen">
          <code-view :code="code" />
        </div>
      </Transition>
    </template>
  </ns-card>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { getStory } from 'virtual:stories'
import VirtualMissing from './VirtualMissing.vue'

const props = defineProps({
    /**
     * Story file path
     */
    file: {
      type: String,
      required: true,
    },
    isPlain: {
      type: Boolean,
      default: false,
    }
  })

const codeOpen = ref(false)

const imported = shallowRef(),
  code = ref<string>(),
  isLoaded = ref(false),
  isError = ref(false)
const StoryComponent = computed(() => isError.value
      ? VirtualMissing
      : isLoaded.value
        ? imported.value
        : null)

const importStory = async () => {
  try {
    const {
      component: _component,
      source: _code
    } = await getStory(props.file)
    imported.value = _component
    code.value = _code
    isLoaded.value = true
  } catch (e) {
    isError.value = true
    console.log('importStory failed', e)
  }
}

const openCode = () => {
  codeOpen.value = !codeOpen.value
}

onMounted(importStory)
</script>

<style lang="scss">
.ns-card {
  &.story-card {
    min-height: 100px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    .card-body {
      padding: calc(var(--ns-spacing) / 2) 0;
    }
    .card-footer {
      // border-top: 1px solid var(--ns-stroke);
    }
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
}
</style>
