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

import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm } from './form'
import { NsInput } from './input'
import { NsSelect } from './select'
import { NsCheckbox } from './checkbox'
import { NsRating } from './rating'
import { NsRow, NsCol } from './flex'
import { NsChip } from './chip'
import { NsIcon } from './icon'
import { NsTable } from './table'
import { NsDialog } from './dialog'
import { NsDropdown } from './dropdown'
import { NsTabs, NsTabsPane } from './tabs'
import { NsCard } from './card'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsForm,
  NsSelect,
  NsCheckbox,
  NsRating,
  NsRow,
  NsCol,
  NsChip,
  NsIcon,
  NsTable,
  NsDialog,
  NsDropdown,
  NsTabs,
  NsTabsPane,
  NsCard,
}

export default components