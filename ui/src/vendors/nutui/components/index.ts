import { Button } from './button'
import { Input, DateInput } from './input'
import { Chip } from './chip'
import { Icon } from './icon'
import { Select } from './select'
import { Divider } from './divider'
import { VendorComponent } from '../../../shared'

const components: Record<string, VendorComponent> = {
  // @ts-ignore
  Button,
  Input,
  DateInput,
  Chip,
  Icon,
  Select,
  // @ts-ignore
  Divider,
}

export default components
