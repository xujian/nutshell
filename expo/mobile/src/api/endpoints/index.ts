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

 import {
  endpoints as clientsEnpoints,
  translates as clientsTranslates,
  transforms as clientsTransforms,
 } from './clients'

const endpoints = {
   ...approvalsEnpoints,
   ...productsEnpoints,
   ...clientsEnpoints,
 },
 translates = {
   ...approvalsTranslates,
   ...productsTranslates,
   ...clientsTranslates,
 },
 transforms = {
   ...approvalsTransforms,
   ...productsTransforms,
   ...clientsTransforms,
 }

export {
 endpoints,
 translates,
 transforms,
}
