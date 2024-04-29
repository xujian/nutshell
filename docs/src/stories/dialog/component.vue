<template>
  <ns-button
    size="sm"
    width="100"
    color="negtive"
    label="弹出对话框" @click="onOpenDialogButtonClick" />
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, h, reactive, ref } from 'vue'
import { useNutshell, NsInput, NsForm } from '@uxda/nutshell'

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

    // 可以在 couldClose 返回 false 阻止对话框关闭
    // 场景: 确定按钮需要确保内含的 form 完成输入校验
    const couldClose = async () => {
      return formRef.value.validate()
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
            'onUpdate:modelValue': (v: string) => { formData.name = v},
            rules: ['required']
          })
        )
    )

    // component 需要实现的 API
    return {
      couldClose
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
