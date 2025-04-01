<template>
  <ns-page class="share-page" fill="neutral">
    <ns-page-header title="分享" has-back-button />
    <ns-page-content>
      <ns-card class="contract-card mb-md"
        gradient="#1DC990,#05AFAF"
        body-fill="#ffffff80"
        color-scheme="light">
        <ns-row justify="center">
          <h2 class="b">房屋抵押贷款合同</h2>
        </ns-row>
        <ns-facts>
          <ns-facts-item label="合同编号" value="1234567890" />
          <ns-facts-item label="签署截止日期" value="2025-05-01" />
        </ns-facts>
        <template #footer>
          <ns-row justify="between">
            <ns-image src="https://simple.shensi.tech/images/qr.png" aspect-ratio="1" square :height="96" />
            <h5>请使用微信扫码打开签署</h5>
          </ns-row>
        </template>
      </ns-card>
      <p>&nbsp;</p>
      <ns-row justify="center">
        <ns-button color="#000000" round @click="doShare">发送给签署人</ns-button>
      </ns-row>
      <canvas
        type="2d"
        id="poster-canvas"
        :style="`height: 1344px;width:1290px;transform:translate3d(-5000px, 0, 0);position: absolute;`"
      ></canvas>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'

const settings = {
    w: 1290,
    h: 1344
  },
  imageUrl = 'https://simple.shensi.tech/images/share-contract.png'

const initCanvas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Taro.getEnv() === 'WEB') {
        const canvas = document.getElementById('poster-canvas')?.childNodes[0] as HTMLCanvasElement;
        const context = canvas.getContext('2d');
        canvas.height = settings.h
        canvas.width = settings.w
        resolve({ context, canvas });
      } else {
        const pageInstance = Taro.getCurrentInstance()?.page || {} // 拿到当前页面实例
        const query = Taro.createSelectorQuery().in(pageInstance) // 确定在当前页面内匹配子元素
        query
          .select('#poster-canvas')
          .fields({ node: true, size: true, context: true }, (res) => {
            const canvas = res.node
            const context = canvas.getContext('2d')
            canvas.height = settings.h
            canvas.width = settings.w
            canvas.destHeight = settings.h
            canvas.destWidth = settings.w
            resolve({ context, canvas })
          })
          .exec()
      }
    }, 300)
  })
}

const drawImage = async (
  canvas: any,
  context: any,
  src: string,
  x?: number,
  y?: number,
  w?: number,
  h?: number
) => {
  return new Promise((resolve, reject) => {
    const image = canvas.createImage()
    image.crossOrigin = 'Anonymous'
    image.src = src
    image.onload = function () {
      context.drawImage(image, x || 0, y || 0, w || settings.w, h || settings.h)
      resolve(void 0)
    }
    image.onerror = (e) => {
      console.log('image onerror', e)
      resolve(image)
    }
  })
}
const doShare = async () => {
  // @ts-ignore
  const { context, canvas } = await initCanvas()
  await drawImage(canvas, context, imageUrl, 0, 0, settings.w, settings.h)
  context.save()

  Taro.canvasToTempFilePath({
    canvas,
    success: (result) => {
      Taro.showShareImageMenu({
        path: result.tempFilePath
      })
    },
    fail: () => {
      Taro.showToast({
        title: '海报生成失败，请重试',
        icon: 'none'
      })
    }
  })
}
</script>

<style lang="scss">
.share-page {
  .contract-card {
    margin: 16px;
  }
  .h5-h2 {
    margin: 4em 0;
    color: var(--ns-text);
  }
  .h5-h5 {
    margin: 1em 0;
    color: #fff;
    font-size: 16px;
  }
  .ns-facts {
    --foreground: var(--ns-text);
  }
}
</style>
