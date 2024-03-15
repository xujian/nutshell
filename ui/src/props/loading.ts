import { buildProps } from '../utils/private/props'

export const useLoadingProps = buildProps({
  loading: {
    type: Boolean,
    default: false
  }
})
