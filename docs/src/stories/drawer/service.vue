<template>
  <ns-row justify="start">
    <ns-button
      color="primary"
      label="弹出侧边栏" @click="onOpenDrawerButtonClick" />
  </ns-row>
</template>

<script lang="ts" setup>
import { NsForm, NsInput, useNutshell } from '@uxda/nutshell'
import { defineComponent, getCurrentInstance, h, reactive, ref } from 'vue'

const $n = useNutshell()

// 以下模拟一个 Vue 组件
const ExcampleComponent = defineComponent({
  name: 'ExamplecComponent',
  props: {
    label: {
      type: String,
    }
  },
  setup (props: any) {

    const vm = getCurrentInstance() as any,
      formData = reactive({
        name: ''
      }),
      formRef = ref<any>(null)

    // 可以在 couldComplete 返回 false 阻止对话框关闭
    // 场景: 确定按钮需要确保内含的 form 完成输入校验
    const couldComplete = async () => {
      return formRef.value.validate()
    }

    // 阻止取消
    const couldClose = async () => {
      console.log('===dialog component couldClose')
      return true
    }

    vm.render = () => h('div', {
      class: 'example-component',
    }, h(NsForm, {
          ref: formRef,
          modelValue: formData,
        },
        h(NsInput, {
          name: 'name',
          label: props.label,
          placeholder: '请输入姓名',
          modelValue: formData.name,
          'onUpdate:modelValue': (v: string) => { formData.name = v },
          rules: ['required']
        }))
    )

    // component 需要实现的 API
    return {
      couldComplete,
      couldClose,
    }
  }
})

const onOpenDrawerButtonClick = () => {
  $n.drawer({
    title: '客户详情',
    width: 800,
    component: ExcampleComponent,
  })
}
</script>
