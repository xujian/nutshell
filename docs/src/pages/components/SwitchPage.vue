<template>
  <ns-page>
    <ns-page-content>
      <h1>开关</h1>
      <p class="caption">&lt;ns-switch&gt;</p>
      <mobile-button url="pages/components/switch" />
      <p>&nbsp;</p>
      <note>用来打开或关闭选项。</note>
      <p>&nbsp;</p>
      <ns-switch v-model="state.open" />
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{size}">
        <ns-switch v-model="state.open" :size :disabled />
      </size-cases>
      <p>&nbsp;</p>
      <h2>颜色 Color</h2>
      <color-cases v-slot="{color}">
        <ns-switch v-model="state.open" :color :disabled />
      </color-cases>
      <p>&nbsp;</p>
      <ns-button-group size="xs"
        v-model="disabledValue"
        :items="[
          { label: '常态', value: 0 },
          { label: '禁用态', value: 1 },
        ]" />
    </ns-page-content>
  </ns-page>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const state = reactive({
  open: false,
})
const disabledValue = ref(0),
  disabled = computed(() => disabledValue.value == 1)
</script>

<style scoped lang="scss">
.switch-page {
}
</style>
