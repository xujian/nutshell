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

 import {
  endpoints as homeEnpoints,
  translates as homeTranslates,
  transforms as homeTransforms,
 } from './home'

const endpoints = {
   ...approvalsEnpoints,
   ...productsEnpoints,
   ...clientsEnpoints,
   ...homeEnpoints,
 },
 translates = {
   ...approvalsTranslates,
   ...productsTranslates,
   ...clientsTranslates,
   ...homeTranslates,
 },
 transforms = {
   ...approvalsTransforms,
   ...productsTransforms,
   ...clientsTransforms,
   ...homeTransforms,
 }

export {
 endpoints,
 translates,
 transforms,
}
