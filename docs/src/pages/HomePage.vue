<template>
  <div class="home-page">
    <home-hero />
    <div class="features">
      <p>&nbsp;</p>
      <h2>最新进展</h2>
      <p>&nbsp;</p>
      <latest-releases />
      <p>&nbsp;</p>
    </div>
    <h2>组件总表</h2>
    <p>&nbsp;</p>
    <h3>动作类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="按钮" v-link="'/components/button'">
        <ns-button color="primary">保存</ns-button>
      </ns-card>
      <ns-card gradient="101" title="按钮组">
        <ns-button-group color="primary" :model-value="'0'" :items="followupStatusItems" />
      </ns-card>
      <ns-card gradient="101" title="下拉框">
        <ns-dropdown
          fill="primary"
          :items="dropdownItems"
          label="排序" />
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>呈现类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="标签">
        <ns-chip
          label="已批复"
          color="primary" />
      </ns-card>
      <ns-card gradient="101" title="步骤条">
        <ns-stepper
          variant="arrow"
          :modelValue="1"
          :items="stepsItems" />
      </ns-card>
      <ns-card gradient="101" title="图片">
        <ns-image
          width="200"
          height="100"
          src="https://simple.shensi.tech/upload/laundry.jpg" />
      </ns-card>
      <ns-card gradient="101" title="图标">
        <ns-icon size="lg" name="http://simple.shensi.tech/icons/camera.svg" />
      </ns-card>
      <ns-card gradient="101" title="数字">
        <ns-number
          header="季度环比"
          suffix="%"
          hight="100"
          align="start"
          mainAlign="center"
          trend="down"
          :minimum-fraction-digits="2"
          tooltip="数据存在1-2天延迟"
          :value="12.5" />
      </ns-card>
      <ns-card gradient="101" title="星星">
        <ns-rating :value="2" />
      </ns-card>
      <ns-card gradient="101" title="开关">
        <ns-switch />
      </ns-card>
      <ns-card gradient="101" title="分隔线">
        <ns-divider />
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>导向类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="选项卡">
        <ns-tabs :items="tabsItems" />
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>容器类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="卡片">
      </ns-card>
      <ns-card gradient="101" title="横向排列">
        <ns-row :gap="10">
          <ns-number fill="#fff" stroke="1" :value="1" />
          <ns-number fill="#fff" stroke="1" :value="2" />
          <ns-number fill="#fff" stroke="1" :value="3" />
          <ns-number fill="#fff" stroke="1" :value="4" />
        </ns-row>
      </ns-card>
      <ns-card gradient="101" title="纵向排列">
        <ns-column :gap="10">
          <ns-number size="xs" fill="#fff" stroke="1" :value="1" />
          <ns-number size="xs" fill="#fff" stroke="1" :value="2" />
        </ns-column>
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>表单输入类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="表单">
        <ns-form>
          <ns-input dense label="姓名" name="name" />
        </ns-form>
      </ns-card>
      <ns-card gradient="101" title="文本输入框">
        <ns-input dense label="姓名" name="name" placeholder="请输入姓名" />
      </ns-card>
      <ns-card gradient="101" title="下拉选框">
        <ns-select
          :model-value="''"
          :options="cities"
          name="region"
          label="区域"
          dense />
      </ns-card>
      <ns-card gradient="101" title="下拉选框">
        <ns-cascading-select
          :options="locations"
          :model-value="[]"
          label="区域"
          dense />
      </ns-card>
      <ns-card gradient="101" title="日期输入框">
        <ns-date-input name="registerDate" label="日期"
          format="YYYY-MM-DD"
          :model-value="''"
          dense />
      </ns-card>
      <ns-card gradient="101" title="单选框">
        <ns-radio-group
          v-model="gender"
          :options="radioGroupOptions"
          label="性别"
          name="gender"
          direction="column"
          dense />
      </ns-card>
      <ns-card gradient="101" title="复选框">
        <ns-checkbox-group color="primary"
          v-model="nutrient"
          :options="checkboxGroupOptions"
          label="营养成分"
          dense
           />
      </ns-card>
      <ns-card gradient="101" title="开关">
        <!ns-switch-input label="公开" v-model="open" -->
      </ns-card>
      <ns-card gradient="101" title="按钮组">
        <ns-button-group-input label="状态"
          v-model="followupStatus"
          :options="followupStatusItems"
          dense />
      </ns-card>
      <ns-card gradient="101" title="星星">
        <ns-rating-input label="客户等级"
          v-model="customerGrade"
          dense />
      </ns-card>
      <ns-card gradient="101" title="文件上传">
        <ns-upload label="照片"
          :model-value="[]"
          dense />
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>数据类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="列表">
        <ns-list title="选项"
          :has-numbers="true"
          :has-arrows="true"
          :data="listData" />
      </ns-card>
      <ns-card gradient="101" title="数据表格" class="table-card">
        <ns-table :rows="tableData" fill="#ffffff" :has-pagination="false">
          <ns-table-column field="科目名称" label="科目名称" width="80" align="left" />
          <ns-table-column-currency field="余额" label="余额" align="right" width="120" />
        </ns-table>
      </ns-card>
      <ns-card gradient="101" title="连续平铺">
          <ns-repeator class="demo-repeator"
            :items="repeatorItems"
            :gap="10"
            align="stretch"
            wrap
            v-slot="item">
            <ns-number
              :value="item.count"
              :footer="item.name"
              variant="outlined"
              justify="center"
              foreground="#fff"
              gradient="#e94057,#f27121/45" />
        </ns-repeator>
      </ns-card>
      <ns-card gradient="101" title="时间线" class="timeline-card">
        <ns-timeline :items="timelineItems" />
      </ns-card>
      <ns-card gradient="101" title="详表" class="facts-card">
        <ns-facts direction="column" :items="factsItems" />
      </ns-card>
      <ns-card gradient="101" title="文件表" class="files-card">
        <ns-files :items="filesItems" downloadable deletable />
      </ns-card>
    </ns-row>
    <p>&nbsp;</p>
    <h3>交互类</h3>
    <ns-row class="catelog" justify="start" :gap="10" wrap>
      <ns-card gradient="101" title="弹出对话框">
        <ns-button
          color="primary"
          label="弹出对话框"
          @click="onOpenDialog" />
      </ns-card>
      <ns-card gradient="101" title="弹出确认框">
        <ns-button
          color="negtive"
          label="删除"
          @click="onOpenConfirm" />
      </ns-card>
      <ns-card gradient="101" title="底部弹窗">
        <ns-button
          color="primary"
          label="底部弹窗"
          @click="onOpenSheet" />
      </ns-card>
      <ns-card gradient="101" title="右侧栏">
        <ns-button
          color="primary"
          label="打开右侧栏"
          @click="onOpenDrawer" />
      </ns-card>
      <ns-card gradient="101" title="Toast">
        <ns-button
          color="primary"
          label="Toast"
          @click="onToast" />
      </ns-card>
    </ns-row>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useNutshell } from '@uxda/nutshell'
