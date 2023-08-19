<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <ns-button type="primary" label="2"
        @click="onClick" @change="onChange"></ns-button>
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover"/>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  
  name: 'Index',
  components: {
  },
  setup() {
    const state = reactive({
      msg: 'EXPO',
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

    const onClick = (...args) => {
      console.log('on click .........', args)
    }

    return {
      ...toRefs(state),
      handleClick,
      onClick
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
