<template>
  <ns-page class="create-contact-page">
    <ns-page-header title="发起合同" has-back-button />
    <ns-page-content>
      <ns-form class="contract-form">
        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">基本信息</h3>
          <ns-input label="合同名称" placeholder="请输入合同名称" required />
          <ns-input label="合同编号" placeholder="系统自动生成" disabled />
          <ns-select label="合同类型" placeholder="请选择合同类型" required :options="[
            { label: '销售合同', value: 'sales' },
            { label: '采购合同', value: 'purchase' },
            { label: '服务合同', value: 'service' },
            { label: '劳务合同', value: 'labor' }
          ]" />
          <ns-date-input label="签订日期" placeholder="请选择签订日期" required />
          <ns-date-input label="生效日期" placeholder="请选择生效日期" required />
          <ns-date-input label="到期日期" placeholder="请选择到期日期" required />
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">合同方信息</h3>
          <ns-select label="客户名称" placeholder="请选择客户" required />
          <ns-input label="客户联系人" placeholder="请输入联系人姓名" />
          <ns-input label="联系电话" placeholder="请输入联系电话" />
          <ns-input label="电子邮箱" placeholder="请输入电子邮箱" />
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">合同金额</h3>
          <ns-input label="合同金额" placeholder="请输入合同金额" type="number" required />
          <ns-select label="币种" placeholder="请选择币种" :options="[
            { label: '人民币', value: 'CNY' },
            { label: '美元', value: 'USD' },
            { label: '欧元', value: 'EUR' }
          ]" />
          <ns-input label="税率" placeholder="请输入税率" type="number" suffix="%" />
          <ns-textarea label="付款条件" placeholder="请输入付款条件" />
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">合同附件</h3>
          <ns-upload label="上传合同文件" multiple />
        </ns-card>

        <ns-card fill="#fff" class="mb-md">
          <h3 class="mb-sm">备注信息</h3>
          <ns-textarea label="备注" placeholder="请输入备注信息" />
        </ns-card>

        <ns-row justify="center" class="mt-lg">
          <ns-button label="保存草稿" color="neutral" class="mr-md" />
          <ns-button label="提交合同" color="primary" />
        </ns-row>
      </ns-form>

    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>