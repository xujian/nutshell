<template>
  <ns-page>
    <ns-page-content>
      <h1 class="my-lg">下拉选框</h1>
      <p class="caption">&lt;ns-select&gt;</p>
      <mobile-button url="pages/components/select" />
      <p>&nbsp;</p>
      <note>提供多个选项集合供用户选择</note>
      <p>&nbsp;</p>
      <h2>基本用法</h2>
      <story file="select/basic.vue" />
      <p>&nbsp;</p>
      <h2>变体 Variants</h2>
      <variant-cases v-slot="{variant}">
        <ns-select
          v-model="value"
          :options="cities"
          placeholder="请选择"
          :name="`client-variant-${variant}`"
          :variant="variant" label="城市" />
      </variant-cases>
      <p>&nbsp;</p>
      <h2>可搜索与不可清除选择</h2>
      <div class="caption">可搜索 - searchable设为true；不可清除选择 - clearable设为false；禁用输入框 - disabled需设为true</div>
      <story file="select/searchable.vue" />
      <p>&nbsp;</p>
      <h2>多项下拉选框组件</h2>
      <div class="caption">&lt;ns-multiple-select&gt; ；maxTags - 可设置最多显示多少个 tag</div>
      <story file="select/multiple.vue" />
      <h2>可随意输入内容</h2>
      <div class="caption">tagsMode需设为true</div>
      <story file="select/tags.vue" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const value = ref()
const cities = ref<any[]>([])
onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map((d: any) => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
})
</script>

<style lang="scss">
.variants {
  .ns-button {
    margin: 2px
  }
  .variant-label {
    width: 100px
  }
}
</style>
