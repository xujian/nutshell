import nutui from './nutui'
/**
 * Nutshell Core Provider
 * 
 */
export interface CoreProvider {

}

const providers = {
  nutui
}

export const getProvider = (name: string) => providers[name]!

export default providers