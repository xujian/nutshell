import { Directive, App } from 'vue'

const Loading: Directive = {
  beforeMount(el, binding) {
    binding.value && addLoadingEle(el)
  },
  updated(el, binding) {
    if (binding.value) {
      addLoadingEle(el)
    } else {
      removeLoadingEle(el)
    }
  }
}

// 动态添加loading子节点
function addLoadingEle(el: HTMLElement) {
  if (el.lastElementChild?.classList.contains('ns-loading')) return

  // 判断当前元素定位方式
  const position = window.getComputedStyle(el).position
  if (!position || position === 'static') {
    el.style.position = 'relative'
  }

  const loadingEle = document.createElement('div')
  loadingEle.classList.add('ns-loading')
  loadingEle.innerHTML = `<div class="ns-loading-dot">
                            <div class="ns-loading-dot-item"></div>
                            <div class="ns-loading-dot-item"></div>
                            <div class="ns-loading-dot-item"></div>
                            <div class="ns-loading-dot-item"></div>
                          </div>
                          <div class="ns-loading-text">加载中</div>`
  el.appendChild(loadingEle)
}

// 删除loading子节点
function removeLoadingEle(el: Element) {
  const loadingEle = el.querySelector('.ns-loading')
  loadingEle && el.removeChild(loadingEle)
}

const install = (app: App) => {
  app.directive('loading', Loading)
}

export default {
  install
}
