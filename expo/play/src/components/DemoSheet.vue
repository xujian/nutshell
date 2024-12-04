<template>
  <div class="ns-row">
    <p>{{ message }}</p>
    <p>&nbsp;</p>
    <ns-facts class="demo-sheet-facts" :items="items" />
  </div>
</template>

<script lang="ts" setup>

defineProps({
  message: String
})

const items = [
  {
    label: '订单编号',
    value: 'DDYKJS2310260005',
	},
  {
    label: '创建时间',
    value: '2023-10-26 12:10:26',
	},
  {
    label: '客户姓名',
    value: 'nico',
	},
  {
    label: '身份证号码',
    value: '220723199111241881',
	},
  {
    label: '创建用户',
    value: '大杨',
	},
  {
    label: '订单状态',
    value: '已完结',
	}
]
</script>

<style lang="scss">
.demo-sheet-facts {
  background-color: #ffffff99;
}
</style>
