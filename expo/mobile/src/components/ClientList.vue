<template>
  <ns-repeator
    class="client-list my-md"
    :items="items" v-slot="item"
    direction="column"
    justify="stretch"
    align="stretch"
    :gap="10">
    <ns-card class="client-card" fill="#ffffff33" :blur="10">
      <ns-row justify="stretch" align="start" jusstify="between" @click="() => onRowClick(item)">
        <div class="stage">结单</div>
        <ns-column align="start" :gap="0">
          <h3 class="name">{{ item.姓名 }}</h3>
          <ns-rating :value="4" />
        </ns-column>
        <ns-column :grow="1" align="end">
          <h4 class="mobile number">18910890099</h4>
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
      font-size: 16px;
      font-weight: bold;
    }
    .mobile {
      font-size: 16px;
    }
    .stage {
      border-radius: 8px;
      background-color: var(--ns-warning-50);
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
      margin-right: 10px;
    }
  }
}
</style>
