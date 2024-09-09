import { mergeEndpoints } from '@uxda/nutshell'

import {
  endpoints as home,
} from './home'

import {
  endpoints as approvals,
 } from './approvals'

import {
  endpoints as products,
 } from './products'

import {
  endpoints as clients,
} from './clients'

export const { endpoints, translates, transforms } = mergeEndpoints([
  home,
  approvals,
  products,
  clients,
])
