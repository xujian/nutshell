<template>
  <ns-page>
    <ns-page-header title="星星"
      fill="#ffffff88"
      :blur="40"
      reveal
      caption="<ns-rating>" has-back-button />
    <ns-page-content>
      <ns-column justify="center" :gap="10">
        <ns-rating v-model="客户等级" :size />
        <ns-button-group
          size="xs"
          v-model="size"
          :items="sizes" />
      </ns-column>
      <code-view language="html" :code="codes[0]" />
      <h2>用于表单输入</h2>
      <p class="caption">需要使用 &lt;ns-rating-input&gt;</p>
      <ns-row justify="center">
        <ns-form v-model="formData">
          <ns-rating-input
            label="客户等级"
            name="客户等级"
            v-model="formData.客户等级" />
        </ns-form>
      </ns-row>
      <code-view language="html" :code="codes[1]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const 客户等级 = ref(3)

const size = ref('md'),
  sizes = [
    { label: 'XS', value: 'xs' },
    { label: 'SM', value: 'sm' },
    { label: 'MD', value: 'md' },
    { label: 'LG', value: 'lg' },
    { label: 'XL', value: 'xl' }
  ]

const formData = reactive({
  客户等级: 3
})

const codes = [
`<ns-rating v-model="客户等级" />`,
`<ns-rating-input
  label="客户等级"
  name="客户等级"
  v-model="客户等级" />`
]
</script>
