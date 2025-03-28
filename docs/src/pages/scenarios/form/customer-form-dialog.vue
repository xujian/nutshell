<template>
  <ns-dialog v-model="visible" centered title="新建意向客户" width="1080px">
    <ns-form class="customer-form" v-model="formData" ref="form" failed="notice">
      <ns-card fill="#fff" class="mb-md">
        <h3 class="mb-sm">基本信息</h3>
        <ns-input label="客户姓名" placeholder="请输入客户姓名" required name="客户姓名" v-model="formData.客户姓名" :rules="['required']" />
        <ns-mobile-input name="手机号码" label="手机号码" placeholder="请输入手机号码" v-model="formData.手机号码" />
        <ns-id-input v-model="formData.证件号码" placeholder="请输入证件号码" name="证件号码" label="证件号码" />
        <ns-cascading-select v-model="formData.证件地址" name="证件地址" :options="regions" placeholder="请选择证件地址" label="证件地址" />
        <ns-select v-model="formData.婚姻状态" name="婚姻状态" label="婚姻状态" placeholder="请选择婚姻状态"
          :rules="['required']"
          :options="marrageOptions" />
        <ns-textarea name="备注" label="备注" placeholder="请输入备注" v-model="formData.备注" :maxlength="200" hasCount />
      </ns-card>
      <ns-card fill="#fff" class="mb-md">
        <h3 class="mb-sm">意向标签</h3>
        <ns-rating-input label="意向等级" v-model="formData.意向等级" name="意向等级" required />
        <ns-chips-input v-model="formData.客户标签" name="客户标签" label="客户标签" :options="customerTagOptions" />
        <ns-select v-model="formData.客户来源" name="客户来源" label="客户来源" placeholder="请选择客户来源"
          :options="customerSourceOptions" />
        <ns-select v-model="formData.业务意向" name="业务意向" label="业务意向" placeholder="请选择业务意向"
          :options="businessTypeOptions" />
      </ns-card>
      <template v-for="(item, index) in formData.财产信息" :key="index">
        <ns-card fill="#fff" class="mb-md" >
          <h3 class="mb-sm d-flex align-items-center justify-content-between">
            财产信息<span v-if="index !== 0"> {{ index + 1 }}</span>
            <img class="icon" src="https://cdn.ddjf.com/static/images/loan-manage/icon-delete@4x.png" alt="" @click="formData.财产信息.splice(index, 1)" />
          </h3>
          <ns-select v-model="item.财产类别" :name="['财产信息', index, '财产类别']" label="财产类别" placeholder="请选择财产类别"
            :options="propertyTypeOptions" :rules="['required']" />
          <template v-if="item.财产类别 === '房产'">
            <ns-number-input v-model="item.房产面积" :name="['财产信息', index, '房产面积']" label="房产面积(m²)" placeholder="请输入房产面积" :min="0" :max="99999" :precision="2" :rules="['required']" />
            <ns-cascading-select v-model="item.房产区域" :name="['财产信息', index, '房产区域']" :options="regions" placeholder="请选择房产区域" label="房产区域" />
            <ns-input v-model="item.房产详情地址" :name="['财产信息', index, '房产详情地址']" label="房产详情地址" placeholder="请输入房产详情地址" />
            <ns-select v-model="item.房产类型" :name="['财产信息', index, '房产类型']" label="房产类型" placeholder="请选择房产类型"
              :options="houseTypeOptions" />
            <ns-date-input v-model="item.建成日期" :name="['财产信息', index, '建成日期']" label="建成日期" placeholder="请选择建成日期" />
            <ns-select v-model="item.共有情况" :name="['财产信息', index, '共有情况']" label="共有情况" placeholder="请选择共有情况"
              :options="ownershipOptions" />
          </template>
          <template v-if="item.财产类别 === '车辆'">
            <ns-input v-model="item.车辆品牌及型号" :name="['财产信息', index, '车辆品牌及型号']" label="车辆品牌及型号" placeholder="请输入车辆品牌及型号" />
            <ns-number-input v-model="item.车辆购置价格" :name="['财产信息', index, '车辆购置价格']" label="车辆购置价格(元)" placeholder="请输入车辆购置价格" :min="0" :max="99999999" :precision="2" :rules="['required']" />
            <ns-year-input v-model="item.车辆购置年份" :name="['财产信息', index, '车辆购置年份']" label="车辆购置年份" placeholder="请选择车辆购置年份" />
          </template>
          <template v-if="item.财产类别 === '其他'">
            <ns-input v-model="item.财产名称" :name="['财产信息', index, '财产名称']" label="财产名称" placeholder="请输入财产名称" :rules="['required']" />
            <ns-number-input v-model="item.财产价值" :name="['财产信息', index, '财产价值']" label="财产价值(元)" placeholder="请输入财产价值" :min="0" :max="999999999" :precision="2" />
          </template>
        </ns-card>
      </template>
      <template v-for="(item, index) in formData.跟进记录" :key="index">
        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm d-flex align-items-center justify-content-between">
            跟进记录<span v-if="index !== 0"> {{ index + 1 }}</span>
            <img class="icon" src="https://cdn.ddjf.com/static/images/loan-manage/icon-delete@4x.png" alt="" @click="formData.跟进记录.splice(index, 1)" />
          </h3>
          <ns-select v-model="item.跟进方式" :name="['跟进记录', index, '跟进方式']" label="跟进方式" placeholder="请选择跟进方式"
            :options="followUpTypeOptions" :rules="['required']" />
          <ns-date-input v-model="item.跟进时间" :name="['跟进记录', index, '跟进时间']" label="跟进时间" placeholder="请选择跟进时间" :rules="['required']" />
          <ns-textarea v-model="item.跟进内容" :name="['跟进记录', index, '跟进内容']" label="跟进内容" placeholder="请输入跟进内容" :maxlength="500" hasCount :rules="['required']" />
        </ns-card>
      </template>
    </ns-form>
    <div>
      <ns-button color="primary" variant="outlined" @click="formData.财产信息.push({})">财产信息</ns-button>
      <ns-button color="primary" variant="outlined" @click="formData.跟进记录.push({})">跟进记录</ns-button>
      <ns-button color="primary" variant="outlined">影像资料</ns-button>
    </div>
    <template #footer>
      <ns-button variant="outlined" @click="visible = false">取消</ns-button>
      <ns-button color="primary" @click="handleSubmit">确定</ns-button>
    </template>
  </ns-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const visible = ref(true);
