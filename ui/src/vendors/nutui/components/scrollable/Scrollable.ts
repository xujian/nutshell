import { defineComponent, h, ref, SetupContext } from 'vue'
import { scrollableProps, scrollableEmits, scrollableSlots } from '../../../../components/scrollable'
import { buildDimensionStyles } from '../../../../props'

export const Scrollable = defineComponent({
  name: 'NutuiScrollable',
  props: scrollableProps,
  emits: scrollableEmits,
  slots: scrollableSlots,
  inheritAttrs: true,
  setup (props, { slots, emit }) {

    /**
     * display or hide the refresh indicator
     */
    const refreshing = ref(false)
    // console.log('Scrollable<><><><><>', props, props.onPullDownRefresh, props.onBottomReached)

    return () => h('scroll-view', {
      scrollY: props.enabledY ?? true,
      scrollX: props.enabledX ?? false,
      style: {
        ...buildDimensionStyles(props),
      },
      refresherBackground: 'transparent',
      refresherTriggered: refreshing.value,
      refresherEnabled: props.refreshable ?? false, // props.onPullDownRefresh !== undefined,
      onScrolltoupper: () => {
      },
      onScrolltolower: () => {
        emit('bottomReached')
      },
      onRefresherrefresh: async () => {
        refreshing.value = true
        emit('pullDownRefresh')
        setTimeout(() => {
          refreshing.value = false
        }, 500)
      }
    }, slots)
  }
})
