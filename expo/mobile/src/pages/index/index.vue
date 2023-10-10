<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <ns-button type="primary" label="停止"
        @click="onClick"></ns-button>
      <nut-button color="primary" @click="onButtonClick">自动轮呼</nut-button>
      <ns-chip color="primary" label="线索"></ns-chip>
    </view>
  </view>
</template>

<script>
import { useNutshell } from '@uxda/nutshell/taro'
import { reactive, toRefs } from 'vue'

export default {
  
  name: 'Index',
  components: {
  },
  setup() {
    const $n = useNutshell()
    $n.toast('数据已保存')

    const state = reactive({
      msg: 'EXPO',
      msg2: 'OK',
      type: 'text',
      show: false,
      cover: false
    });

    const onButtonClick = () => {
      $n.toast('自动轮呼已启动')
    };

    const onClick = (...args) => {
      console.log('on click .........', args)
    }

    return {
      ...toRefs(state),
      onButtonClick,
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
