<template>
  <div class="app-story">
    <component :is="SotryComponent" v-if="isLoaded" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { getStory } from 'virtual:stories'
import StoryMissing from './StoryMissing.vue'

const props = defineProps({
    /**
     * Story file path
     */
    file: {
      type: String,
      required: true,
    }
  })

const imported = shallowRef(),
  code = ref<string>(),
  isLoaded = ref(false),
  isError = ref(false)
const SotryComponent = computed(() => isError.value
      ? StoryMissing
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

onMounted(importStory)
</script>

<style lang="scss">
.app-story {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>