import HomeHero from '@/components/HomeHero.vue'
import LatestReleases from '@/components/LatestReleases.vue'
import DemoSheet from '@/components/DemoSheet.vue'
import DemoDrawer from '@/components/DemoDrawer.vue'

const $n = useNutshell()

const dropdownItems = [
    { label: '创建时间', value: 'created-time' },
    { label: '修改时间', value: 'modified-time' },
    { label: '结单时间', value: 'finished-time' },
  ]

const stepsItems = [
  {
    title: '做单'
  },
  {
    title: '放款'
  },
  {
    title: '结单'
  }
]

const tabsItems = [
  {
    value: '1',
    label: '已完成',
  },
  {
    value: '2',
    label: '未完成',
  }
]

const gender = ref('1')

const radioGroupOptions = [
    { label: '男', value: '1' },
    { label: '女', value: '0' },
  ]

const nutrient = ref([])
const checkboxGroupOptions = [
  { label: '蛋白质', value: '1' },
  { label: '热量', value: '2' },
]

const followupStatus = ref(''),
  followupStatusItems = [
    { label: '已跟进', value: 0 },
    { label: '未跟进', value: 1 }
  ]


const open = ref(false)

const cities = ref<any[]>([]),
  locations = ref([])

const customerGrade = ref<string>()

