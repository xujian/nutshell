<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img class="logo" src="/logo.svg" />
    </div>
    <nut-side-navbar class="sidebar">
      <nut-sub-side-navbar title="智能城市" ikey="6">
        <nut-sub-side-navbar title="人体识别" ikey="9">
          <nut-side-navbar-item ikey="10" title="人体检测1"></nut-side-navbar-item>
          <nut-side-navbar-item ikey="11" title="细粒度人像分割1"></nut-side-navbar-item>
        </nut-sub-side-navbar>
        <nut-sub-side-navbar title="人体识别2" ikey="12">
          <nut-side-navbar-item ikey="13" title="人体检测2"></nut-side-navbar-item>
          <nut-side-navbar-item ikey="14" title="细粒度人像分割2"></nut-side-navbar-item>
        </nut-sub-side-navbar>
      </nut-sub-side-navbar>
    </nut-side-navbar>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.sidebar {
  .sidebar-header {
    padding: 0.25rem;
  }
  .logo {
    height: 48px;
    width: 48px;
  }
}
</style>