<template>
  <ns-button color="#091744" @click="openMobile"
    foreground="#fff"
    size="sm"
    icon="http://simple.shensi.tech/icons/arrow-right-light.svg"
    icon-position="end">移动端</ns-button>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'
import { MobileMockup } from '@/components'

type MobileButtonProps = {
  url: string
}
const props = defineProps<MobileButtonProps>()

const $n = useNutshell()

const openMobile = () => {
  $n.drawer({
    component: MobileMockup,
    width: 480,
    fill: 'transparent',
    props: {
      url: props.url
    }
  })
}

</script>