const form = ref();

const formData = reactive({
  客户姓名: '',
  手机号码: '',
  证件号码: '',
  证件地址: [],
  婚姻状态: null,
  备注: '',
  客户来源: null,
  业务意向: null,
  客户标签: [],
  意向等级: null,
  财产信息: [],
  跟进记录: []
});

// 房产类型选项
const houseTypeOptions = [
  { label: '住宅', value: '住宅' },
  { label: '商铺', value: '商铺' },
  { label: '办公', value: '办公' },
  { label: '厂房', value: '厂房' },
  { label: '其他', value: '其他' }
];

// 共有情况选项
const ownershipOptions = [
  { label: '单独所有', value: '单独所有' },
  { label: '共同共有', value: '共同共有' },
  { label: '按份共有', value: '按份共有' }
];

// 业务意向选项
const businessTypeOptions = [
  { label: '贷款类', value: '贷款类' },
  { label: '理财类', value: '理财类' },
  { label: '保险类', value: '保险类' },
  { label: '信用卡类', value: '信用卡类' },
  { label: '其他', value: '其他' }
];

// 婚姻状态选项
const marrageOptions = [
  { label: '未婚', value: '未婚' },
  { label: '已婚', value: '已婚' },
  { label: '离异', value: '离异' },
  { label: '丧偶', value: '丧偶' }
];

// 客户来源选项
const customerSourceOptions = [
  { label: '网络推广', value: '网络推广' },
  { label: '朋友介绍', value: '朋友介绍' },
  { label: '电话营销', value: '电话营销' },
  { label: '自主上门', value: '自主上门' }
];

// 客户标签选项
const customerTagOptions = [
  { label: 'VIP', value: 'VIP' },
  { label: '优质', value: '优质' },
  { label: '普通', value: '普通' },
  { label: '重点跟进', value: '重点跟进' }
];

// 财产类别选项
const propertyTypeOptions = [
  { label: '房产', value: '房产' },
  { label: '车辆', value: '车辆' },
  { label: '其他', value: '其他' }
];

// 跟进方式选项
const followUpTypeOptions = [
  { label: '电话', value: '电话' },
  { label: '微信', value: '微信' },
  { label: '上门', value: '上门' },
  { label: '其他', value: '其他' }
];

// 地区数据
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
  }
];
// 提交表单
const handleSubmit = async () => {
  const valid = await form.value?.validate();
  if (valid) {
    // TODO: 实现表单提交逻辑
    console.log('表单数据：', formData);
    visible.value = false;
  }
};

// 对外暴露打开弹窗的方法
defineExpose({
  open: () => visible.value = true
});
</script>

<style scoped lang="scss">
.customer-form {
  h3 {
    display: flex;
    align-items: center;
  }
  .icon {
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin-left: 2px;
  }
}
</style>