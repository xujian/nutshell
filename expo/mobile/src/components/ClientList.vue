<template>
  <ns-repeator
    class="client-list my-md"
    :data="items" v-slot="item"
    direction="column"
    justify="stretch"
    align="stretch"
    :gap="10">
    <ns-card class="client-card" fill="#ffffff33" :blur="10">
      <ns-row justify="between" align="start" :gap="10" @click="() => onRowClick(item)">
        <ns-column :grow="0"><ns-chip class="stage">结单</ns-chip></ns-column>
        <ns-column align="start" :grow="1" :gap="0">
          <h5 class="name">{{ item.姓名 }}</h5>
          <ns-rating :value="4" />
        </ns-column>
        <ns-column :grow="0" align="end">
          <h5 class="mobile number">18910890099</h5>
        </ns-column>
      </ns-row>
      <template #footer>
        <ns-row class="full-width" justify="end">
          <ns-button round size="xs" color="neutral">打电话</ns-button>
          <ns-button round size="xs" color="primary">写跟进</ns-button>
        </ns-row>
      </template>
    </ns-card>
  </ns-repeator>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Client } from '../models'

defineProps({
  items: Array as PropType<Client[]>,
  default: []
})

const emit = defineEmits<{
  (event: 'pick', client: Client): void
}>()

const onRowClick = (client: Client) => {
  emit('pick', client)
}

</script>

<style lang="scss">
.client-list {
  .client-card {
    .name {
      font-size: 14px;
      font-weight: bold;
    }
    .mobile {
      font-size: 12px;
    }
    .stage {
    }
  }
}
</style>
