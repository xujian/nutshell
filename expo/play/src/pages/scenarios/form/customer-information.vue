<template>
  <ns-page class="create-contact-page">
    <ns-page-header title="客户资料" has-back-button reveal :blur="10" />
    <ns-page-content>
      <ns-form class="contract-form" v-model="formData" ref="form" failed="notice">
        <ns-card fill="#fff" class="mb-md" title="基本信息">
          <ns-input label="客户姓名" placeholder="请输入客户姓名" required name="客户姓名">
            <template #append>
              <ns-icon name="https://cdn.ddjf.com/static/images/risk_manage/file-views.png" size="xl" />
            </template>
          </ns-input>
          <ns-mobile-input name="手机号码" label="手机号码" placeholder="请输入手机号码" v-model="formData.手机号码" />
          <ns-id-input v-model="formData.证件号码" placeholder="请输入证件号码" name="证件号码" label="证件号码"/>
          <ns-cascading-select v-model.value="formData.证件地址" name="证件地址" :options="regions" placeholder="请选择证件地址" label="证件地址" />
          <ns-select v-model="formData.婚姻状态" name="婚姻状态" label="婚姻状态" placeholder="请选择婚姻状态"
            :rules="['required']"
            :options="marrageOptions" />
          <ns-textarea name="备注" label="备注" placeholder="请输入备注" v-model="formData.备注" :maxlength="200" hasCount />
        </ns-card>
        <ns-card fill="#fff" class="mb-md">
          <ns-rating-input label="意向等级" v-model="formData.意向等级" name="意向等级"/>
          <ns-select v-model="formData.客户来源" name="客户来源" label="客户来源" placeholder="请选择客户来源"
            :options="customOrigins" />
          <ns-select v-model="formData.业务意向" name="业务意向" label="业务意向" placeholder="请选择业务意向"
            :options="business" />
        </ns-card>
      </ns-form>
      <ns-row justify="stretch" class="mb-md" v-for="item in buttons" :key="item">
        <ns-button
          variant="outlined"
          style="flex: 1;"
          color="primary"
          @click="item.handleClick" >
          + {{ item.label }}
        </ns-button>
      </ns-row>
    </ns-page-content>
    <ns-page-footer fill="#ffffff33"
      :blur="10" :brightness="1.2">
      <div class="row">
        <ns-button style="flex: 1; background: #fff" size="lg" variant="outlined" >取消</ns-button>
        <ns-button style="flex: 1" size="lg" color="primary">提交</ns-button>
      </div>
    </ns-page-footer>
  </ns-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const formData = reactive({
  客户姓名: '',
  手机号码: '',
  证件号码: '',
  证件地址: [],
  婚姻状态: '',
  备注: '',
  意向等级: null,
  客户来源: '',
  业务意向: ''
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


// 婚姻状态数据
const marrageOptions = [
  { label: '未婚', value: 'married' },
  { label: '已婚', value: 'unmarried' },
  { label: '离异', value: 'divorced' },
  { label: '丧偶', value: 'widowed' },
]

// 客户来源数据
const customOrigins = [
{ label: '其他', value: 'QT' },
{ label: '渠道', value: 'QD' },
{ label: '直营', value: 'ZY' },
]

// 业务意向数据
const business = [
{ label: '抵押类', value: 'DYL' },
{ label: '其他', value: 'QT' },
{ label: '信用类', value: 'XYL' },
{ label: '财产类', value: 'CCL' },
]

// 按钮组
const buttons = [
  {
    label: '财产信息',
    handleClick: () => {}
  },
  {
    label: '跟进记录',
    handleClick: () => {}
  },
  {
    label: '影像资料',
    handleClick: () => {}
  }
]
</script>

<style lang="scss">
</style>
