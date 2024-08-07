<template>
  <ns-row :gap="10" justify="start" class="card-gradients">
    <ns-card gradient="primary,#ffffff00/180"></ns-card>
    <ns-card gradient="006"></ns-card>
    <ns-card gradient="906"></ns-card>
    <ns-card gradient="#c3ec52,#0ba29d"></ns-card>
  </ns-row>
</template>

<style lang="scss">
.card-gradients {
  .ns-card {
    min-height: 160px;
  }
}
</style>
