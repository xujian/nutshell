import { NsApp } from './app'
import { NsButton } from './button'
import { NsForm, NsDisplay } from './form'
import { NsInput, NsDateInput, NsDateRangeInput, NsMonthRangeInput,
  NsMobileInput,
  NsIdInput, NsTextarea, NsNumberInput, NsNumberRangeInput,
  NsMonthInput, NsYearInput, NsChipsInput } from './input'
import { NsSwitch, NsSwitchInput } from './switch'
import { NsSelect, NsCascadingSelect, NsMultipleSelect, NsDateSelect } from './select'
import { NsCheckbox, NsCheckboxGroup } from './checkbox'
import { NsRating, NsRatingInput } from './rating'
import { NsRow, NsColumn, NsFlexItem } from './flex'
import { NsChip, NsChips } from './chip'
import { NsIcon } from './icon'
import { NsDialog } from './dialog'
import { NsDropdown } from './dropdown'
import { NsTabs, NsTabsItem } from './tabs'
import { NsTabbar } from './tabbar'
import { NsCard, NsCardTitle } from './card'
import { NsList } from './list'
import { NsMenu } from './menu'
import { NsStepper } from './stepper'
import { NsDrawer } from './drawer'
import { NsSheet } from './sheet'
import { NsRadio, NsRadioGroup } from './radio'
import { NsEmpty } from './empty'
import { NsEditable } from './editable'
import { NsPagination } from './pagination'
import { NsRepeator } from './repeator'
import { NsTable, NsTableColumn, NsTableColumnSelector } from './table'
import { NsPopover, NsPopoverConfirm } from './popover'
import { NsFacts, NsFactsItem } from './facts'
import { NsFiles } from './files'
import { NsUpload, NsCropUpload } from './upload'
import { NsTimeline } from './timeline'
import { NsDivider } from './divider'
import { NsNumber } from './number'
import { NsButtonGroup, NsButtonGroupInput } from './button-group'
import { NsPage, NsPageHeader, NsPageContent, NsPageFooter } from './page'
import { NsSearch } from './search'
import { NsImage } from './image'
import { NsPreview } from './preview'
import { NsAvatar } from './avatar'
import { NsPlank } from './plank'

const components = {
  NsApp,
  NsButton,
  NsInput,
  NsDateInput,
  NsDateRangeInput,
  NsMonthRangeInput,
  NsMonthInput,
  NsYearInput,
  NsMobileInput,
  NsIdInput,
  NsTextarea,
  NsNumberInput,
  NsNumberRangeInput,
  NsChipsInput,
  NsSwitch,
  NsSwitchInput,
  NsForm,
  NsDisplay,
  NsSelect,
  NsMultipleSelect,
  NsDateSelect,
  NsCascadingSelect,
  NsCheckbox,
  NsCheckboxGroup,
  NsRating,
  NsRatingInput,
  NsRow,
  NsColumn,
  NsFlexItem,
  NsChip,
  NsChips,
  NsIcon,
  NsTableColumn,
  NsTableColumnSelector,
  NsDialog,
  NsDropdown,
  NsTabs,
  NsTabsItem,
  NsTabbar,
  NsCard,
  NsCardTitle,
  NsList,
  NsMenu,
  NsStepper,
  NsDrawer,
  NsSheet,
  NsRadio,
  NsRadioGroup,
  NsPagination,
  NsEmpty,
  NsEditable,
  NsRepeator,
  NsFacts,
  NsFactsItem,
  NsFiles,
  NsUpload,
  NsNumber,
  NsCropUpload,
  NsImage,
  NsTable,
  NsPopover,
  NsPopoverConfirm,
  NsTimeline,
  NsDivider,
  NsButtonGroup,
  NsButtonGroupInput,
  NsPage,
  NsPageHeader,
  NsPageContent,
  NsPageFooter,
  NsSearch,
  NsPreview,
  NsAvatar,
  NsPlank
}

const properties = Object.fromEntries(
  Object.entries(components).map(([name, component]) => {
    return [
      name,
      // @ts-ignore
      component.props
    ]
  })
)

export { components, properties }
