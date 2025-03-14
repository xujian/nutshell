<template>
  <ns-form class="customer-form" v-model="formData" ref="form" failed="notice">
    <ns-card fill="#fff" class="mb-md">
      <h3 class="mb-sm">基本信息</h3>
      <ns-input label="客户姓名" placeholder="请输入客户姓名" required name="客户姓名" v-model="formData.客户姓名" />
      <ns-mobile-input name="手机号码" label="手机号码" placeholder="请输入手机号码" v-model="formData.手机号码" required />
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
    <ns-card fill="#fff" class="mb-md">
      <h3 class="mb-sm">财产信息</h3>
      <ns-input label="月收入" placeholder="请输入月收入" name="月收入" v-model="formData.月收入" />
      <ns-input label="固定资产" placeholder="请输入固定资产" name="固定资产" v-model="formData.固定资产" />
      <ns-input label="负债情况" placeholder="请输入负债情况" name="负债情况" v-model="formData.负债情况" />
      <ns-textarea name="财产备注" label="财产备注" placeholder="请输入财产备注" v-model="formData.财产备注" :maxlength="200" hasCount />
    </ns-card>
    <ns-card fill="#fff" class="mb-md">
      <h3 class="mb-sm">跟进记录</h3>
      <ns-select v-model="formData.跟进状态" name="跟进状态" label="跟进状态" placeholder="请选择跟进状态"
        :options="followUpStatusOptions" />
      <ns-date-picker v-model="formData.下次跟进时间" name="下次跟进时间" label="下次跟进时间" placeholder="请选择下次跟进时间" />
      <ns-textarea name="跟进内容" label="跟进内容" placeholder="请输入跟进内容" v-model="formData.跟进内容" :maxlength="500" hasCount />
    </ns-card>
    <div class="mt-md flex gap-md">
      <ns-button variant="outlined">影像资料</ns-button>
      <ns-button color="primary" @click="handleSubmit">保存</ns-button>
    </div>
  </ns-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const visible = ref(false);
const form = ref();

// 业务意向选项
const businessTypeOptions = [
  { label: '贷款类', value: '贷款类' },
  { label: '理财类', value: '理财类' },
  { label: '保险类', value: '保险类' },
  { label: '信用卡类', value: '信用卡类' },
  { label: '其他', value: '其他' }
];

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
  意向等级: null
});

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
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 16px;
}
</style>