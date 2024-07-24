<template>
  <ns-row class="icons-list justify-start" gap="sm">
    <div class="icon-container border-sm r-sm round">
      <ns-icon format="svg" name="home"></ns-icon>
    </div>
    <div class="icon-container border-sm r-sm round">
      <ns-icon format="svg" name="account"></ns-icon>
    </div>
  </ns-row>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.icons-list {
  width: 100%;
  .icon-container {
    padding: 10px;
    cursor: pointer;
    transition: all .33s;
    &:hover {
      background-color: #ffffff33;
    }
  }
  .ns-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
