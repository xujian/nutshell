import { defineComponent, h, onMounted, onUnmounted, ref, SetupContext } from 'vue'
import { RectDown as RectDownIcon } from '@nutui/icons-vue-taro'
import { dropdownEmits, dropdownProps,
    type DropdownProps
 } from '../../../../components/dropdown'
import { NsButton, NsMenu } from '../../../../components'
import { marginProps } from '../../../../utils'

export const Dropdown = defineComponent({
  name: 'NutuiDropdown',
  props: dropdownProps,
  emits: dropdownEmits,
  setup (props, ctx) {
    const $bus = useBus()

    const menuOpen = ref(false),
      open = (e: Event) => {
        console.log('===dropdown buton click', menuOpen.value)
        menuOpen.value = true
        e.stopImmediatePropagation()
        e.preventDefault()
      },
      close = () => {
        menuOpen.value = false
      }

    const button = () => h(NsButton, {
        class: 'ns-dropdown-button',
        label: props.label,
        color: props.fill || 'primary',
        iconPosition: 'end',
        onClick: open
      }, {
        icon: () => h(RectDownIcon, {
          class: ['icon', 'nutui-icon'],
        }),
      })

    const menu = () => h(NsMenu, {
        items: props.items,
        fill: props.fill || '#fff',
        class: [
          'menu',
        ],
        onClick: () => {
        }
      })

    const onPageClick = () => {
      menuOpen.value = false
    }

    onUnmounted(() => {
      $bus.off('page.click', onPageClick)
    })

    onMounted(() => {
      $bus.on('page.click', onPageClick)
    })

    return () => h('div', {
        class: [
          ...menuOpen.value ? ['open'] : [],
        ],
      }, {
        default: () => [
            button(),
            menu()
          ]
        })
    }
  })
