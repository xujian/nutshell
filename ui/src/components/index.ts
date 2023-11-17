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
export * from './card'
export * from './list'
// move table to the last for
// table uses other basic components
export * from './stepper'
export * from './drawer'
export * from './radio'
export * from './table'
export * from './empty'

import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm } from './form'
import { NsInput, NsDateInput, NsMobileInput, NsIdInput } from './input'
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
import { NsCard, NsCardTitle } from './card'
import { NsList } from './list'
import { NsStepper } from './stepper'
import { NsDrawer } from './drawer'
import { NsRadio, NsRadioGroup } from './radio'
import { NsTable, NsTableColumn } from './table'
import { NsEmpty } from './empty'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsDateInput,
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
  NsDialog,
  NsDropdown,
  NsTabs,
  NsTabsItem,
  NsCard,
  NsCardTitle,
  NsList,
  NsStepper,
  NsDrawer,
  NsRadio,
  NsRadioGroup,
  NsTable,
  NsEmpty
}

export default components
