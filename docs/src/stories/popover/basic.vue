<template>
  <ns-row justify="around">
    <ns-button label="保存草稿">
      <ns-popover title="提示">
        <p>1. 草稿需要发布才能生效</p>
        <p>2. 保存草稿不影响现有流程</p>
      </ns-popover>
    </ns-button>
    <ns-chip label="微信">
      <ns-popover title="提示">
        <ns-list :data="listItems"></ns-list>
      </ns-popover>
    </ns-chip>
  </ns-row>
</template>

<script lang="ts" setup>

const listItems = [
  {
    title: '对启蒙运动的反应：',
    caption: '启蒙运动强调理性、逻辑和秩序，浪漫主义者则认为这些东西过于刻板和限制性。他们更重视情感、直觉和想象力。'
  },
  {
    title: '工业革命',
    caption: '工业革命导致了社会和经济的巨大变化，许多人感到被机器和城市生活所异化。浪漫主义者转向自然和个体寻求意义和联系。'
  },
  {
    title: '美国和法国革命',
    caption: '美国和法国革命鼓舞了人们对自由和平等的新理想。浪漫主义者认为，这些理想应该扩展到艺术和文化领域。'
  }
]
</script>
