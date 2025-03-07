<template>
  <ns-page class="cascading-select-page">
    <ns-page-header title="级联输入框"
      caption="<ns-cascading-select>"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <ns-form>
        <h2>用法</h2>
        <ns-card fill="#fff">
          <ns-cascading-select
            v-model="formData.area"
            :options="regions"
            placeholder="请选择地区" 
            label="地区" />
        </ns-card>
        <code-view language="html" :code="codes[0]" />
        
        <h2>自定义分隔符</h2>
        <ns-card fill="#fff">
          <ns-cascading-select
            v-model="formData.area2"
            :options="regions"
            seperator=" - "
            placeholder="请选择地区" 
            label="地区" />
        </ns-card>
        <code-view language="html" :code="codes[1]" />
        
        <h2>带校验规则</h2>
        <ns-card fill="#fff">
          <ns-cascading-select
            v-model="formData.area3"
            :options="regions"
            placeholder="请选择地区" 
            label="地区" 
            :rules="[{ required: true, message: '请选择地区' }]" />
        </ns-card>
        <code-view language="html" :code="codes[2]" />
        
        <h2>自定义格式化显示</h2>
        <ns-card fill="#fff">
          <ns-cascading-select
            v-model="formData.area4"
            :options="regions"
            :formatter="customFormatter"
            placeholder="请选择地区" 
            label="地区" />
        </ns-card>
        <code-view language="html" :code="codes[3]" />
      </ns-form>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formData = reactive({
  area: [],
  area2: [],
  area3: [],
  area4: [],
})

// 嵌套的地区数据
const regions = [
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          { value: 'tianhe', label: '天河区' },
          { value: 'haizhu', label: '海珠区' },
          { value: 'yuexiu', label: '越秀区' }
        ]
      },
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          { value: 'futian', label: '福田区' },
          { value: 'nanshan', label: '南山区' },
          { value: 'luohu', label: '罗湖区' }
        ]
      }
    ]
  },
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'shangcheng', label: '上城区' },
          { value: 'xiacheng', label: '下城区' }
        ]
      },
      {
        value: 'ningbo',
        label: '宁波市',
        children: [
          { value: 'jiangbei', label: '江北区' },
          { value: 'haishu', label: '海曙区' },
          { value: 'yinzhou', label: '鄞州区' }
        ]
      }
    ]
  }
]

// 自定义格式化函数
function customFormatter(selectedOptions) {
  return selectedOptions.map(option => option.label).join(' > ')
}

const codes = [
`<ns-cascading-select
  v-model="formData.area"
  :options="regions"
  placeholder="请选择地区" 
  label="地区" />`,
`<ns-cascading-select
  v-model="formData.area2"
  :options="regions"
  seperator=" - "
  placeholder="请选择地区" 
  label="地区" />`,
`<ns-cascading-select
  v-model="formData.area3"
  :options="regions"
  placeholder="请选择地区" 
  label="地区" 
  :rules="[{ required: true, message: '请选择地区' }]" />`,
`// 自定义格式化函数
function customFormatter(selectedOptions) {
  return selectedOptions.map(option => option.label).join(' > ')
}
<ns-cascading-select
  v-model="formData.area4"
  :options="regions"
  :formatter="customFormatter"
  placeholder="请选择地区" 
  label="地区" />`,
]
</script>

<style lang="scss">
.cascading-select-page {
  // Add any custom styles if needed
}
</style>

