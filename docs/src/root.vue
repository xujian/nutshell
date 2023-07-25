<template>
  <nut-config-provider 
    tag="div"
    :theme="`dark`" class="root flex flex-row">
    <sidebar />
    <app-header />
    <view class="main flex-col">
      <router-view></router-view>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </nut-config-provider>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Nutshell } from 'nutshell'

/**
 * Entry point / 入口页
 */
export default {
  name: 'Index',
  components: {
  },
  setup() {
    const state = reactive({
      msg2: 'OK',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index-page {
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.sidebar {
  width: 240px;
}
</style>
