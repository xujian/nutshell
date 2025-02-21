<template>
  <ns-input-group variant="soft">
    <ns-select
      v-model="formData.marrage"
      placeholder="请选择婚姻状态"
      :options="marrageOptions" />
    <ns-input
      name="name"
      placeholder="请输入姓名"
      v-model="formData.name"
      :rules="['required']">
    </ns-input>
  </ns-input-group>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  marrage: 'married',
})

const marrageOptions = [
  { label: '未婚', value: 'married' },
  { label: '已婚', value: 'unmarried' },
  { label: '离异', value: 'divorced' },
  { label: '丧偶', value: 'widowed' },
]
</script>
