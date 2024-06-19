import { Button } from './button'
import { Input, DateInput } from './input'
import { Chip } from './chip'
import { Icon } from './icon'
import { Select } from './select'
import { Divider } from './divider'
import { Menu } from './menu'
import { Tabs } from './tabs'
import { Facts } from './facts'
import { VendorComponent } from '../../../shared'

const components: Record<string, VendorComponent> = {
  // @ts-ignore
  Button,
  // @ts-ignore
  Input,
  DateInput,
  // @ts-ignore
  Chip,
  // @ts-ignore
  Icon,
  Select,
  // @ts-ignore
  Divider,
  Menu,
  Tabs,
  Facts,
}

export default components
