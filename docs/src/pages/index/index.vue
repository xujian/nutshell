<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }} <Dongdong />
    <view class="btn">
      <ns-button />
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import { Nutshell } from 'nutshell'

export default {
  name: 'Index',
  components: {
    Dongdong
  },
  setup() {
    const state = reactive({
      msg: 'NutUI',
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
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
