<template>
  <ns-page class="form-page" fill="neutral">
    <ns-page-header title="下拉框"
      caption="<ns-dropdown>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-row justify="center">
        <ns-dropdown
          :items
          label="排序" />
      </ns-row>
      <p>&nbsp;</p>
      <ns-menu
        fill="#fff"
        :items />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
const items = [
  { label: '创建时间', value: 'created-time' },
  { label: '修改时间', value: 'modified-time' },
  { label: '结单时间', value: 'finished-time' },
]
</script>

<style lang="scss">

</style>

