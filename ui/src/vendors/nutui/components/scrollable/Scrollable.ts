import { defineComponent, h, onMounted, reactive, ref, SetupContext } from 'vue'
import { scrollableProps, scrollableEmits, scrollableSlots } from '../../../../components/scrollable'
import { buildDimensionStyles } from '../../../../props'
import { NsLoading } from '../../../../components'

/**
 * Refresh indicator 的高度
 */
const REFRESH_INDICATOR_HEIGHT = 64

/**
 * 下拉刷新触发距离
 */
const REFRESH_TRIGGER_THRESHOLD = 32

export const Scrollable = defineComponent({
  name: 'NutuiScrollable',
  props: scrollableProps,
  emits: scrollableEmits,
  slots: scrollableSlots,
  inheritAttrs: true,
  setup (props, { slots, emit }) {

    const contentRef = ref<HTMLElement>()
    const scrollableRef = ref<HTMLElement>()
    const platform = usePlatform()
    let forceStopRefreshingTimer = -1
    /**
     * ignoring scroll event
     * 防止频繁触发 reachBottom
     */
    let bottomCheckSkipped = false

    /**
     * display or hide the refresh indicator
     */
    const state = reactive({
      /**
       * refresh indicator is on
       */
      refreshing: false,
      /**
       * distance scrolled
       */
      scrolled: 0,
      /**
       * the point started drag
       **/ 
      touched: 0,
      /**
       * the distance dragged down
       */
      dragged: 0,
      /**
       * the scrollable height
       */
      height: 0,
      /**
       * the full height (client height) of the scrollable
       */
      contentHeight: 0,
    })

    /**
     * When refresh data fetched, stop refreshing 
     */
    const refreshCallback = () => {
      window.clearTimeout(forceStopRefreshingTimer)
      window.setTimeout(() => {
        clearRefreshing()
        updateContentHeight()
      }, 500)
    }

    const startRefreshing = () => {
      state.refreshing = true
      state.touched = 0
      state.dragged = REFRESH_INDICATOR_HEIGHT
      emit('refresh', refreshCallback)
      countDownToForceStopRefreshing()
    }

    /**
     * Check distance dragged down
     * 防止误触
     */
    const shouldTriggerRefresh = () => {
      return state.dragged > REFRESH_TRIGGER_THRESHOLD
    }

    const clearRefreshing = () => {
      state.refreshing = false
      state.touched = 0
      state.dragged = 0
    }

    const updateContentHeight = () => {
      // @ts-ignore
      state.height = scrollableRef.value?.$el?.clientHeight ?? 0
      state.contentHeight = contentRef.value?.clientHeight ?? 0
    }

    /**
     * Just when refresh not fetched, stop refreshing
     * 刷新出错时, 清理状态
     */
    const countDownToForceStopRefreshing = () => {
      forceStopRefreshingTimer = window.setTimeout(() => {
        clearRefreshing()
      }, 5000)
    }

    const checkBottomReached = (scrolled: number) => {
      if (scrolled < state.contentHeight - state.height * 2) {
        // release scroll prevent when scroll back
        bottomCheckSkipped = false
      }
      if (bottomCheckSkipped) return
      if (scrolled > state.contentHeight - state.height - 20) {
        // console.log('bottomReached', state.contentHeight)
        emit('bottomReached')
        bottomCheckSkipped = true
      }
    }

    const indicator = () => h('div', {
      class: [
        'refresh-indicator',
        'row',
        'justify-center',
        'items-center',
        state.refreshing ? 'refreshing' : '',
      ],
      style: {
        height: `${state.dragged}px`,
      },
    }, h(NsLoading))

    const content = () => h('div', {
      ref: contentRef,
      class: 'scrollable-content',
    }, slots.default?.())

    onMounted(() => {
      updateContentHeight()
    })

    return () => h(ScrollView, {
      ref: scrollableRef,
      scrollY: props.enabledY ?? true,
      scrollX: props.enabledX ?? false,
      style: {
        ...buildDimensionStyles(props),
      },
      refresherBackground: 'transparent',
      refresherTriggered: state.refreshing,
      refresherEnabled: props.refreshable ?? false, // props.onPullDownRefresh !== undefined,
      onScrolltoupper: () => {
      },
      onScrolltolower: () => {
        if (platform.h5) return
        emit('bottomReached')
      },
      onRefresherrefresh: async () => {
        state.refreshing = true
        emit('refresh', refreshCallback)
      },
      onScroll: ({ detail }: any) => {
        const scrolled = detail.scrollTop
        if (!platform.h5) return
        if (state.contentHeight === 0) return
        checkBottomReached(scrolled)
      },
      onTouchstart: ({touches: { 0: touch }}: TouchEvent) => {
        if (!platform.h5) return
        if (!props.refreshable) return
        state.touched = touch.clientY
      },
      onTouchmove: ({touches: { 0: touch }}: TouchEvent) => {
        if (!platform.h5) return
        if (!props.refreshable) return
        state.dragged = Math.min(
          touch.clientY - state.touched,
          REFRESH_INDICATOR_HEIGHT
        )
      },
      onTouchend: ({touches: { 0: touch }}: TouchEvent) => {
        if (!platform.h5) return
        if (!props.refreshable) return
        if (shouldTriggerRefresh()) {
          startRefreshing()
        } else {
          clearRefreshing()
        }
      }
    }, {
      default: () => platform.h5
        ? [
            indicator(),
            content(),
          ]
        : [ 
            content(),
          ]
    })
  }
})
