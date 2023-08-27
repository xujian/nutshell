export * from './button'
export * from './input'
export * from './flex'
export * from './chip'
export * from './icon'
// move table to the last for
// table uses other basic components
export * from './table'

import { NsButton } from './button'
import { NsInput } from './input'
import { NsRow, NsCol } from './flex'
import { NsChip } from './chip'
import { NsIcon } from './icon'
import { NsTable } from './table'

const components = {
  NsButton,
  NsInput,
  NsRow,
  NsCol,
  NsChip,
  NsIcon,
  NsTable,
}

export default components