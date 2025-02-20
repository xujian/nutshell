<template>
  <ns-page>
    <ns-page-content>
      <h1>开关/开关输入框</h1>
      <p class="caption">&lt;ns-switch&gt;/&lt;ns-switch-input&gt;</p>
      <mobile-button url="pages/components/switch" />
      <p>&nbsp;</p>
      <note>用来打开或关闭选项。</note>
      <h2>基本用法</h2>
      <div class="caption">单独使用ns-rating，disabled可设置其禁用</div>
      <story file="switch/basic.vue" />
      <p>&nbsp;</p>
      <h2>尺寸 Size</h2>
      <size-cases v-slot="{size}">
        <ns-switch v-model="state.open" :size :disabled />
      </size-cases>
      <p>&nbsp;</p>
      <h2>开关输入框</h2>
      <div class="caption">ns-switch-input，disabled可设置其禁用</div>
      <story file="switch/input.vue" />
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
