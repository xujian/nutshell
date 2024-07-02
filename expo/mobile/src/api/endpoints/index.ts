import {
  endpoints as approvalsEnpoints,
  translates as approvalsTranslates,
  transforms as approvalsTransforms,
 } from './approvals'

 import {
  endpoints as productsEnpoints,
  translates as productsTranslates,
  transforms as productsTransforms,
 } from './products'

const endpoints = {
   ...approvalsEnpoints,
   ...productsEnpoints,
 },
 translates = {
   ...approvalsTranslates,
   ...productsTranslates,
 },
 transforms = {
   ...approvalsTransforms,
   ...productsTransforms,
 }

export {
 endpoints,
 translates,
 transforms,
}
