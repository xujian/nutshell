<template>
  <ns-page>
    <ns-page-header title="复选框"
      caption="<ns-checkbox>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>基础用法(左右)</h2>
        <ns-card body-fill="#ffffff">
          <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
          <ns-checkbox v-model="formData.val2" text-position="right">复选框</ns-checkbox>
        </ns-card>
        <code-view language="html" :code="codes[0]" />
      </ns-form>
      <h2>形状</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox v-model="formData.val1" shape="button">button</ns-checkbox>
        <ns-checkbox v-model="formData.val2" shape="round">round</ns-checkbox>
      </ns-card>
      <code-view language="html" :code="codes[4]" />
      <h2>禁用状态</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox v-model="formData.val3" disabled>未选时禁用状态</ns-checkbox>
        <ns-checkbox v-model="formData.val4" disabled>选中时禁用状态</ns-checkbox>
      </ns-card>
      <code-view language="html" :code="codes[1]" />
      <h2>checkboxGroup使用</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group v-model="formData.val5">
          <ns-checkbox label="1">复选框</ns-checkbox>
          <ns-checkbox label="2">复选框</ns-checkbox>
        </ns-checkbox-group>
        <div>已选中 {{formData.val5}}</div>
      </ns-card>
      <code-view language="html" :code="codes[2]" />
      <h2>checkboxGroup(最大可选数)</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group v-model="formData.val6" :max="2">
          <ns-checkbox label="A">A</ns-checkbox>
          <ns-checkbox label="B">B</ns-checkbox>
          <ns-checkbox label="C">C</ns-checkbox>
          <ns-checkbox label="D">D</ns-checkbox>
        </ns-checkbox-group>
        <div>已选中 {{formData.val6}}</div>
      </ns-card>
      <code-view language="html" :code="codes[3]" />
      <h2>checkboxGroup(方法)</h2>
      <ns-card body-fill="#ffffff">
        <ns-checkbox-group ref="group" v-model="formData.val7" @change="change">
          <ns-checkbox v-for="item in formData.checkboxsource" :key="item.label" :label="item.label">
            {{
              item.value
            }}
          </ns-checkbox>
        </ns-checkbox-group>
        <div>已选中 {{formData.val7}}</div>
      </ns-card>
      <ns-card body-fill="#ffffff" style="margin:20px 0 0 0">
        <ns-button color="primary" @click="toggleAll(true)"> 全选 </ns-button>
        <ns-button color="primary" style="margin: 0 20px" @click="toggleAll(false)"> 全不选 </ns-button>
        <ns-button color="primary" @click="toggleReverse"> 反选 </ns-button>
      </ns-card>
      <code-view language="html" :code="codes[5]" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const formData = reactive({
  val1: '',
  val2: '',
  val3: false,
  val4: true,
  val5: [],
  val6: [],
  val7: [],
  checkboxsource: [
    { label: '1', value: 'A' },
    { label: '2', value: 'B' },
    { label: '3', value: 'C' },
    { label: '4', value: 'D' },
    { label: '5', value: 'E' },
    { label: '6', value: 'F' },
    { label: '7', value: 'G' },
    { label: '8', value: 'H' }
  ]
})

const group = ref()
function change(){}
const toggleAll = (f) => {
  group.value.toggleAll(f)
}

const toggleReverse = () => {
  console.log(`反选`)
  group.value?.toggleReverse()
}

const codes = [
`<ns-card body-fill="#ffffff">
    <ns-checkbox v-model="formData.val1">复选框</ns-checkbox>
    <ns-checkbox v-model="formData.val2" text-position="right">复选框</ns-checkbox>
  </ns-card>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox v-model="formData.val3" disabled>未选时禁用状态</ns-checkbox>
  <ns-checkbox v-model="formData.val4" disabled>选中时禁用状态</ns-checkbox>
</ns-card>`,
`<ns-checkbox-group v-model="formData.val5">
  <ns-checkbox label="1">复选框</ns-checkbox>
  <ns-checkbox label="2">复选框</ns-checkbox>
</ns-checkbox-group>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox-group v-model="formData.val6" max="2">
    <ns-checkbox label="A">A</ns-checkbox>
    <ns-checkbox label="B">B</ns-checkbox>
    <ns-checkbox label="C">C</ns-checkbox>
    <ns-checkbox label="D">D</ns-checkbox>
  </ns-checkbox-group>
  <div>已选中 {{formData.val6}}</div>
</ns-card>`,
`<ns-card body-fill="#ffffff">
  <ns-checkbox v-model="formData.val1" shape="button">button</ns-checkbox>
  <ns-checkbox v-model="formData.val2" shape="round">round</ns-checkbox>
</ns-card>`,
`const toggleAll = (f) => {
  group.value.toggleAll(f)
}
const toggleReverse = () => {
  group.value?.toggleReverse()
}<ns-card body-fill="#ffffff">
  <ns-checkbox-group ref="group" v-model="formData.val7" @change="change">
    <ns-checkbox v-for="item in formData.checkboxsource" :key="item.label" :label="item.label">
      {{
        item.value
      }}
    </ns-checkbox>
  </ns-checkbox-group>
  <div>已选中 {{formData.val7}}</div>
</ns-card>
<ns-card body-fill="#ffffff" style="margin:20px 0 0 0">
  <ns-button color="primary" @click="toggleAll(true)"> 全选 </ns-button>
  <ns-button color="primary" style="margin: 0 20px" @click="toggleAll(false)"> 全不选 </ns-button>
  <ns-button color="primary" @click="toggleReverse"> 反选 </ns-button>
</ns-card>`
]
</script>

<style lang="scss">

</style>

