<template>
  <ns-page class="image-form">
    <ns-card fill="#fff" r="10px" class="table-bar">
      <ns-tabs v-model="activeTab" class="form-tabs">
        <ns-tabs-item key="follow" tab="跟进记录">
        </ns-tabs-item>
        <ns-tabs-item key="basic" tab="基础信息">
        </ns-tabs-item>
        <ns-tabs-item key="images" tab="影像资料">
        </ns-tabs-item>
        <ns-tabs-item key="orders" tab="关联订单">
        </ns-tabs-item>
      </ns-tabs>

      <template v-if="activeTab === 'follow'">
        <ns-card title="跟进记录列表">
          <template #corner>
            <ns-button color="primary" @click="addFollowRecord">新增记录</ns-button>
          </template>
          <ns-empty v-if="!followRecords.length" description="暂无跟进记录" />
          <template v-else>
            <ns-card v-for="(record, index) in followRecords" :key="index" class="record-card">
              <div class="record-info">
                <span class="record-time">{{ record.time }}</span>
                <span class="record-type">{{ record.type }}</span>
              </div>
              <div class="record-content">{{ record.content }}</div>
            </ns-card>
          </template>
        </ns-card>
      </template>

      <template v-if="activeTab === 'basic'">
        <ns-card title="跟进记录列表">
          <ns-form v-model="basicInfo">
            <ns-input v-model="basicInfo.name" name="name" label="客户姓名" placeholder="请输入客户真实姓名" />
            <ns-mobile-input v-model="basicInfo.phone" name="phone" label="联系电话" placeholder="请输入11位手机号码" />
            <ns-id-input v-model="basicInfo.idCard" name="idCard" label="身份证号" placeholder="请输入18位身份证号码" />
            <ns-textarea v-model="basicInfo.address" name="address" label="联系地址" placeholder="请输入详细的联系地址" />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'images'">
        <ns-card title="影像资料汇总">
          <ns-table :rows="fileItems" :hasPagination="false">
            <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
            <ns-table-column field="category" label="资料类别" />
            <ns-table-column field="name" label="资料名称" />
            <ns-table-column field="count" label="上传数量" width="100" />
            <ns-table-column field="updateTime" label="最后更新时间" width="180" />
          </ns-table>
        </ns-card>
        <ns-card title="影像资料管理">
          <div class="image-btns">
            <ns-select v-model="imageForm.category" name="category" placeholder="请选择资料类别" :options="topLevelCategories" @change="handleCategoryChange" />
            <ns-select v-model="imageForm.subCategory" name="subCategory" placeholder="请选择资料名称" :options="subCategories" />
            <template v-if="!isBatchMode">
              <ns-button v-if="!imageForm.category || !imageForm.subCategory" color="primary" @click="handleUpload">上传</ns-button>
              <ns-upload v-else :has-files="false" :handler="uploadHandler" @complete="onUploadComplete" style="margin-right: 12px;" />
              <ns-button color="primary" @click="startBatchDownload">批量下载</ns-button>
              <ns-button color="negtive" @click="startBatchDelete">批量删除</ns-button>
            </template>
            <template v-else>
              <ns-button color="primary" @click="startBatchDownload">删除(已选0)</ns-button>
              <!-- <ns-button color="primary" @click="startBatchDelete">下载(已选0)</ns-button> -->
              <ns-button variant="outlined" @click="cancelBatchMode">取消</ns-button>
              <ns-checkbox v-model="isAllSelected" label="全选" style="margin-left: 10px;"></ns-checkbox>
            </template>
          </div>
          <ns-files style="margin-top: 15px;" :items="fileItems" downloadable deletable @delete="onUploadDelete"  @download="onUploadDownload" />
        </ns-card>
      </template>

      <template v-if="activeTab === 'orders'">
        <div class="orders-list">
          <div class="orders-header">
            <h3>订单列表</h3>
          </div>
          <ns-empty v-if="!orders.length" description="暂无关联订单" />
          <template v-else>
            <ns-card v-for="(order, index) in orders" :key="index" class="order-card">
              <div class="order-info">
                <div class="order-header">
                  <span class="order-number">订单号：{{ order.orderNo }}</span>
                  <span class="order-status" :class="order.status">{{ order.statusText }}</span>
                </div>
                <div class="order-details">
                  <div class="detail-item">
                    <span class="label">产品名称：</span>
                    <span class="value">{{ order.productName }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">申请金额：</span>
                    <span class="value">{{ order.amount }}元</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">申请时间：</span>
                    <span class="value">{{ order.applyTime }}</span>
                  </div>
                </div>
              </div>
            </ns-card>
          </template>
        </div>
      </template>
    </ns-card>
  </ns-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const imageForm = reactive({
  category: null,
  subCategory: null
});

const isBatchMode = ref(false);
const isAllSelected = ref(false);

const startBatchDownload = () => {
  isBatchMode.value = true;
};

const startBatchDelete = () => {
  isBatchMode.value = true;
};

const cancelBatchMode = () => {
  isBatchMode.value = false;
};

// 处理一级分类变化
const handleCategoryChange = (value: string) => {
  const category = imageCategories.find(item => item.value === value);
  subCategories.value = category?.children || [];
  imageForm.subCategory = null;
};

const imageCategories = [
  {
    label: '客户基础资料',
    value: 'basic',
    children: [
      { label: '身份证正面', value: 'id_front' },
      { label: '身份证反面', value: 'id_back' },
      { label: '银行卡', value: 'bank_card' }
    ]
  },
  {
    label: '财产信息',
    value: 'property',
    children: [
      { label: '房产证', value: 'house_cert' },
      { label: '车辆登记证', value: 'vehicle_cert' },
      { label: '其他财产证明', value: 'other_property' }
    ]
  },
  {
    label: '合同信息',
    value: 'contract',
    children: [
      { label: '贷款合同', value: 'loan_contract' },
      { label: '担保合同', value: 'guarantee_contract' },
      { label: '其他合同', value: 'other_contract' }
    ]
  },
  {
    label: '其他资料',
    value: 'other',
    children: [
      { label: '其他证明材料', value: 'other_cert' }
    ]
  }
]

// 一级分类选项
const topLevelCategories = imageCategories.map(item => ({
  label: item.label,
  value: item.value
}))

// 二级分类选项
const subCategories = ref([])

const activeTab = ref('images')

// 跟进记录数据
const followRecords = ref([
  {
    time: '2024-02-22 14:30',
    type: '电话跟进',
    content: '客户表示需要更多时间考虑'
  },
  {
    time: '2024-02-20 10:00',
    type: '上门拜访',
    content: '已完成首次客户拜访，介绍了主要产品'
  }
])

// 基础信息数据
const basicInfo = reactive({
  name: '',
  phone: '',
  idCard: '',
  address: ''
})

// 添加跟进记录
const addFollowRecord = () => {
  followRecords.value.unshift({
    time: new Date().toLocaleString(),
    type: '电话跟进',
    content: '新增跟进记录'
  })
}

// 关联订单数据
const orders = ref([
  {
    orderNo: 'DD20240222001',
    status: 'processing',
    statusText: '处理中',
    productName: '个人消费贷款',
    amount: 50000,
    applyTime: '2024-02-22 10:30:00'
  },
  {
    orderNo: 'DD20240220001',
    status: 'completed',
    statusText: '已完成',
    productName: '小微企业贷款',
    amount: 100000,
    applyTime: '2024-02-20 14:20:00'
  }
])

// 上传后的文件列表
const fileItems = reactive([
  {
    id: '65d6e700febeec0001323135',
    name: '方案.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e700febeec0001323135.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=%2FHcsmP4u5Q77DGv2t%2B9EvBxrqIg%3D',
    category: '合同信息',
    count: 1,
    updateTime: '2024-02-22 15:30:00'
  },
  {
    id: '65d6e705febeec0001323136',
    name: 'cab367f61edfee609b0e2b2a1dddfdb4.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e705febeec0001323136.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=JHvj12S9%2FpXwsfPDMHsW6T5G%2FDY%3D',
    category: '其他资料',
    count: 1,
    updateTime: '2024-02-22 15:35:00'
  },
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop',
    category: '客户基础资料',
    count: 1,
    updateTime: '2024-02-22 15:40:00'
  }
])

const onUploadDelete = () => {
  $n.toast('删除成功，这里写删除请求', {})
}

const onUploadDownload = () => {
  $n.toast('下载成功，这里写下载请求', {})
}

const uploadHandler = (file) => {
  return new Promise((resolve) => {
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const fileId = `${timestamp}${randomStr}`;
    resolve({
      id: fileId,
      name: '证件照.jpeg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
      thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop',
      category: imageForm.category,
      count: 1,
      updateTime: new Date().toLocaleString()
    })
  })
}

const onUploadComplete = (file: any) => {
  fileItems.push(file)
  $n.toast('上传成功', {})
}

// 处理上传按钮点击
const handleUpload = () => {
  if (!imageForm.category) {
    $n.toast('请选择资料类别', { type: 'warning' })
    return
  }
  if (!imageForm.subCategory) {
    $n.toast('请选择资料名称', { type: 'warning' })
    return
  }
  $n.toast('开始上传', {})
}
</script>

<style scoped lang="scss">
.image-btns {
  display: flex;
  align-items: center;
  margin-top: 10px;
  .ns-form-item {
    width: 160px;
    margin-bottom: 0;
    margin-right: 10px;
  }
}
</style>
