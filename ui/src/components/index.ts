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
export * from './files'
export * from './upload'
export * from './number'
export * from './divider'
export * from './button-group'
export * from './text'

import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm, NsDisplay } from './form'
import { NsInput, NsDateInput, NsDateRangeInput, NsMobileInput, NsIdInput, NsTextarea, NsNumberInput, NsMonthInput, NsYearInput } from './input'
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
import { NsPopover, NsPopoverConfirm } from './popover'
import { NsFacts } from './facts'
import { NsFiles } from './files'
import { NsUpload, NsCropUpload } from './upload'
import { NsTimeline } from './timeline'
import { NsDivider } from './divider'
import { NsNumber } from './number'
import { NsButtonGroup } from './button-group'
import { NsText } from './text'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsDateInput,
  NsDateRangeInput,
  NsMonthInput,
  NsYearInput,
  NsMobileInput,
  NsIdInput,
  NsTextarea,
  NsNumberInput,
  NsSwitch,
  NsForm,
  NsDisplay,
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
  NsFiles,
  NsUpload,
  NsNumber,
  NsCropUpload,
  NsTable,
  NsPopover,
  NsPopoverConfirm,
  NsTimeline,
  NsDivider,
  NsButtonGroup,
  NsText
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
