<template>
  <ns-row justify="start">
    <ns-button
      color="primary"
      label="弹出对话框" @click="onOpenDialogButtonClick" />
  </ns-row>

  <ns-dialog
    v-model="dialogOpen"
    title="新建客户"
    centered
    closable
    @hide="onDialogHide"
    @ok="onDialogOk">
    <template #title>
      自定义标题
    </template>
    <ns-form v-model="formData"
      name="client"
      ref="formRef">
      <ns-input
        v-model="formData.name"
        label="姓名"
        placeholder="请输入姓名"
        :rules="['required']"
        name="name" />
      <ns-id-input
        v-model="formData.id"
        name="id"
        placeholder="请输入证件号码"
        :rules="['required']"
        label="证件号码"/>
      <ns-select
        v-model="formData.marrage"
        name="marrage"
        label="婚姻状态"
        placeholder="请选择婚姻状态"
        :rules="['required']"
        :options="marrageOptions" />
    </ns-form>
  </ns-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { NsForm, NsDialog, NsInput, NsIdInput, NsSelect } from '@uxda/nutshell'

const formRef = ref<any>(null)

const dialogOpen = ref(false)

const marrageOptions = [
  { label: '未婚', value: 'married' },
  { label: '已婚', value: 'unmarried' },
  { label: '离异', value: 'divorced' },
  { label: '丧偶', value: 'widowed' },
]

const formData = reactive({
  name: '',
  id: '',
  marrage: void 0,
})

function onOpenDialogButtonClick () {
  dialogOpen.value = true
}

function onDialogHide () {
  console.log('===onDialogHide')
}

function onDialogOk () {
  console.log('===onDialogOk')
  formRef.value.validate()
}
</script>
