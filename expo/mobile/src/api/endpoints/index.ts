import {
  endpoints as approvalsEnpoints,
  translates as approvalsTranslates,
  transforms as approvalsTransforms,
 } from './approvals'

const endpoints = {
   ...approvalsEnpoints,
 },
 translates = {
   ...approvalsTranslates,
 },
 transforms = {
   ...approvalsTransforms,
 }

export {
 endpoints,
 translates,
 transforms,
}
