import { ref } from 'vue'
import Taro, { useDidHide, useDidShow, useUnload } from '@tarojs/taro'
import { useAppKit } from '@uxda/appkit-next'

/**
 * 小程序跳转进入的 scene 数值
 */
const SCENE_JUMPED = 1037

type UseStagingOptions = {
  once: boolean
}

/**
 * 回首页计时器
 * 1. 充值页 微信支付过程, 会有短暂的 didHide
 */
let backHomeTimer

/**
 * 跳转场景逻辑
 * 充值页是怎么打开的
 * 1. 其他小程序跳转过来
 * 2. 本小程序内打开
 * 有些处理过程不一样
 */
export function useStaging(options?: UseStagingOptions) {
  /**
   * 怎么来到这个页面的
   * 1. true: 跳转来的
   * 2. false: 门户小程序里面打开的
   */
  const jumped = ref<boolean>(false)

  /**
   * 检查进入充值页的方式
   * 跳转还是路由
   */
  const checkStage = () => {
    // 确定场景 带有token就是跳转支付
    const enterOptions = Taro.getEnterOptionsSync()
    // 记录临时 token
    // 临时 token 是其他小程序跳转带过来的
    // 让 Portal 不登录也可以充值
    // 临时 token 不会写入实际登录态
    console.log(enterOptions.referrerInfo.extraData, 'enterOptions')
    const token = enterOptions.referrerInfo.extraData?.token
    if (enterOptions.scene === SCENE_JUMPED) {
      jumped.value = true
      const $app = useAppKit()
      $app.setTempToken(() => token)
    } else {
      jumped.value = false
    }
  }

  // 返回
  // 页头单击返回图标时
  // 两种情况
  // 业务小程序跳过来/门户小程序自己打开
  /**
   * 跳回
   */
  const leave = () => {
    if (jumped.value) {
      Taro.navigateBackMiniProgram({})
    } else {
      Taro.navigateBack({
        delta: 1,
        fail() {
          console.log('useStaging........navigateBack fail')
          Taro.switchTab({
            url: '/pages/tabbar/index/index'
          })
        }
      })
    }
  }

  /**
   * 清理临时 token
   */
  const cleanup = () => {
    console.log('===useStage===///===cleanup')
    const $app = useAppKit()
    $app.setTempToken(() => '')
  }

  useDidHide(() => {
    // 关闭页面时, 不能停留在这一页
    // 需要清空临时 token 并返回首页
    // 以防用户从微信再次直接进入小程序时
    // 1. 不能使用临时 token
    // 2. 不能看到充值页/充值结果页
    console.log('===useStaging===useDidHide===')
    if (jumped.value) {
      cleanup()
      backHomeTimer = setTimeout(() => {
        console.log('===useStaging===timeOut===5000===Taro.switchTab')
        Taro.switchTab({
          url: '/pages/tabbar/index/index'
        })
      }, 5000)
      console.log('===useStaging===useDidHide===timer set=', backHomeTimer)
    }
  })

  useUnload(() => {
    console.log('===useStaging===useUnload===')
  })

  useDidShow(() => {
    console.log('===useStaging===useDidShow===timer=', backHomeTimer)
    if (backHomeTimer !== void 0) {
      console.log('===useStaging===useDidShow===clearTimeout')
      clearTimeout(backHomeTimer)
    }
  })

  // if (options?.once) {
  //   onBeforeMount(() => {
  //     checkStage()
  //     console.log('useStaging.......(onBeforeMount): jumped=', jumped.value)
  //   })
  // } else {
  //   useDidShow(() => {
  //     checkStage()
  //     console.log('useStaging.......(useDidShow): jumped=', jumped.value)
  //   })
  // }

  return {
    jumped,
    leave,
    checkStage
  }
}
