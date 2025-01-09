import { components } from './components/all'

const names = Object.keys(components)

export default Object.fromEntries(names.map((n) => [n, 1]))
