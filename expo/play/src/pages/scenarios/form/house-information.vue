<template>
  <ns-page class="create-contact-page">
    <ns-page-header title="客户资料" has-back-button reveal :blur="10" />
    <ns-page-content>
      <ns-form class="contract-form" v-model="formData" ref="form" failed="notice">
        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">财产信息</h3>
          <ns-select v-model="formData.财产类别" name="财产类别" label="财产类别" placeholder="请选择财产类别"
            :rules="['required']"
            :options="asset" />
          <ns-input label="房产面积(m²)" placeholder="请手动输入或拍照识别" required name="房产面积">
            <template #append>
              <ns-icon name="https://cdn.ddjf.com/static/images/risk_manage/file-views.png" size="xl" />
            </template>
          </ns-input>
          <ns-cascading-select v-model.value="formData.房产区域" name="房产区域" :options="regions" placeholder="请选择房产区域" label="房产区域" />
          <ns-input label="房产详细地址" placeholder="请输入房产详细地址" required name="房产详细地址"></ns-input>
          <ns-select v-model="formData.房产类型" name="房产类型" label="房产类型" placeholder="请选择房产类型"
            :rules="['required']"
            :options="estateDic" />
          <ns-date-input name="建成日期" label="建成日期" format="YYYY-MM-DD" placeholder="请选择建成日期"  :model-value="formData.建成日期" />
          <ns-select v-model="formData.共有情况" name="共有情况" label="共有情况" placeholder="请选择共有情况"
            :rules="['required']"
            :options="houseOwn" />
        </ns-card>
      </ns-form>
      <ns-row justify="stretch" class="mb-md" v-for="item in buttons" :key="item">
        <ns-button
          variant="plain"
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
  财产类别: '',
  房产面积: '',
  房产区域: [],
  房产详细地址: '',
  房产类型: '',
  建成日期: '',
  共有情况: ''
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


// 房产类型数据
const estateDic = [
  { value: 'ZZ', label: '住宅' },
  { value: 'BS', label: '别墅' },
  { value: 'XZL', label: '写字楼' },
  { value: 'SP', label: '商铺' },
  { value: 'GY', label: '公寓' },
  { value: 'CF', label: '厂房' },
  { value: 'GYU', label: '商务公寓' },
  { value: 'SZL', label: '商住两用' },
  { value: 'OTH', label: '其他' },
]

// 财产类别数据
const asset = [
{ label: '房产', value: 'house' },
{ label: '车辆', value: 'car' },
{ label: '其他', value: 'other' },
]

// 共有情况数据
const houseOwn = [
{ label: '单独所有', value: 'alone' },
{ label: '共同所有', value: 'common' },
{ label: '按份共有', value: 'part' }
]

// 按钮组
const buttons = [
  {
    label: '增加评估记录',
    handleClick: () => {}
  }
]
</script>

<style lang="scss">
</style>
