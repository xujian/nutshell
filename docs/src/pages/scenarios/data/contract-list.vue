<template>
  <ns-page class="file-list">
    <ns-card style="background-color: #fff; padding: 10px 10px 0; margin-bottom: 20px;">
      <ns-form ref="formRef" v-model="formData" class="flex-row wrap">
        <ns-input variant="solid" label="合同编号" v-model="formData.contractNo" name="contractNo" placeholder="请输入合同编号" />
        <ns-input variant="solid" label="合同名称" v-model="formData.name" name="name" placeholder="请输入合同名称" />
        <ns-input variant="solid" label="签署方名称" v-model="formData.signers" name="signers" placeholder="请输入签署方名称" />
        <ns-select variant="solid" label="创建来源" v-model="formData.fromByCode" name="fromByCode" :options="fromByCodeOptions" placeholder="请选择创建来源" />
        <ns-select variant="solid" label="合同状态" v-model="formData.contractStatus" name="contractStatus" :options="contractStatusOptions" placeholder="请选择合同状态" />
        <ns-date-range-input variant="solid" label="创建时间" name="dateRange" v-model="formData.dateRange" />
        <ns-button variant="outlined" @click="handleReset">重置</ns-button>
        <ns-button color="primary" @click="handleSearch">搜索</ns-button>
      </ns-form>
    </ns-card>

    <ns-card fill="#fff" class="table-bar">
      <div style="display: flex; justify-content: end; margin: 0 0 12px;">
        <ns-button color="primary" @click="onRefreshStatus">刷新状态</ns-button>
        <ns-button color="primary" variant="outlined" @click="onBatchDownload">批量下载</ns-button>
      </div>
      <ns-table
        :rows="flatTableData"
        borders="all"
        cache-columns="1"
        :hasPagination="false"
        :tree-config="{
          enable: true
        }"
        :filter-handler="filterHandler"
      >
        <ns-table-column-checkbox width="48" @change="onTableRowSelected" fixed="left" />
        <ns-table-column-custom label="序号" width="80" align="center" fixed="left">
          <template #content="{ row, rowIndex }">
            {{ row.parentId ? '' : rowIndex + 1 }}
          </template>
        </ns-table-column-custom>
        <ns-table-column-custom field="contractNo" width="120" label="合同编号" :tree="true" align="left">
          <template #content="{ row }">
              <a href="javascript:void(0)" class="link">
                {{ row.contractNo }}
              </a>
            </template>
        </ns-table-column-custom>
        <ns-table-column field="name" label="合同名称" align="left"  />
        <ns-table-column field="contractType" label="合同签署类型" align="left"  />
        <ns-table-column field="signers" label="签署方名称" width="180" align="left"  />
        <ns-table-column field="contractStatus" label="合同状态" align="left" />
        <ns-table-column field="stateDate" label="状态更新时间" align="left" />
        <ns-table-column field="createTime" label="创建时间" align="left" />
        <ns-table-column field="createBy" label="创建用户" align="left" />
        <ns-table-column field="fromByCode" label="创建来源" align="left" />
        <ns-table-column-custom field="id"  align="left" width="200" fixed="right" label="操作">
          <template #content="{ row }">
            <template v-if="!row.parentId">
              <ns-button variant="plain" color="primary">预览</ns-button>
              <ns-button variant="plain" color="primary">推送签约</ns-button>
              <ns-button variant="plain" color="negtive">取消签署</ns-button>
            </template>
          </template>
        </ns-table-column-custom>
      </ns-table>
      <ns-pagination
        :current="pagination.page"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        class="flex justify-end"
        @change="onPaginationChange"/>
    </ns-card>
  </ns-page>
</template>

<script setup lang="ts">
import type { TableFilterHandler } from '@uxda/nutshell'
import { ref, reactive, computed } from 'vue'
import axios from 'axios'
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()
const tableData = ref<any[]>([])
const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
})

const formData = ref({
  contractNo: '',
  name: '',
  signers: '',
  fromByCode: null,
  contractStatus: null,
  dateRange: []
})

const fromByCodeOptions = ref([
  { label: '系统创建', value: 'SYSTEM' },
  { label: '手动创建', value: 'MANUAL' },
  { label: '导入创建', value: 'IMPORT' }
])

const contractStatusOptions = ref([
  { label: '待签署', value: 'PENDING' },
  { label: '签署中', value: 'SIGNING' },
  { label: '已完成', value: 'COMPLETED' },
  { label: '已取消', value: 'CANCELLED' }
])

const handleReset = () => {
  formData.value = {
    contractNo: '',
    name: '',
    signers: '',
    fromByCode: null,
    contractStatus: null,
    dateRange: []
  }
  fetchTableData()
}

const handleSearch = () => {
  pagination.page = 1
  fetchTableData()
}


const filterHandler: TableFilterHandler = (queries: any[]) => {
  fetchTableData()
}

const onPaginationChange = (page: number, pageSize: number) => {
  pagination.page = page
  pagination.pageSize = pageSize
  fetchTableData()
}

const selectedRows = ref<any[]>([])

const onTableRowSelected = (rows: any[]) => {
  selectedRows.value = rows
}

const onRefreshStatus = () => {
  fetchTableData().then(() => {
    $n.toast('刷新成功', {type: 'success'})
  })
}

const onBatchDownload = () => {
  if (!selectedRows.value.length) {
    $n.toast('请先选择需要下载的合同', {type: 'warning'})
    return
  }
  // TODO: 实现批量下载逻辑
  console.log('下载选中的合同', selectedRows.value)
}

async function fetchTableData(){
  axios
    .get('/json/table-data-contract.json')
    .then((response) => response.data)
    // pipes to translate keys to labels
    .then((result) => {
      pagination.total = result.result.total
      tableData.value = result.result.list.map((it, index) => {
        return {...it, no: index + 1}
      })

      console.log(tableData.value)
    })
}
fetchTableData()

const flatTableData = computed(() => {
  const flatData: any = []
  tableData.value.forEach((item: any) => {
    flatData.push(item)
    item.subContractList?.forEach((child: any) => {
      flatData.push({ ...child, parentId: item.id })
    })
  })
  return flatData
})
</script>

<style scoped lang="scss">
</style>
