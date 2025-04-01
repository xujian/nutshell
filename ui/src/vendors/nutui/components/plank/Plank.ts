import { defineComponent, h } from 'vue'
import { plankProps, plankSlots } from '../../../../components/plank'
import { marginProps } from '../../../../utils'

export const Plank = defineComponent({
  name: 'NutuiPlank',
  props: {
    ...plankProps,
    ...marginProps
  },
  slots: plankSlots,
  setup (props, { slots }) {
    return () => h(NutCell, {
        title: props.title,
        subTitle: props.caption,
        desc: props.content
      },
      {
        ...slots.content ? { desc: slots.content} : {},
      }
    )
  }
})
