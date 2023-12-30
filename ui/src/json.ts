import { components } from './components'

const names = Object.keys(components)

export default Object.fromEntries(names.map((n) => [n, 1]))
