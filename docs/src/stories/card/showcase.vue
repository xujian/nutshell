<template>
  <ns-row class="card-showcase" wrap align="stretch" justify="start" :gap="10">
    <ns-card title="卡片" fill="neutral" class="card-1">
      <ns-image class="breakout"
        aspect-ratio="2"
        src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1" />
      <template #footer>
        <div class="div">
          <h3>基滨现状</h3>
          <p class="justify">图形和排版操作员很清楚这一点，实际上所有涉及通信领域的职业都与这些词有稳定的关系，但它是什么？</p>
        </div>
      </template>
    </ns-card>
    <ns-card title="卡片" fill="neutral" class="card-2">
      <div class="div">
        <h3>基滨现状</h3>
        <p class="justify">但我必须向你解释这一切谴责快乐和赞美痛苦的错误想法是如何产生的，我将给你一个完整的系统说明，并阐述伟大的真理探索者的实际教义，人类幸福的缔造者。没有人拒绝、厌恶或回避快乐本身，因为它是快乐，而是因为那些不知道如何理性地追求快乐的人会遇到极其痛苦的后果。再也没有人喜欢或逃避。</p>
      </div>
    </ns-card>
    <ns-card fill="#17ffa6" class="card-3" :thick="0">
      <ns-image class="breakout"
        src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1" />
      <div class="div">
        <h3>基滨现状</h3>
        <p class="justify">另一方面，我们以正义的愤慨和厌恶的方式谴责那些被当下快乐的魅力所迷惑和士气低落，被欲望蒙蔽的人，以至于他们无法预见必然会发生的痛苦和麻烦。</p>
      </div>
    </ns-card>
    <ns-card title="标准套餐" fill="#17ffa6" stroke="#ffffff88" class="card-4" foreground="#fff">
      <ns-number :value="5" prefix="$" surfix="员工·月" footer="基本功能完备适用于小型团队" />
      <ns-button color="positive" round class="full-width mb-md">试用</ns-button>
      <ns-list dense :data="specs" variant="plain">
      </ns-list>
    </ns-card>
    <ns-card fill="#fff" class="card-5">
      <ns-column align="stretch" justify="between">
        <div class="flex-grow">
          <h3>Estee Lauder Blockbuster</h3>
          <ns-number :value="512" prefix="$" size="sm" class="my-md"></ns-number>
          <ns-row justify="between">
            <ns-chip color="#000" foreground="#fff">海外直邮</ns-chip>
            <ns-chip>亚马逊</ns-chip>
          </ns-row>
        </div>
        <ns-image class="picture"
          :radius="12"
          ratio="2"
          src="https://simple.shensi.tech/system-assets/pictures/perfume.jpg"
          />
      </ns-column>
    </ns-card>
    <ns-card fill="#fff" class="card-5">
      <ns-column align="stretch" justify="between">
        <div class="flex-grow">
          <h3>Estee Lauder Blockbuster</h3>
          <ns-number :value="512" prefix="$" size="sm" class="my-md"></ns-number>
          <ns-row justify="between">
            <ns-chip color="#000" foreground="#fff">海外直邮</ns-chip>
            <ns-chip>亚马逊</ns-chip>
          </ns-row>
        </div>
        <ns-image class="picture"
          :radius="12"
          ratio="2"
          src="https://simple.shensi.tech/system-assets/pictures/perfume.jpg"
          />
      </ns-column>
    </ns-card>
  </ns-row>
</template>

<script lang="ts" setup>
const specs = [
  {
    title: '列表组件',
  },
  {
    title: '多项下拉选框',
  },
  {
    title: '身份证号专用输入框',
  },
  {
    title: '手机号专用输入框',
  }
]
</script>

<style lang="scss">
.card-showcase {
  .ns-card {
    width: 20%;
    min-height: 100px;
  }
  .card-1 {
    .card-body {
      background-size: cover;
    }
  }
  .card-2 {
    background: radial-gradient(#76b2fe, #b69efe);
  }
  .card-3 {
    .ns-image {
      clip-path: polygon(0 0, 100% 0, 100% 88%, 0 70%);
    }
  }
  .card-4 {
    background:
      radial-gradient(circle at 90% 10%, #ffffff44, #ffffff00),
      #333;
  }

}
</style>
