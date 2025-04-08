<template>
  <ns-page class="file-list">
    <ns-card style="background-color: #fff; padding: 10px 10px 0; margin-bottom: 20px;" class="search-bar1">
      <ns-form ref="formRef" v-model="formData" class="flex-row wrap">
        <ns-input variant="solid" label="姓名" v-model="formData.name" name="name" placeholder="请输入姓名" />
        <ns-input variant="solid" label="手机号" v-model="formData.phone" name="phone" placeholder="请输入手机号" />
        <ns-select variant="solid" label="应用权限" v-model="formData.appPermission" name="appPermission" :options="appPermissionOptions" placeholder="请选择应用权限" />
        <ns-select variant="solid" label="敏感信息权限" v-model="formData.sensitivePermission" name="sensitivePermission" :options="sensitivePermissionOptions" placeholder="请选择敏感信息权限" />
        <ns-button variant="outlined" @click="handleReset">重置</ns-button>
        <ns-button color="primary" @click="handleSearch">搜索</ns-button>
      </ns-form>
    </ns-card>

    <ns-drawer v-model="showImportDrawer" title="批量导入用户" width="1000px">
      <ns-stepper
        v-model="currentStep"
        class="mb-lg"
        :items="[
          {
            title: '上传文件'
          },
          {
            title: '导入校验'
          },
          {
            title: '导入数据'
          }
        ]"
      />

      <template v-if="currentStep === 0">
        <div class="mb-md">
          <a href="/templates/user-import-template.xlsx" class="text-primary">下载导入模板</a>
        </div>
        <div class="mb-md">
          <ns-upload
            v-model="uploadFile"
            accept=".xlsx,.xls"
            :auto-upload="false"
            :limit="1"
            @change="handleFileChange"
          >
            <ns-button variant="outlined">选择文件</ns-button>
          </ns-upload>
        </div>
        <div class="text-gray-500 text-sm">
          <div>导入说明：</div>
          <div>1. 请下载并使用最新的导入模板</div>
          <div>2. 文件大小不能超过10MB</div>
          <div>3. 仅支持.xlsx,.xls格式的文件</div>
        </div>
      </template>

      <template v-if="currentStep === 1">
        <div v-if="validating" class="text-center py-xl">
          <div class="mt-md">正在校验导入数据，请稍候...</div>
        </div>
        <div v-else>
          <div class="text-success mb-md">文件校验通过，可以开始导入</div>
          <div class="text-gray-500 text-sm">
            <div>即将导入：</div>
            <div>- 总记录数：{{ importInfo.total }}条</div>
            <div>- 新增用户：{{ importInfo.newUsers }}个</div>
            <div>- 更新用户：{{ importInfo.updateUsers }}个</div>
          </div>
        </div>
      </template>

      <template v-if="currentStep === 2">
        <div v-if="importing" class="text-center py-xl">
          <div class="mt-md">正在导入数据，请稍候...</div>
          <div class="text-gray-500 mt-sm">已完成 {{ importProgress }}%</div>
        </div>
        <div v-else-if="importSuccess" class="text-center py-xl">
          <div class="mt-md">导入完成</div>
          <div class="text-gray-500 mt-sm">成功导入 {{ importInfo.total }} 条数据</div>
        </div>
      </template>

      <template #footer>
        <ns-button variant="outlined" @click="handleCancel">取消</ns-button>
        <ns-button
          v-if="currentStep === 0"
          color="primary"
          :disabled="!uploadFile.length"
          @click="handleValidate"
        >开始校验</ns-button>
        <ns-button
          v-if="currentStep === 1"
          color="primary"
          :disabled="validating"
          @click="handleImport"
        >确认导入</ns-button>
        <ns-button
          v-if="currentStep === 2 && importSuccess"
          color="primary"
          @click="handleFinish"
        >完成</ns-button>
      </template>
    </ns-drawer>

    <ns-card fill="#fff" r="10px" class="table-bar">
      <div style="display: flex; justify-content: space-between; margin: 0 0 12px;">
        <ns-button color="primary" variant="outlined" @click="showDialog = true">新增用户+</ns-button>
        <ns-button color="primary" variant="outlined" @click="showImportDrawer = true">批量导入</ns-button>
      </div>
      <ns-table
        :rows="tableData"
        class="no-border"
        borders="all"
        cache-columns="1"
        :hasPagination="false"
        has-column-control
        :filter-handler="filterHandler"
      >
        <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
        <ns-table-column field="name" label="登录名" align="left" />
        <ns-table-column field="userName" label="姓名" align="left"  />
        <ns-table-column field="phone" label="手机" align="left"  />
        <ns-table-column field="role" label="角色" width="180" align="left"  />
        <ns-table-column field="status" label="状态" align="left" />
        <ns-table-column field="createTime" label="创建时间" align="left" />
        <ns-table-column field="updateTime" label="最后更新时间" align="left" />
        <ns-table-column-custom field="id"  align="left" fixed="right" label="操作">
          <template #content="{ row }">
            <ns-button variant="plain" color="primary">编辑</ns-button>
            <ns-button variant="plain" color="primary">禁用</ns-button>
            <ns-button variant="plain" color="negtive">删除</ns-button>
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


    <ns-dialog v-model="showDialog" centered title="创建用户" width="940px">
      <ns-form ref="dialogFormRef" v-model="dialogFormData">
        <ns-input label="姓名" v-model="dialogFormData.name" name="name" placeholder="请输入姓名" :rules="['required']" />
        <ns-input label="手机号" v-model="dialogFormData.phone" name="phone" placeholder="请输入手机号" :rules="['required']" />
        <ns-select label="所在部门" v-model="dialogFormData.department" name="department" :options="departmentOptions" placeholder="请选择所在部门" :rules="['required']" />
        <ns-select label="默认部门" v-model="dialogFormData.defaultDepartment" name="defaultDepartment" :options="departmentOptions" placeholder="请选择默认部门" :rules="['required']" />
        <ns-select label="用户角色" v-model="dialogFormData.role" name="role" :options="roleOptions" placeholder="请选择用户角色" :rules="['required']" />
        <ns-radio-group label="用户状态" v-model="dialogFormData.status" name="status" :rules="['required']">
          <ns-radio label="启用" value="enabled" />
          <ns-radio label="禁用" value="disabled" />
        </ns-radio-group>
        <ns-radio-group label="敏感信息权限" v-model="dialogFormData.sensitivePermission" name="sensitivePermission" :rules="['required']">
          <ns-radio label="无权限" value="none" />
          <ns-radio label="仅自己" value="self" />
          <ns-radio label="所有" value="all" />
        </ns-radio-group>
      </ns-form>
      <template #footer>
        <ns-button variant="outlined" @click="showDialog = false">取消</ns-button>
        <ns-button color="primary" @click="handleSaveUser">保存</ns-button>
      </template>
    </ns-dialog>
  </ns-page>
