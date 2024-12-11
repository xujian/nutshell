<template>
  <ns-row justify="start">
    <ns-button
      size="sm"
      width="100"
      color="negtive"
      label="弹出对话框" @click="onOpenDialogButtonClick" />
  </ns-row>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, h, reactive, ref } from 'vue'
import { useNutshell, NsInput, NsForm, type PopupChildComponent } from '@uxda/nutshell'

const $n = useNutshell()

// 以下模拟一个 Vue 组件
const ExcampleComponent: PopupChildComponent = defineComponent({
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

const onOpenDialogButtonClick = () => {
  $n.dialog({
    title: '客户',
    component: ExcampleComponent,
    props: {
      label: '姓名'
    },
  })
}

</script>
