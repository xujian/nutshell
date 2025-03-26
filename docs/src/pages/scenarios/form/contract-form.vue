<template>
  <ns-page class="create-contact">
    <ns-row justify="between" :gap="20" style="height: 85vh">
      <ns-form style="flex: 1; height: 100%; overflow: auto;" class="scrollbar" v-model="formData" ref="form" failed="notice">
        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">基本信息</h3>
          <ns-select v-model="formData.合同模板" label="合同模板" placeholder="请选择合同模板" required name="合同模板" :options="contractTemplates" @change="选择合同模板"  />
          <ns-input v-model="formData.合同名称" label="合同名称" placeholder="请输入合同名称" required name="合同名称" />
          <ns-select v-model="formData.签署链接有效期" label="签署链接有效期" placeholder="请选择签署链接有效期" required name="签署链接有效期" :options="[
            { label: '1天', value: '1' },
            { label: '3天', value: '3' },
            { label: '7天', value: '7' },
            { label: '15天', value: '15' },
            { label: '30天', value: '30' }
          ]" />
          <ns-select v-model="formData.创建来源" label="创建来源" placeholder="请选择创建来源" required name="创建来源" :options="[
            { label: '手动创建', value: 'manual' },
            { label: '系统生成', value: 'system' }
          ]" />
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">签署方信息</h3>
          <ns-table :rows="formData.签署方列表" :hasPagination="false">
            <ns-table-column field="签署主体" label="签署主体" align="left" />
            <ns-table-column field="签署方代号" label="签署方代号" align="left" />
            <ns-table-column field="签署数量" label="签署数量" align="left" />
            <ns-table-column field="签署方名称" label="签署方名称" align="left" />
            <ns-table-column-custom field="action" label="操作" align="left">
              <template #content="{ row }">
                <ns-button variant="plain" color="primary">选择签署方</ns-button>
              </template>
            </ns-table-column-custom>
          </ns-table>
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">合同金额</h3>
          <ns-table :rows="formData.参数列表" :hasPagination="false">
            <ns-table-column type="index" label="序号" width="55" align="center" />
            <ns-table-column field="参数类型" label="参数类型" align="left" />
            <ns-table-column field="参数名" label="参数名" align="left" />
            <ns-table-column field="是否必填" label="是否必填" align="left" />
            <ns-table-column field="参数内容" label="参数内容" align="left" />
            <ns-table-column-custom field="action" label="操作" align="left">
              <template #content="{ row }">
                <ns-button variant="plain" color="primary">编辑</ns-button>
              </template>
            </ns-table-column-custom>
          </ns-table>
          <div style="margin-top: 12px;">
            <ns-button size="sm" @click="addParam">添加参数</ns-button>
          </div>
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">合同明细</h3>
          <ns-table :data="formData.明细列表" :columns="columns">
            <template #toolbar>
              <ns-button size="sm" @click="addDetail">添加明细</ns-button>
            </template>
          </ns-table>
        </ns-card>
      </ns-form>

      <ns-card style="flex: 1;" fill="#fff" class="mb-md" >
        <h3 class="mb-sm">合同预览</h3>
        <iframe width="100%" height="96%"src="https://testapi.fadada.com:8443/api/viewContract.api?app_id=407339&v=2.0&timestamp=20250326152946&contract_id=1904485501067329536&msg_digest=QzRBNDNGNTdCNDQ2MkFBNEIyRDFGQ0RBQTNGMzUzMTdFNzgzNTdFMw==" frameborder="0"></iframe>
      </ns-card>
    </ns-row>

    <ns-row style="margin-top: 20px;">
      <ns-button style="background: #fff" variant="outlined">保存草稿</ns-button>
      <ns-button style="" color="primary">提交合同</ns-button>
    </ns-row>
  </ns-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  合同模板: null,
  合同名称: '',
  签署链接有效期: null,
  创建来源: null,
  参数列表: [
    { 参数类型: '系统参数', 参数名: '借款人姓名', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '借款金额', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '收款户名', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '收款账号', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '借款金额1', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '借款金额2', 是否必填: '是', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '合同编号', 是否必填: '是', 参数内容: '' }
  ],
  明细列表: [],
  签署方列表: []
})

const columns = [
  { title: '序号', type: 'index' },
  { title: '产品名称', key: '产品名称' },
  { title: '规格型号', key: '规格型号' },
  { title: '单位', key: '单位' },
  { title: '数量', key: '数量' },
  { title: '单价', key: '单价' },
  { title: '金额', key: '金额' },
  { title: '备注', key: '备注' },
  { title: '操作', key: 'action' }
]

const contractTemplates = [
  { label: '多方签署合同', value: 'multi_party' },
  { label: '双方签署合同', value: 'dual_party' },
  { label: '单方签署合同', value: 'single_party' },
  { label: '委托代理合同', value: 'agency' },
  { label: '补充协议', value: 'supplement' }
]

const signColumns = [
  { title: '签署主体', key: '签署主体' },
  { title: '签署方代号', key: '签署方代号' },
  { title: '签署数量', key: '签署数量' },
  { title: '签署方名称', key: '签署方名称' },
  { title: '操作', key: 'action' }
]

const addDetail = () => {
  formData.value.明细列表.push({
    产品名称: '',
    规格型号: '',
    单位: '',
    数量: '',
    单价: '',
    金额: '',
    备注: ''
  })
}

const 选择合同模板 = () => {
  if (formData.value.合同模板) {
    formData.value.签署方列表.push({
    签署主体: '个人',
      签署方代号: '签署方01',
      签署数量: 1,
      签署方名称: '--'
    })
  } else {
    formData.value.签署方列表 = []
  }
}

const addParam = () => {
  formData.value.参数列表.push({
    参数类型: '自定义参数',
    参数名: '',
    是否必填: '否',
    参数内容: ''
  })
}


</script>

<style scoped lang="scss">
.create-contact {
  height: 80%;
}
</style>