</template>

<script setup lang="ts">
import type { TableFilterHandler } from '@uxda/nutshell'
import { ref, reactive } from 'vue'
import axios from 'axios'
const tableData = ref<any[]>([])
const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 0,
})

const formData = ref({
  name: '',
  phone: '',
  appPermission: null,
  sensitivePermission: null
})

const appPermissionOptions = ref([
  { label: '启用', value: 'ENABLED' },
  { label: '禁用', value: 'DISABLED' }
])

const sensitivePermissionOptions = ref([
  { label: '无权限', value: 'NONE' },
  { label: '仅自己', value: 'SELF' },
  { label: '所有', value: 'ALL' }
])

const handleReset = () => {
  formData.value = {
    name: '',
    phone: '',
    appPermission: null,
    sensitivePermission: null
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

function fetchTableData(){
  axios
    .get('/json/table-data-user.json')
    .then((response) => response.data)
    .then(({result}) => {
      pagination.total = result.total
      tableData.value = result.list
    })
}
fetchTableData()



const showDialog = ref(false)
const showImportDrawer = ref(false)
const currentStep = ref(0)
const uploadFile = ref([])

const validating = ref(false)
const importing = ref(false)
const importSuccess = ref(false)
const importProgress = ref(0)
const importInfo = ref({
  total: 0,
  newUsers: 0,
  updateUsers: 0
})

const handleFileChange = (file: File) => {
  if (file) {
    // 检查文件大小
    if (file.size > 10 * 1024 * 1024) {
      // 大于10MB
      alert('文件大小不能超过10MB')
      uploadFile.value = []
      return
    }
  }
}

const handleValidate = async () => {
  validating.value = true
  try {
    // TODO: 调用后端接口进行文件校验
    await new Promise(resolve => setTimeout(resolve, 2000))
    importInfo.value = {
      total: 100,
      newUsers: 80,
      updateUsers: 20
    }
    currentStep.value = 1
  } catch (error) {
    console.error('校验失败:', error)
  } finally {
    validating.value = false
  }
}

const handleImport = async () => {
  importing.value = true
  currentStep.value = 2
  try {
    // TODO: 调用后端接口进行数据导入
    for (let i = 0; i <= 100; i += 10) {
      importProgress.value = i
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    importSuccess.value = true
    fetchTableData()
  } catch (error) {
    console.error('导入失败:', error)
  } finally {
    importing.value = false
  }
}

const handleCancel = () => {
  showImportDrawer.value = false
  currentStep.value = 0
  uploadFile.value = []
  importSuccess.value = false
  importProgress.value = 0
}

const handleFinish = () => {
  handleCancel()
}

const dialogFormRef = ref()
const dialogFormData = ref({
  name: '',
  phone: '',
  department: null,
  defaultDepartment: null,
  role: null,
  status: 'enabled',
  sensitivePermission: 'none'
})

const formRules = {
  name: [{ required: true, message: '请输入姓名' }],
  phone: [{ required: true, message: '请输入手机号' }],
  department: [{ required: true, message: '请选择所在部门' }],
  defaultDepartment: [{ required: true, message: '请选择默认部门' }],
  role: [{ required: true, message: '请选择用户角色' }]
}

const handleSaveUser = async () => {
  const valid = await dialogFormRef.value?.validate()
  if (!valid) {
    return
  }

  // TODO: 调用保存用户接口
  showDialog.value = false
}

const departmentOptions = ref([
  { label: '技术部', value: 'tech' },
  { label: '产品部', value: 'product' },
  { label: '运营部', value: 'operation' }
])

const roleOptions = ref([
  { label: '管理员', value: 'admin' },
  { label: '普通用户', value: 'user' }
])
</script>

<style scoped lang="scss">
.file-list {
}
</style>

