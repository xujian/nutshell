<template>
  <ns-page class="clue-list">
    <ns-card style="background-color: #fff; padding: 10px 10px 0; margin-bottom: 20px;" class="search-bar1">
      <ns-form ref="formRef" v-model="formData" class="flex-row wrap">
        <ns-input variant="solid" label="线索名称/手机号" v-model="formData.keyword" name="keyword" placeholder="请输入线索名称/手机号" />
        <ns-input variant="solid" label="跟进负责人" v-model="formData.followPerson" name="followPerson" placeholder="请输入跟进负责人" />
        <ns-button variant="outlined" @click="handleReset">重置</ns-button>
        <ns-button color="primary" @click="handleSearch">搜索</ns-button>
      </ns-form>
    </ns-card>

    <ns-card fill="#fff" r="10px" class="table-bar">
      <div style="display: flex; justify-content: space-between; margin: 0 0 12px;">
        <ns-button color="primary" variant="outlined" @click="showDialog = true">添加线索+</ns-button>
      </div>
      <ns-table
        :rows="tableData"
        class="no-border"
        cache-columns="1"
        :hasPagination="false"
        :tooltipMethod="tooltipMethod"
        has-column-control
        :filter-handler="filterHandler"
      >
        <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
        <ns-table-column field="clueNo" label="线索编号" align="left" />
        <ns-table-column field="keyPersonPhone" label="关键人手机号" align="left">
          <template #content="{ row }">
            {{ JSON.parse(row.keyPersonPhone) || '-' }}
          </template>
        </ns-table-column>
        <ns-table-column field="clueSource" label="线索来源" align="left">
          <template #content="{ row }">
            {{ row.clueSource === 'marketing' ? '营销活动' : '自建' }}
          </template>
        </ns-table-column>
        <ns-table-column-rating field="intentionLevel" label="意向等级" align="left"></ns-table-column-rating>
        <ns-table-column-chips field="tagOptionList" label="标签" align="left" />
        <ns-table-column field="nowFollowPerson" label="跟进负责人" align="left" />
        <ns-table-column field="createTime" label="创建时间" align="left" />
        <ns-table-column field="updateTime" label="更新时间" align="left" />
        <ns-table-column-custom field="id" align="left" fixed="right" label="操作">
          <template #content="{ row }">
            <ns-button variant="plain" color="primary" @click="showFollowDrawer = true">跟进</ns-button>
            <ns-button variant="plain" color="primary">编辑</ns-button>
            <ns-button variant="plain" color="primary">转为客户</ns-button>
          </template>
        </ns-table-column-custom>
      </ns-table>
      <ns-pagination
        :current="pagination.page"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        class="flex justify-end"
        @change="onPaginationChange"
      />
    </ns-card>

    <ns-drawer v-model="showFollowDrawer" title="跟进记录" width="600px">
      <ns-card style="--ns-spacing: 0">
        <ns-form ref="followFormRef" v-model="followFormData" class="follow-form">
          <ns-date-input label="跟进时间" v-model="followFormData.followTime" name="followTime" placeholder="请选择跟进时间" :rules="['required']" />
          <ns-select label="沟通对象" v-model="followFormData.contactPerson" name="contactPerson" placeholder="请选择沟通对象" :options="contactPersonOptions" :rules="['required']" />
          <ns-input label="去访目的" v-model="followFormData.visitPurpose" name="visitPurpose" placeholder="请输入去访目的" :rules="['required']" />
          <ns-textarea label="跟进内容" v-model="followFormData.content" name="content" placeholder="请输入跟进内容" hasCount :rows="4" :rules="['required']" />
          <div style="padding-left: 120px;">
            <ns-upload
              v-model="followFormData.attachments"
              :has-files="false" />
            <ns-files :data="followFormData.attachments" />
          </div>
        </ns-form>
        <div style="text-align: right; margin-top: 15px;">
          <ns-button color="primary" @click="handleSubmitFollow">提交</ns-button>
        </div>
      </ns-card>

      <ns-divider style="margin: 20px 0" />

      <ns-card title="历史跟进记录">
        <ns-timeline class="follow-timeline" :data="historyList">
          <template #content="{item}">
            <div class="datetime text-neutral">{{ item.followTime }}</div>
            <ns-row justify="start" style="margin-top: 8px;">
              <div style="width: 50%">沟通对象: {{ item.contactPerson }}</div>
              <div>走访目的: {{ item.visitPurpose }}</div>
            </ns-row>
            <ns-card fill="#F7F8FA" foreground="#7E7E7E" style="margin-top: 10px;">
              {{ item.content }}
            </ns-card>
            <div class="attachments-list" style="margin-top: 8px;">
              <div>查看附件</div>
              <div v-for="(file, index) in item.attachments" :key="index">
                <ns-button variant="plain" color="primary" size="xs">{{ file.name }}</ns-button>
              </div>
            </div>
          </template>
        </ns-timeline>
      </ns-card>
    </ns-drawer>
  </ns-page>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
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
  keyword: '',
  followPerson: ''
})

