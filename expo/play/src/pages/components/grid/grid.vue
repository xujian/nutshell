<template>
  <ns-page class="grid-page" fill="neutral">
    <ns-page-header title="Grid" caption="<ns-grid>" />
    <ns-page-content>
      <ns-grid :columns="2" gap>
        <ns-card v-for="i in 4"
          fill="#ffffff44"
          :key="i"
          :title="`Card ${i}`"
        />
      </ns-grid>
      <code-view language="html" :code="codes[0]" />
      <callout>
        <p>
          <span class="b">&lt;ns-grid&gt;</span> 用于简便地产生 CSS Grid 结构
        </p>
      </callout>
      <h2>Props</h2>
      <div class="caption">属性表</div>
      <props-table :data="keyProps" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const codes = [
`<ns-grid :columns="2" gap>
  <ns-card v-for="i in 4" :key="i"
    :title="\`Card \${i}\`" />
</ns-grid>`
]


const keyProps = [
  {
    name: 'columns',
    description: '分栏数',
    type: 'string | number',
    default: 2
  },
  {
    name: 'rows',
    description: '分行数',
    type: 'string | number',
    default: 2
  },
  {
    name: 'gap',
    description: '间距',
    type: 'number',
    default: 0
  }
]
</script>