const listData = [
  { title: '消息通知', caption: '应用有更新时推送消息' },
  { title: '自动更新', caption: '已安装应用自动更新' },
]

const tableData = [
    {
      "科目名称": "工资",
      "科目类型": "支出",
      "科目编码": "001",
      "科目级次": "1",
      "借方合计": 5000,
      "贷方合计": 0,
      "余额": 5000
    },
    {
      "科目名称": "物业租赁",
      "科目类型": "支出",
      "科目编码": "002",
      "科目级次": "1",
      "借方合计": 0,
      "贷方合计": 1200,
      "余额": -1200
    }
  ]

const repeatorItems = [
  {
    name: '总计',
    count: 64027
  },
  {
    name: '线索',
    count: 63933
  }
]

const timelineItems = [
  {
    title: '方案',
    time: '2023-08-17 11:28:54',
  },
  {
    title: '初审',
    time: '2023-08-17 19:43:09',
  }
]

const factsItems = [
  {
    label: '客户姓名',
    value: '王大地',
	},
  {
    label: '创建用户',
    value: '大杨',
	},
  {
    label: '订单状态',
    value: '已完结',
	}
]

const filesItems = [
  {
    id: '65d6e700febeec0001323135',
    name: '方案.pdf',
    type: 'pdf',
    url: 'https://images-test-oss.ddjf.info/loankit/document/2024/0222/65d6e700febeec0001323135.pdf?Expires=1711123199&OSSAccessKeyId=LTAI5tRQ5chXmPpX4szHdiG2&Signature=%2FHcsmP4u5Q77DGv2t%2B9EvBxrqIg%3D',
  },
  {
    id: '65d6e705febeec0001323137',
    name: '证件照.jpeg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c',
    thumb: 'https://images.unsplash.com/photo-1541182388496-ac92a3230e4c?q=80&w=480&auto=format&fit=crop'
  },
]

const onOpenDialog = () => {
  $n.dialog({
    title: '客户',
    message: '消息内容',
    cancelText: '取消',
    centered: true,
    onOk: () => {
      return true
    }
  })
}

const onOpenConfirm = () => {
  $n.confirm('确定要删除吗?', () => {
    console.log('===delete')
  })
}

const onOpenSheet = () => {
  $n.sheet({
    title: '客户',
    component: DemoSheet,
    props: {
      label: '姓名'
    },
  })
}

const onOpenDrawer = () => {
  $n.drawer({
    title: '客户',
    component: DemoDrawer,
    props: {
      label: '姓名'
    },
  })
}

const onToast = () => {
  $n.toast('客户信息已保存')
}

onMounted(async () => {
  axios.get('/json/cities.json')
    .then(response => response.data)
    .then(data => data.map((d: any) => ({value: d.id, label: d.name})))
    .then(data => {
      cities.value = data
    })
  axios.get('/json/locations.json')
    .then(response => response.data)
    .then(data => {
      locations.value = data
    })
})
</script>
<style lang="scss">
.home-page {
  .catelog {
    .ns-card {
      width: 280px;
      height: 140px;
      .card-header {
        margin-bottom: -33px;
        color: #000000aa;
      }
      .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.table-card {
        .card-body {
          align-items: start;
          margin-top: 23px;
          overflow: hidden;
        }
      }
      &.timeline-card {
        .card-body {
          align-items: start;
          margin-top: 33px;
          overflow: hidden;
        }
      }
      &.facts-card {
        .card-body {
          align-items: start;
          margin-top: 23px;
          overflow: hidden;
        }
      }
      &.files-card {
        .card-body {
          align-items: start;
          margin-top: 23px;
          overflow: hidden;
        }
      }
    }
    .ns-form-item {
      width: 100%;
      .ant-form-item-label {
        min-width: unset;
      }
    }
  }
}
</style>
