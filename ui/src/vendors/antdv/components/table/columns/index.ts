import chip from './chip'
import chips from './chips'
import rating from './rating'
import button from './button'
import icon from './icon'
import datetime from './datetime'
import currency from './currency'
import crypto from './crypto'
import custom from './custom'
import { CustomColumnRender } from '../../../../../components/table/TableColumn'

const columnCustomRenders: Record<string, CustomColumnRender> = {
  chip,
  // @ts-ignore
  chips,
  // @ts-ignore
  rating,
  button,
  icon,
  datetime,
  currency,
  crypto,
  custom
}

export default columnCustomRenders
