<template>
  <ns-row justify="start">
    <ns-button color="primary" label="禁用">
      <ns-popover-confirm title="提示"
        @ok="ok"
        @cancel="cancel">
        禁用合作银行后, 该银行不能再新增业务, 是否禁用?
        </ns-popover-confirm>
    </ns-button>
  </ns-row>
</template>

<script lang="ts" setup>

const ok = () => {
  console.log('===popover confirm ok')
}

const cancel = () => {
  console.log('===popover confirm cancel')
}
</script>
