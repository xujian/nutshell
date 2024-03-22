export * from './app'
export * from './button'
export * from './input'
export * from './switch'
export * from './form'
export * from './select'
export * from './checkbox'
export * from './rating'
export * from './flex'
export * from './chip'
export * from './icon'
export * from './dialog'
export * from './dropdown'
export * from './tabs'
export * from './tabbar'
export * from './card'
export * from './list'
export * from './menu'
// move table to the last for
// table uses other basic components
export * from './stepper'
export * from './drawer'
export * from './radio'
export * from './table'
export * from './empty'
export * from './pagination'
export * from './repeator'
export * from './facts'
export * from './popover'
export * from './timeline'

import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm } from './form'
import { NsInput, NsDateInput, NsDateRangeInput, NsMobileInput, NsIdInput } from './input'
import { NsSwitch } from './switch'
import { NsSelect, NsCascadingSelect, NsMultipleSelect } from './select'
import { NsCheckbox } from './checkbox'
import { NsRating, NsRatingInput } from './rating'
import { NsRow, NsCol } from './flex'
import { NsChip, NsChips } from './chip'
import { NsIcon } from './icon'
import { NsDialog } from './dialog'
import { NsDropdown } from './dropdown'
import { NsTabs, NsTabsItem } from './tabs'
import { NsTabbar } from './tabbar'
import { NsCard, NsCardTitle } from './card'
import { NsList } from './list'
import { NsMenu } from './menu'
import { NsStepper } from './stepper'
import { NsDrawer } from './drawer'
import { NsRadio, NsRadioGroup } from './radio'
import { NsEmpty } from './empty'
import { NsEditable } from './editable'
import { NsPagination } from './pagination'
import { NsRepeator } from './repeator'
import { NsTable, NsTableColumn, NsTableColumnSelector } from './table'
import { NsPopover } from './popover'
import { NsFacts } from './facts'
import { NsTimeline } from './timeline'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsDateInput,
  NsDateRangeInput,
  NsMobileInput,
  NsIdInput,
  NsSwitch,
  NsForm,
  NsSelect,
  NsMultipleSelect,
  NsCascadingSelect,
  NsCheckbox,
  NsRating,
  NsRatingInput,
  NsRow,
  NsCol,
  NsChip,
  NsChips,
  NsIcon,
  NsTableColumn,
  NsTableColumnSelector,
  NsDialog,
  NsDropdown,
  NsTabs,
  NsTabsItem,
  NsTabbar,
  NsCard,
  NsCardTitle,
  NsList,
  NsMenu,
  NsStepper,
  NsDrawer,
  NsRadio,
  NsRadioGroup,
  NsPagination,
  NsEmpty,
  NsEditable,
  NsRepeator,
  NsFacts,
  NsTable,
  NsPopover,
  NsTimeline,
}

const properties = Object.fromEntries(
  Object.entries(components).map(([name, component]) => {
    return [
      name,
      // @ts-ignore
      component.props
    ]
  })
)

export { components, properties }
