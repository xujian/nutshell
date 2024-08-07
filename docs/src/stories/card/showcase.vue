<template>
  <ns-row class="card-showcase" align="stretch" justify="start" :gap="10">
    <ns-card title="卡片" fill="neutral" class="card-1" :padding="0">
      <ns-image class="breakout" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1" />
      <template #footer>
        <div class="div">
          <h3>基滨现状</h3>
          <p class="justify">图形和排版操作员很清楚这一点，实际上所有涉及通信领域的职业都与这些词有稳定的关系，但它是什么？</p>
        </div>
      </template>
    </ns-card>
    <ns-card title="卡片" fill="neutral" class="card-2" :padding="0">
      <div class="div">
        <h3>基滨现状</h3>
        <p class="justify">但我必须向你解释这一切谴责快乐和赞美痛苦的错误想法是如何产生的，我将给你一个完整的系统说明，并阐述伟大的真理探索者的实际教义，人类幸福的缔造者。没有人拒绝、厌恶或回避快乐本身，因为它是快乐，而是因为那些不知道如何理性地追求快乐的人会遇到极其痛苦的后果。再也没有人喜欢或逃避。</p>
      </div>
    </ns-card>
    <ns-card fill="#17ffa6" class="card-3" :padding="0">
      <ns-image class="breakout" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1" />
      <div class="div">
        <h3>基滨现状</h3>
        <p class="justify">另一方面，我们以正义的愤慨和厌恶的方式谴责那些被当下快乐的魅力所迷惑和士气低落，被欲望蒙蔽的人，以至于他们无法预见必然会发生的痛苦和麻烦。</p>
      </div>
    </ns-card>
  </ns-row>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.card-showcase {
  .ns-card {
    min-width: 100px;
    min-height: 100px;
  }
  .card-1 {
    width: 200px;
    .card-body {
      min-height: 120px;
      background-image: url();
      background-size: cover;
    }
  }
  .card-2 {
    width: 200px;
    background: radial-gradient(#76b2fe, #b69efe);
  }
  .card-3 {
    width: 200px;
    .ns-image {
      clip-path: polygon(0 0, 100% 0, 100% 95%, 0 80%);
    }
  }
}
</style>
