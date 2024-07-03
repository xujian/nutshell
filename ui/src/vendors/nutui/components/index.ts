import { Button } from './button'
import { Input, DateInput, DateRangeInput } from './input'
import { Chip, Chips } from './chip'
import { Icon } from './icon'
import { Select } from './select'
import { Divider } from './divider'
import { Menu } from './menu'
import { Tabs } from './tabs'
import { Facts, FactsItem } from './facts'
import { Form } from './form'
import { Checkbox } from './checkbox'
import { Page } from './page'
import { Dialog } from './dialog'
import { Drawer } from './drawer'
import { Sheet } from './sheet'
import { RadioGroup } from './radio'
import { VendorComponent } from '../../../shared'

const components: Record<string, VendorComponent> = {
  // @ts-ignore
  Button,
  // @ts-ignore
  Input,
  // @ts-ignore
  DateInput,
  // @ts-ignore
  DateRangeInput,
  // @ts-ignore
  Chip,
  // @ts-ignore
  Chips,
  // @ts-ignore
  Icon,
  Select,
  // @ts-ignore
  Divider,
  Menu,
  Tabs,
  Facts,
  FactsItem,
  // @ts-ignore
  Form,
  Checkbox,
  // @ts-ignore
  Page,
  Dialog,
  Drawer,
  Sheet,
  // @ts-ignore
  RadioGroup,
}

export default components
