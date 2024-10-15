import { Button } from './button'
import { Input, NumberInput, DateInput, DateRangeInput } from './input'
import { Chip, Chips } from './chip'
import { Icon } from './icon'
import { Select, CascadingSelect } from './select'
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
import { Switch } from './switch'
import { Stepper } from './stepper'
import { Rating, RatingInput } from './rating'
import { Timeline } from './timeline'
import { Upload } from './upload'
import { Empty } from './empty'
import { VendorComponent } from '../../../shared'

const components: Record<string, VendorComponent> = {
  // @ts-ignore
  Button,
  // @ts-ignore
  Input,
  // @ts-ignore
  NumberInput,
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
  CascadingSelect,
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
  // @ts-ignore
  Dialog,
  Drawer,
  // @ts-ignore
  Sheet,
  // @ts-ignore
  RadioGroup,
  // @ts-ignore
  Switch,
  Rating,
  RatingInput,
  Stepper,
  Timeline,
  // @ts-ignore
  Upload,
  // @ts-ignore
  Empty,
}

export default components
