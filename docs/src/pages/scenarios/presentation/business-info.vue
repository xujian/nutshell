<template>
  <ns-page class="business-info">
    <!-- 顶部统计卡片 -->
    <ns-row justify="start" :gap="20">
      <ns-card fill="#fff" r="10" title="当前在途订单" style="width: 380px;">
        <template #titleAfter> (已进件未归档) </template>
        <ns-number :value="25361.32" header="35笔" prefix="￥" suffix="万"> </ns-number>
      </ns-card>
      <ns-card fill="#fff" r="10" title="待放款" style="width: 380px;">
        <template #titleAfter> (较昨日 ↓ 0.00%) </template>
        <ns-number :value="1050.0" header="2笔" prefix="￥" suffix="万"> </ns-number>
      </ns-card>
      <ns-card fill="#fff" r="10" title="已放款" style="width: 380px;">
        <template #titleAfter> (较昨日 ↓ 0.00%) </template>
        <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
      </ns-card>
    </ns-row>

    <!-- 快捷入口 -->
    <ns-card fill="#fff" r="10" title="快捷入口" style="margin-top: 20px;">
      <ns-row justify="start" :gap="10">
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-ywjj.png" alt="">
          <span>业务审批</span>
        </div>
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-ddrw.png" alt="">
          <span>待办任务</span>
        </div>
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-ddgl.png" alt="">
          <span>订单管理</span>
        </div>
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-dhgz.png" alt="">
          <span>贷后管理</span>
        </div>
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-fksp.png" alt="">
          <span>风控审批</span>
        </div>
        <div class="entry flex-column">
          <img src="https://cdn.ddjf.com/static/images/fnfundkit/index-fk.png" alt="">
          <span>资金管理</span>
        </div>
      </ns-row>
    </ns-card>

    <!-- 放款统计 -->
    <ns-card fill="#fff" r="10" title="放款统计" style="margin-top: 20px;">
      <ns-row justify="start" :gap="20">
        <ns-card fill="#f1f6fa" r="10" title="今日/Day" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
        <ns-card fill="#f1f6fa" r="10" title="本周/Week" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
        <ns-card fill="#f1f6fa" r="10" title="本月/Month" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
      </ns-row>
    </ns-card>

    <!-- 回款统计 -->
    <ns-card fill="#fff" r="10" title="回款统计" style="margin-top: 20px;">
      <ns-row justify="start" :gap="20">
        <ns-card fill="#f1f6fa" r="10" title="今日/Day" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
        <ns-card fill="#f1f6fa" r="10" title="本周/Week" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
        <ns-card fill="#f1f6fa" r="10" title="本月/Month" style="width: 230px;">
          <ns-number :value="0" header="0笔" prefix="￥" suffix="万"> </ns-number>
        </ns-card>
      </ns-row>
    </ns-card>
  </ns-page>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.business-info {
  --ns-spacing: 20px;

  .ns-number {
    --ns-spacing: 0px;
  }

  .entry {
    font-size: 12px;
    margin: 0 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
