import { onBeforeUnmount, onMounted, Ref } from 'vue'
import { Media } from '../types'

export type PreviewInstance = {
  update (value: Media[]): void
}

export type PreviewButtonClickCallback = {
  description: string;
  (this: PreviewInstance): void;
}

/**
 * 图片或PDF预览器
 * @param list
 * @returns
 */
export const usePreview = (el: Ref<HTMLElement | undefined>) => {

  let viewer: any = null

  const initViewer: () => void = () => {
    // @ts-ignore
    const importViewer = () => import('viewerjs')
    importViewer().then(({ default: Viewer}) =>
      viewer = new Viewer(el.value!, {
        container: document.body,
        // navbar: false,
        // toolbar: false,
        // zoomable: false,
        // transition: false,
        url: (img: HTMLElement) => {
          return img.getAttribute('data-url')
        }
      })
    )
  }

  // HTML 结构约定
  // class="preview-item"
  // data-id, data-type, data-url attributes
  const preview = (id: string) => {
    const items = Array.from(el.value!.querySelectorAll('.preview-item')),
      // 丛 html 结构还原原始 data
      data = items.map(x => ({
        id: x.getAttribute('data-id'),
        type: x.getAttribute('data-type'),
        url: x.getAttribute('data-url'),
      })),
      item = data.find(d => d.id === id)
    if (!item) {
      return
    }
    if (item.type === 'image') {
      const index = data
        ?.filter(x => x.type === 'image')
        .findIndex(x => x.id === id)
      console.log('===999', index)
      viewer?.view(index)
    } else {
      window.open(item.url!)
    }
  }

  /**
   * 数据发生变化后 执行刷新
   */
  const update = () => {
    viewer?.update()
  }

  onBeforeUnmount(() => {
    viewer?.destroy()
  })

  onMounted(initViewer)

  return {
    preview,
    update
  }
}
