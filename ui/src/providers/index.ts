const nutuiProvider: Promise<{default: CoreProvider}> = import(
  /* name: 'provider.nutui' */
  './nutui')
const antdvProvider: Promise<{default: CoreProvider}> = import(
  /* name: 'provider.antdv' */
  './antdv')

// import nutui from './nutui'
// import antdv from './antdv'
import { VNode } from 'vue'

/**
 * Nutshell Core Provider
 * 
 */
export interface CoreProvider {
  render: (props) => VNode,
  prepare: (app) => void
}

const providers = {
  nutui: nutuiProvider,
  antdv: antdvProvider
}

export interface ImportedProvider {
  default: CoreProvider
}

export const getProvider: (name: string) => Promise<ImportedProvider>
  = (name: string) => {
    return providers[name || 'nutui']!
  }

export default providers