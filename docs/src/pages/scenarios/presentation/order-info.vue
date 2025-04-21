<template>
  <ns-page class="order-info">
    <ns-card fill="#fff" title="基础信息" style="padding: 10px;">
      <ns-facts :columns="4" :items="[
        { label: '订单编号', value: 'FNZZ25012144001' },
        { label: '产品名称', value: '非交易周转' },
        { label: '合作机构', value: '合作机构' },
        { label: '放款机构', value: '测试放款机构' },
        { label: '市场团队', value: '深圳市元分部' },
        { label: '业务经理', value: '邓嘉杰' },
        { label: '客户姓名', value: '邓嘉杰11' },
        { label: '申请金额', value: '10,000,000.00', suffix: '元' },
        { label: '用款期限', value: '90', suffix: '天' },
        { label: '订单状态', value: '审批通过' }
      ]" />
    </ns-card>

    <ns-card fill="#fff" style="margin-top: 20px">
      <ns-tabs v-model="activeTab" class="form-tabs">
        <ns-tabs-item key="process" tab="流程备注"> </ns-tabs-item>
        <ns-tabs-item key="apply" tab="申请信息"> </ns-tabs-item>
        <ns-tabs-item key="customer" tab="客户信息"> </ns-tabs-item>
        <ns-tabs-item key="asset" tab="资产信息"> </ns-tabs-item>
        <ns-tabs-item key="loan" tab="贷款信息"> </ns-tabs-item>
        <ns-tabs-item key="account" tab="账户信息"> </ns-tabs-item>
        <ns-tabs-item key="approval" tab="智能审批"> </ns-tabs-item>
        <ns-tabs-item key="risk" tab="操作风险控制"> </ns-tabs-item>
        <ns-tabs-item key="flow" tab="流转信息"> </ns-tabs-item>
        <ns-tabs-item key="fund" tab="资金信息"> </ns-tabs-item>
      </ns-tabs>

      <template v-if="activeTab === 'process'">
        <ns-card title="流程备注">
          <ns-form v-model="processData">
            <ns-textarea
              v-model="processData.remark"
              name="remark"
              label="流程备注"
              placeholder="请输入流程备注"
              :maxlength="500"
              hasCount
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'apply'">
        <ns-card title="申请人信息">
          <ns-form v-model="formData">
            <ns-select
              v-model="formData.applicantType"
              name="applicantType"
              label="申请人类型"
              placeholder="请选择申请人类型"
              :options="[
                { label: '个人', value: 'personal' },
                { label: '公司', value: 'company' }
              ]"
            />
            <ns-input v-model="formData.name" name="name" label="姓名" placeholder="请输入姓名" />
            <ns-select
              v-model="formData.idType"
              name="idType"
              label="证件类型"
              placeholder="请选择证件类型"
              :options="[
                { label: '身份证', value: 'idCard' },
                { label: '护照', value: 'passport' }
              ]"
            />
            <ns-id-input
              v-model="formData.idNumber"
              name="idNumber"
              label="证件号码"
              placeholder="请输入证件号码"
            />
            <ns-select
              v-model="formData.maritalStatus"
              name="maritalStatus"
              label="婚姻状况"
              placeholder="请选择婚姻状况"
              :options="[
                { label: '未婚', value: 'single' },
                { label: '已婚', value: 'married' },
                { label: '离异', value: 'divorced' }
              ]"
            />
            <ns-mobile-input
              v-model="formData.phone"
              name="phone"
              label="手机号码"
              placeholder="请输入手机号码"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'customer'">
        <ns-form v-model="customerData" ref="customerRef">
          <ns-card title="申请人">
            <div class="flex justify-end mb-md">
              <template v-if="!isEditing">
                <ns-button color="primary" @click="startEdit">编辑</ns-button>
              </template>
              <template v-else>
                <ns-button variant="outlined" @click="cancelEdit">取消</ns-button>
                <ns-button color="primary" @click="saveEdit">保存</ns-button>
              </template>
            </div>
            <ns-radio-group
              v-model="customerData.applicantType"
              name="applicantType"
              label="申请类型"
              :disabled="!isEditing"
              :rules="['required']"
            >
              <ns-radio label="个人" value="personal" />
              <ns-radio label="公司" value="company" />
            </ns-radio-group>
            <ns-input
              v-model="customerData.name"
              name="name"
              label="姓名"
              placeholder="请输入姓名"
              :disabled="!isEditing"
              :rules="['required']"
            />
            <ns-select
              v-model="customerData.idType"
              name="idType"
              label="证件类型"
              placeholder="请选择证件类型"
              :options="[
                { label: '身份证', value: 'idCard' },
                { label: '护照', value: 'passport' }
              ]"
              :disabled="!isEditing"
              :rules="['required']"
            />
            <ns-id-input
              v-model="customerData.idNumber"
              name="idNumber"
              label="证件号码"
              placeholder="请输入证件号码"
              :disabled="!isEditing"
            />
            <ns-select
              v-model="customerData.maritalStatus"
              name="maritalStatus"
              label="婚姻状态"
              placeholder="请选择婚姻状态"
              :options="[
                { label: '未婚', value: 'single' },
                { label: '已婚', value: 'married' },
                { label: '离异', value: 'divorced' }
              ]"
              :disabled="!isEditing"
              :rules="['required']"
            />
            <ns-date-range-input
              v-model="customerData.idExpiry"
              name="idExpiry"
              label="证件有效期"
              placeholder="请选择证件有效期"
              :disabled="!isEditing"
            >
              <template #append>
                <ns-checkbox
                  style="white-space: nowrap"
                  v-model="customerData.longTermExpiry"
                  @change="setLongTermExpiry"
                  label="长期"
                  :disabled="!isEditing"
                ></ns-checkbox>
              </template>
            </ns-date-range-input>
            <ns-mobile-input
              v-model="customerData.phone"
              name="phone"
              label="手机号码"
              placeholder="请输入手机号码"
              :disabled="!isEditing"
              :rules="['required']"
            />
            <ns-input
              v-model="customerData.companyName"
              name="companyName"
              label="单位名称"
              placeholder="请输入单位名称"
              :disabled="!isEditing"
            />
            <ns-input
              v-model="customerData.formerName"
              name="formerName"
              label="曾用名"
              placeholder="请输入曾用名"
              :disabled="!isEditing"
            />
            <ns-id-input
              v-model="customerData.formerIdNumber"
              name="formerIdNumber"
              label="曾用名身份证号码"
              placeholder="请输入曾用名身份证号码"
              :disabled="!isEditing"
            />
          </ns-card>

          <template v-for="(coApplicant, index) in customerData.coApplicants" :key="index">
            <ns-card v-if="isEditing" :title="`共同申请人${index + 1}`" class="mt-lg">
              <div class="flex justify-end mb-md">
                <ns-button
                  color="negtive"
                  variant="outlined"
                  @click="() => customerData.coApplicants.splice(index, 1)"
                  >删除</ns-button
                >
                <ns-button
                  color="primary"
                  @click="
                    () => {
                      const temp = { ...customerData }
                      delete temp.coApplicants
                      customerData.coApplicants[index] = temp
                    }
                  "
                  >切换为主申请人</ns-button
                >
              </div>
              <ns-radio-group
                v-model="customerData.coApplicants[index].applicantType"
                :name="['coApplicants', index, 'applicantType']"
                label="申请类型"
                :rules="['required']"
              >
                <ns-radio label="个人" value="personal" />
                <ns-radio label="公司" value="company" />
              </ns-radio-group>
              <ns-input
                v-model="customerData.coApplicants[index].name"
                :name="['coApplicants', index, 'name']"
                label="姓名"
                placeholder="请输入姓名"
                :rules="['required']"
              />
              <ns-select
                v-model="customerData.coApplicants[index].idType"
                :name="['coApplicants', index, 'idType']"
                label="证件类型"
                placeholder="请选择证件类型"
                :options="[
                  { label: '身份证', value: 'idCard' },
                  { label: '护照', value: 'passport' }
                ]"
                :rules="['required']"
              />
              <ns-id-input
                v-model="customerData.coApplicants[index].idNumber"
                :name="['coApplicants', index, 'idNumber']"
                label="证件号码"
                placeholder="请输入证件号码"
              />
              <ns-select
                v-model="customerData.coApplicants[index].maritalStatus"
                :name="['coApplicants', index, 'maritalStatus']"
                label="婚姻状态"
                placeholder="请选择婚姻状态"
                :options="[
                  { label: '未婚', value: 'single' },
                  { label: '已婚', value: 'married' },
                  { label: '离异', value: 'divorced' }
                ]"
                :rules="['required']"
              />
              <ns-date-range-input
                v-model="customerData.coApplicants[index].idExpiry"
                :name="['coApplicants', index, 'idExpiry']"
                label="证件有效期"
                placeholder="请选择证件有效期"
              >
                <template #append>
                  <ns-checkbox
                    style="white-space: nowrap"
                    v-model="customerData.coApplicants[index].longTermExpiry"
                    @change="
                      () =>
                        (customerData.coApplicants[index].idExpiry = ['2000-01-01', '9999-12-31'])
                    "
                    label="长期"
                  ></ns-checkbox>
                </template>
              </ns-date-range-input>
              <ns-mobile-input
                v-model="customerData.coApplicants[index].phone"
                :name="['coApplicants', index, 'phone']"
                label="手机号码"
                placeholder="请输入手机号码"
                :rules="['required']"
              />
              <ns-input
                v-model="customerData.coApplicants[index].companyName"
                :name="['coApplicants', index, 'companyName']"
                label="单位名称"
                placeholder="请输入单位名称"
              />
              <ns-input
                v-model="customerData.coApplicants[index].formerName"
                :name="['coApplicants', index, 'formerName']"
                label="曾用名"
                placeholder="请输入曾用名"
              />
              <ns-id-input
                v-model="customerData.coApplicants[index].formerIdNumber"
                :name="['coApplicants', index, 'formerIdNumber']"
                label="曾用名身份证号码"
                placeholder="请输入曾用名身份证号码"
              />
              <ns-select
                v-model="customerData.coApplicants[index].relationship"
                :name="['coApplicants', index, 'relationship']"
                label="与申请人关系"
                placeholder="请选择与申请人关系"
                :options="[
                  { label: '配偶', value: 'spouse' },
                  { label: '父母', value: 'parent' },
                  { label: '子女', value: 'child' },
                  { label: '兄弟姐妹', value: 'sibling' },
                  { label: '其他亲属', value: 'relative' }
                ]"
                :rules="['required']"
              />
            </ns-card>
          </template>
        </ns-form>

        <div v-if="isEditing" class="flex flex-col gap-md" style="padding: 20px">
          <ns-button variant="outlined" color="primary" class="w-full" @click="addCoApplicant">
            添加共同申请人
          </ns-button>
          <ns-button variant="outlined" color="primary" class="w-full" @click="addGuarantor">
            添加担保人
          </ns-button>
          <ns-button variant="outlined" color="primary" class="w-full" @click="addPayee">
            添加第三方收款人
          </ns-button>
          <ns-button variant="outlined" color="primary" class="w-full" @click="addOtherPerson">
            添加其他相关人
          </ns-button>
        </div>
      </template>

      <template v-if="activeTab === 'asset'">
        <ns-card title="资产信息">
          <ns-form v-model="assetData">
            <ns-input
              v-model="assetData.totalAssets"
              name="totalAssets"
              label="总资产"
              placeholder="请输入总资产"
            />
            <ns-input
              v-model="assetData.liquidAssets"
              name="liquidAssets"
              label="流动资产"
              placeholder="请输入流动资产"
            />
            <ns-input
              v-model="assetData.fixedAssets"
              name="fixedAssets"
              label="固定资产"
              placeholder="请输入固定资产"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'loan'">
        <ns-card title="贷款信息">
          <ns-form v-model="loanData">
            <ns-input
              v-model="loanData.amount"
              name="amount"
              label="贷款金额"
              placeholder="请输入贷款金额"
            />
            <ns-input
              v-model="loanData.term"
              name="term"
              label="贷款期限"
              placeholder="请输入贷款期限"
            />
            <ns-select
              v-model="loanData.purpose"
              name="purpose"
              label="贷款用途"
              placeholder="请选择贷款用途"
              :options="[
                { label: '消费', value: 'consumption' },
                { label: '经营', value: 'business' },
                { label: '其他', value: 'other' }
              ]"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'account'">
        <ns-card title="账户信息">
          <ns-form v-model="accountData">
            <ns-input
              v-model="accountData.bankName"
              name="bankName"
              label="开户银行"
              placeholder="请输入开户银行"
            />
            <ns-input
              v-model="accountData.accountName"
              name="accountName"
              label="账户名称"
              placeholder="请输入账户名称"
            />
            <ns-input
              v-model="accountData.accountNumber"
              name="accountNumber"
              label="账号"
              placeholder="请输入账号"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'approval'">
        <ns-card title="智能审批">
          <ns-form v-model="approvalData">
            <ns-select
              v-model="approvalData.status"
              name="status"
              label="审批状态"
              placeholder="请选择审批状态"
              :options="[
                { label: '待审批', value: 'pending' },
                { label: '已通过', value: 'approved' },
                { label: '已拒绝', value: 'rejected' }
              ]"
            />
            <ns-textarea
              v-model="approvalData.comment"
              name="comment"
              label="审批意见"
              placeholder="请输入审批意见"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'risk'">
        <ns-card title="操作风险控制">
          <ns-form v-model="riskData">
            <ns-select
              v-model="riskData.level"
              name="level"
              label="风险等级"
              placeholder="请选择风险等级"
              :options="[
                { label: '低风险', value: 'low' },
                { label: '中风险', value: 'medium' },
                { label: '高风险', value: 'high' }
              ]"
            />
            <ns-textarea
              v-model="riskData.analysis"
              name="analysis"
              label="风险分析"
              placeholder="请输入风险分析"
            />
          </ns-form>
        </ns-card>
      </template>

      <template v-if="activeTab === 'flow'">
        <ns-card title="流转信息">
          <ns-table :rows="flowList" :hasPagination="false">
            <ns-table-column-number label="序号" width="55" align="center" fixed="left" />
            <ns-table-column field="operator" label="操作人" />
            <ns-table-column field="operation" label="操作类型" />
            <ns-table-column field="time" label="操作时间" />
            <ns-table-column field="remark" label="备注" />
          </ns-table>
        </ns-card>
      </template>

      <template v-if="activeTab === 'fund'">
        <ns-card title="资金信息">
          <ns-form v-model="fundData">
            <ns-input
              v-model="fundData.totalAmount"
              name="totalAmount"
              label="总金额"
              placeholder="请输入总金额"
            />
            <ns-input
              v-model="fundData.usedAmount"
              name="usedAmount"
              label="已用金额"
              placeholder="请输入已用金额"
            />
            <ns-input
              v-model="fundData.remainAmount"
              name="remainAmount"
              label="剩余金额"
              placeholder="请输入剩余金额"
            />
          </ns-form>
        </ns-card>
      </template>
    </ns-card>
  </ns-page>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useNutshell } from '@uxda/nutshell'

