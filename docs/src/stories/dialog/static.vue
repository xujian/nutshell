<template>
  <ns-button
    size="sm"
    width="100"
    color="negtive"
    label="弹出对话框" @click="onOpenDialogButtonClick" />
  <ns-dialog
    v-model="dialogOpen"
    title="新建客户"
    :top="20"
    :left="20"
    @hide="onDialogHide">
    <ns-form v-model="formData"
      name="client"
      ref="formRef">
      <ns-input
        v-model="formData.name"
        label="姓名"
        name="name" />
      <ns-id-input
        v-model="formData.id"
        name="id"
        label="证件号码"/>
      <ns-select
        v-model="formData.marrage"

        name="marrage"
        label="婚姻状态"
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

function onDialogAch () {
  console.log('===onDialogAch')
}
</script>
