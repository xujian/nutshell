<template>
  <ns-row justify="start">
    <ns-button color="primary" label="弹出对话框" @click="onOpenDialogButtonClick" />
  </ns-row>

  <ns-drawer v-model="dialogOpen" closable width="1000">
    <template #title> 跟进客户 </template>
    <ns-form v-model="formData" name="client" ref="formRef">
      <ns-input v-model="formData.name" label="姓名" placeholder="请输入姓名" name="name" />
      <ns-id-input v-model="formData.id" name="id" placeholder="请输入证件号码" label="证件号码" />
      <ns-select
        v-model="formData.marrage"
        name="marrage"
        label="婚姻状态"
        placeholder="请选择婚姻状态"
        :options="marrageOptions"
      />
    </ns-form>
    <template #footer>
      <ns-row justify="end">
        <ns-button variant="outlined" color="neutral" @click="onPostponeClick">延后跟进</ns-button>
        <ns-button color="primary" @click="onFollowupClick">立即跟进</ns-button>
      </ns-row>
    </template>
  </ns-drawer>
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
  { label: '丧偶', value: 'widowed' }
]

const formData = reactive({
  name: '',
  id: '',
  marrage: void 0
})

function onOpenDialogButtonClick() {
  dialogOpen.value = true
}

function onFollowupClick() {
  dialogOpen.value = false
}

function onPostponeClick() {
  dialogOpen.value = false
}

function onDialogOk() {
  console.log('dialog ok')
}
</script>
