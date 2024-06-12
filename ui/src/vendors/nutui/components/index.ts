import { Button } from './button'
import { Input, DateInput } from './input'
import { Chip } from './chip'
import { Icon } from './icon'
import { Select } from './select'
import { Divider } from './divider'
import { Menu } from './menu'
import { Tabs } from './tabs'
import { VendorComponent } from '../../../shared'

const components: Record<string, VendorComponent> = {
  // @ts-ignore
  Button,
  Input,
  DateInput,
  // @ts-ignore
  Chip,
  Icon,
  Select,
  // @ts-ignore
  Divider,
  Menu,
  Tabs,
}

export default components
