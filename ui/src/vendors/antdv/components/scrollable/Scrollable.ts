import { defineComponent, h, onMounted, reactive, ref, SetupContext } from 'vue'
import { NsLoading, scrollableEmits, scrollableProps, ScrollableProps, scrollableSlots } from '../../../../components'
import { buildDimensionStyles } from '../../../../props'

/**
 * Refresh indicator 的高度
 */
const REFRESH_INDICATOR_HEIGHT = 64

/**
 * 下拉刷新触发距离
 */
const REFRESH_TRIGGER_THRESHOLD = 32
/**
 * Simulates a mobile scrollable component
 * * pull down refresh
 * * bottom reached event
 * * scroll event
 * @param props 
 * @param ctx 
 * @returns 
 */
export const Scrollable = defineComponent({
  name: 'AntdvScrollable',
  props: scrollableProps,
  emits: scrollableEmits,
  slots: scrollableSlots,
  inheritAttrs: true,
  setup (props, { slots, emit }) {

    const contentRef = ref<HTMLElement>()
    const scrollableRef = ref<HTMLElement>()
    let forceStopRefreshingTimer = -1

    const state = reactive({
      dragging: false,
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

    const refreshCallback = () => {
      window.clearTimeout(forceStopRefreshingTimer)
      window.setTimeout(() => {
        clearRefreshing()
        updateContentHeight()
      }, 500)
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

    const startRefreshing = () => {
      state.refreshing = true
      state.touched = 0
      state.dragging = false
      state.dragged = REFRESH_INDICATOR_HEIGHT
      emit('refresh', refreshCallback)
      countDownToForceStopRefreshing()
    }

    const clearRefreshing = () => {
      state.refreshing = false
      state.touched = 0
      state.dragging = false
      state.dragged = 0
    }
    
    /**
    * Check distance dragged down
    * 防止误触
    */
   const shouldTriggerRefresh = () => {
     return state.dragged > REFRESH_TRIGGER_THRESHOLD
   }

   const updateContentHeight = () => {
     // @ts-ignore
     state.height = scrollableRef.value?.$el?.clientHeight ?? 0
     state.contentHeight = contentRef.value?.clientHeight ?? 0
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

    const onDragStart = (e: Event) => {
      console.log('onDragStart', e)
    }

    const onDrag = (e: Event) => {
      console.log('onDrag', e)
      e.preventDefault()
    }

    onMounted(() => {
      console.log('onMounted', scrollableRef.value)
    })

    return () => h('div', {
      ref: scrollableRef,
      class: [
        'ns-scrollable',
        state.dragging ? 'dragging' : '',
      ],
      style: {
        ...buildDimensionStyles(props),
        overflowX: props.direction === 'x' ? 'auto' : 'hidden',
        overflowY: props.direction === 'y' ? 'auto' : 'hidden',
      },
      onMousemove: (e: MouseEvent) => {
        if (!props.refreshable) return
        if (!state.dragging) return
        state.dragged = Math.min(
          e.clientY - state.touched,
          REFRESH_INDICATOR_HEIGHT
        )
      },
      onMousedown: ({target, clientY}: MouseEvent) => {
        if (!props.refreshable) return
        // record the clicked point
        state.touched = clientY
        state.dragging = true
      },
      onMouseup: ({target, clientY}: MouseEvent) => {
        if (!props.refreshable) return
        if (shouldTriggerRefresh()) {
          startRefreshing()
        } else {
          clearRefreshing()
        }
      },
      onScroll: (e: Event) => {
        const scrolled = scrollableRef.value?.scrollTop ?? 0
        if (scrolled > state.contentHeight - state.height - 20) {
          emit('bottomReached')
        }
      },
    }, [
      indicator(),
      content(),
    ])
  }
})