const $n = useNutshell()
const activeTab = ref('apply')

const processData = reactive({
  remark: ''
})

const formData = reactive({
  applicantType: 'personal',
  name: '',
  idType: 'idCard',
  idNumber: '',
  maritalStatus: 'single',
  phone: ''
})

const isEditing = ref(false)
const customerDataBackup = ref(null)

const customerData = reactive({
  applicantType: 'personal',
  name: '',
  idType: 'idCard',
  idNumber: '',
  maritalStatus: 'single',
  idExpiry: [],
  longTermExpiry: false,
  phone: '',
  companyName: '',
  formerName: '',
  formerIdNumber: '',
  coApplicants: []
})

const startEdit = () => {
  isEditing.value = true
  customerDataBackup.value = JSON.parse(JSON.stringify(customerData))
}

const cancelEdit = () => {
  isEditing.value = false
  if (customerDataBackup.value) {
    Object.assign(customerData, customerDataBackup.value)
  }
  customerData.coApplicants = []
  customerRef.value.resetFields()
}

const customerRef = ref()
const saveEdit = async () => {
  const valid = await customerRef.value.validate()
  if (!valid) {
    $n.toast('请完善必填信息', { type: 'error' })
    return
  }
  isEditing.value = false
  customerDataBackup.value = null
}

