<template>
  <ns-page class="create-contact">
    <ns-row justify="between" :gap="20" style="height: 85vh">
      <ns-form style="flex: 1; height: 100%; overflow: auto;" class="scrollbar" v-model="formData" ref="formRef">
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
            <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
            <ns-table-column field="参数类型" label="参数类型" align="left" />
            <ns-table-column field="参数名" label="参数名" align="left" />
            <ns-table-column field="是否必填" label="是否必填" align="left" />
            <ns-table-column-custom field="参数内容" label="参数内容" align="left">
              <template #content="{ row, rowIndex }">
                <ns-select v-if="row.参数类型 === '系统参数'" name="参数内容" v-model="row.参数内容" :options="系统参数选项[row.参数名] || []" placeholder="请选择参数内容" @change="onTableColumnChange(row.参数内容, rowIndex, '参数内容')" />
                <ns-input v-else v-model="row.参数内容"  name="参数内容" placeholder="请输入参数内容"  @change="onTableColumnChange(row.参数内容, rowIndex, '参数内容')" />
              </template>
            </ns-table-column-custom>
          </ns-table>
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">其他配置</h3>
          <ns-radio-group v-model="formData.合同必填" label="合同是否必填" required name="合同必填">
            <ns-radio label="是" value="1" />
            <ns-radio label="否" value="0" />
          </ns-radio-group>
          <ns-number-input v-model="formData.必读时间" label="合同必读时间" required name="必读时间" :min="0" :max="999" :step="1" placeholder="请输入合同必读时间（秒）" />
        </ns-card>
      </ns-form>

      <ns-card style="flex: 1; height: 100%;" fill="#fff" class="mb-md" >
        <h3 class="mb-sm">合同预览</h3>
        <iframe width="100%" height="96%"src="https://testapi.fadada.com:8443/api/viewContract.api?app_id=407339&v=2.0&timestamp=20250326152946&contract_id=1904485501067329536&msg_digest=QzRBNDNGNTdCNDQ2MkFBNEIyRDFGQ0RBQTNG WARRANTMTdFNzgzNTdFMw==" frameborder="0"></iframe>
      </ns-card>
    </ns-row>

    <ns-row style="margin-top: 20px;">
      <ns-button style="background: #fff" variant="outlined" @click="保存草稿">保存草稿</ns-button>
      <ns-button style="" color="primary" @click="提交合同">提交合同</ns-button>
    </ns-row>
  </ns-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()

const 系统参数选项 = {
  '借款人姓名': [
    { label: '张三', value: '张三' },
    { label: '李四', value: '李四' }
  ],
  '借款金额': [
    { label: '1000元', value: '1000' },
    { label: '2000元', value: '2000' }
  ],
  '收款户名': [
    { label: '张三', value: '张三' },
    { label: '李四', value: '李四' }
  ],
  '收款账号': [
    { label: '6222021234567890123', value: '6222021234567890123' },
    { label: '6222021234567890124', value: '6222021234567890124' }
  ],
  '合同编号': [
    { label: 'HT20240326001', value: 'HT20240326001' },
    { label: 'HT20240326002', value: 'HT20240326002' }
  ]
}

const formData = reactive({
  合同模板: null,
  合同名称: '',
  签署链接有效期: null,
  创建来源: null,
  参数列表: [
    { 参数类型: '系统参数', 参数名: '借款人姓名', 是否必填: '是', 参数内容: null },
    { 参数类型: '自定义参数', 参数名: '收款姓名', 是否必填: '否', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '收款户名', 是否必填: '是', 参数内容: null },
    { 参数类型: '自定义参数', 参数名: '借款户名', 是否必填: '否', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '借款金额', 是否必填: '是', 参数内容: null },
    { 参数类型: '自定义参数', 参数名: '收款金额', 是否必填: '否', 参数内容: '' },
    { 参数类型: '系统参数', 参数名: '合同编号', 是否必填: '是', 参数内容: null }
  ],
  签署方列表: [],
  合同必填: '0',
  必读时间: 30
})

const contractTemplates = [
  { label: '多方签署合同', value: 'multi_party' },
  { label: '双方签署合同', value: 'dual_party' },
  { label: '单方签署合同', value: 'single_party' },
  { label: '委托代理合同', value: 'agency' },
  { label: '补充协议', value: 'supplement' }
]

const 选择合同模板 = () => {
  if (formData.合同模板) {
    formData.签署方列表.push({
    签署主体: '个人',
      签署方代号: '签署方01',
      签署数量: 1,
      签署方名称: '--'
    })
  } else {
    formData.签署方列表 = []
  }
}

const onTableColumnChange = (value, rowIndex, columnName) => {
  formData.参数列表[rowIndex][columnName] = value
}

const formRef = ref(null)

const 保存草稿 = () => {
  if (!formData.合同名称) {
    $n.toast('请填写合同名称', { type: 'error' })
    return
  }
  // TODO: 调用保存草稿接口
  $n.toast('保存成功', { type: 'success' })
}

const 提交合同 = async () => {
  const valid = await formRef.value.validate()

  if (!valid) {
    return
  }

  // 验证参数列表中的必填项
  const 未填写必填参数 = formData.参数列表
    .filter(item => item.是否必填 === '是' && (item.参数内容 === null || item.参数内容 === ''))
    .map(item => item.参数名)

  if (未填写必填参数.length > 0) {
    $n.toast(`请填写必填参数：${未填写必填参数.join('、')}`, { type: 'error' })
    return
  }

  // TODO: 调用提交合同接口
  $n.toast('提交成功', { type: 'success' })
}
</script>

<style scoped lang="scss">
.create-contact {
  height: 80%;
}
</style>
