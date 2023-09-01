export * from './app'
export * from './button'
export * from './input'
export * from './select'
export * from './flex'
export * from './chip'
export * from './icon'
// move table to the last for
// table uses other basic components
export * from './table'
export * from './dialog'

import { NsApp } from './app'
import { NsButton } from './button'
import { NsInput } from './input'
import { NsSelect } from './select'
import { NsRow, NsCol } from './flex'
import { NsChip } from './chip'
import { NsIcon } from './icon'
import { NsTable } from './table'
import { NsDialog } from './dialog'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsSelect,
  NsRow,
  NsCol,
  NsChip,
  NsIcon,
  NsTable,
  NsDialog,
}

export default components