const assetData = reactive({
  totalAssets: '',
  liquidAssets: '',
  fixedAssets: ''
})

const loanData = reactive({
  amount: '',
  term: '',
  purpose: 'consumption'
})

const accountData = reactive({
  bankName: '',
  accountName: '',
  accountNumber: ''
})

const approvalData = reactive({
  status: 'pending',
  comment: ''
})

const riskData = reactive({
  level: 'low',
  analysis: ''
})

const flowList = ref([])

const fundData = reactive({
  totalAmount: '',
  usedAmount: '',
  remainAmount: ''
})

const setLongTermExpiry = () => {
  if (!customerData.longTermExpiry) return
  customerData.idExpiry = ['2000-01-01', '9999-12-31']
}

const addCoApplicant = () => {
  customerData.coApplicants.push({
    applicantType: 'personal',
    name: '',
    idType: 'idCard',
    idNumber: '',
    maritalStatus: 'single',
    idExpiry: [],
    longTermExpiry: false,
    phone: '',
    companyName: '',
    formerName: '',
    formerIdNumber: '',
    relationship: ''
  })
}

const addGuarantor = () => {
  $n.toast('添加担保人功能开发中', { type: 'info' })
}

const addPayee = () => {
  $n.toast('添加第三方收款人功能开发中', { type: 'info' })
}

const addOtherPerson = () => {
  $n.toast('添加其他相关人功能开发中', { type: 'info' })
}
</script>

<style scoped lang="scss">
.order-info {
}
</style>
