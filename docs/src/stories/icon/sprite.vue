<template>
  <ns-row class="icons-list justify-start" gap="sm">
    <div class="icon-container border-sm r-sm round"
      v-for="(name) in icons"
      :key="name"
      @click="() => onIconClick(name)">
      <ns-icon :name="name" />
    </div>
  </ns-row>
</template>

<script lang="ts" setup>
import { useNutshell } from '@uxda/nutshell'
import IconDialog from '../../components/IconDialog.vue'

const $n = useNutshell()

const icons = [
  'home', 'account'
]

const onIconClick = (name: string) => {
  $n.dialog({
    component: IconDialog,
    footer: false,
    width: 320,
    height: 320,
    centered: true,
    props: {
      icon: name
    }
  })
}
</script>

<style lang="scss">
.icons-list {
  width: 100%;
  .icon-container {
    padding: 10px;
    cursor: pointer;
    transition: all .33s;
    &:hover {
      background-color: #ffffff33;
    }
  }
}
</style>