const contactPersonOptions = [
  { label: '合作方老板', value: '合作方老板' },
  { label: '业务经理', value: '业务经理' },
  { label: '技术负责人', value: '技术负责人' },
  { label: '财务负责人', value: '财务负责人' },
  { label: '项目经理', value: '项目经理' },
  { label: '其他', value: '其他' }
]

const showDialog = ref(false)
const showFollowDrawer = ref(true)
const followFormData = reactive({
  followTime: '',
  contactPerson: null,
  visitPurpose: '',
  content: '',
  attachments: []
})

const historyList = ref([
  {
    title: '快快快',
    followTime: '2024-01-01 10:00:00',
    contactPerson: '张三',
    visitPurpose: '产品演示',
    content: '客户对产品表示很感兴趣，需要进一步了解具体功能。',
    attachments: [
      { name: '产品介绍.pdf', url: '/files/product-intro.pdf' },
      { name: '演示截图.png', url: '/files/demo-screenshot.png' }
    ]
  },
  {
    title: '快快快',
    followTime: '2024-01-02 14:30:00',
    contactPerson: '李四',
    visitPurpose: '需求沟通',
    content: '详细讨论了客户的具体需求，并制定了初步解决方案。',
    attachments: [
      { name: '需求文档.docx', url: '/files/requirements.docx' }
    ]
  }
])

const handleReset = () => {
  formData.value = {
    keyword: '',
    followPerson: ''
  }
  loadData()
}

const handleSearch = () => {
  pagination.page = 1
  loadData()
}

const filterHandler = (row, field, value) => {
  return row[field]?.toString().toLowerCase().includes(value.toLowerCase())
}

const onPaginationChange = (page: number) => {
  pagination.page = page
  loadData()
}

const loadData = async () => {
  try {
    const response = await axios.get('/json/table-data-customers.json')
    if (response.data.code === '200') {
      const { list, total } = response.data.result
      tableData.value = list
      pagination.total = total
    }
  } catch (error) {
    console.error('Failed to load data:', error)
  }
}

const followFormRef = ref(null)
const handleSubmitFollow = async () => {
  const { valid } = await followFormRef.value.validate()
  if (!valid) {
    $n.toast('请完善必填信息', {type: 'error'})
    return
  }
  historyList.value.unshift({
    title: '快快快',
    ...followFormData,
    followTime: new Date().toLocaleString()
  })
  showFollowDrawer.value = false
  Object.assign(followFormData, {
    followTime: '',
    contactPerson: null,
    visitPurpose: '',
    content: '',
    attachments: []
  })
}

function tooltipMethod(row: any) {
 return ['操作'].includes(row.column.id) ? '' : null
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.follow-timeline {
  .datetime {
    position: absolute;
    top: 0;
    right: 0;
    color: #666;
  }
}
</style>
