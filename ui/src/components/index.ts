export * from './app'
export * from './button'
export * from './input'
export * from './form'
export * from './select'
export * from './checkbox'
export * from './rating'
export * from './flex'
export * from './chip'
export * from './icon'
export * from './dialog'
export * from './dropdown'
// move table to the last for
// table uses other basic components
export * from './table'
export * from './tabs'
export * from './card'
export * from './list'

import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm } from './form'
import { NsInput, NsDateInput, NsMobileInput, NsIdInput } from './input'
import { NsSelect, NsCascadingSelect, NsMultipleSelect } from './select'
import { NsCheckbox } from './checkbox'
import { NsRating, NsRatingInput } from './rating'
import { NsRow, NsCol } from './flex'
import { NsChip, NsChips } from './chip'
import { NsIcon } from './icon'
import { NsTable } from './table'
import { NsDialog } from './dialog'
import { NsDropdown } from './dropdown'
import { NsTabs, NsTabsPane } from './tabs'
import { NsCard, NsCardTitle } from './card'
import { NsList } from './list'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsDateInput,
  NsMobileInput,
  NsIdInput,
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
  NsTable,
  NsDialog,
  NsDropdown,
  NsTabs,
  NsTabsPane,
  NsCard,
  NsCardTitle,
  NsList
}

export default components