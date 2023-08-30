import { h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'


function dialog (options: DialogOptions) {
  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default dialog