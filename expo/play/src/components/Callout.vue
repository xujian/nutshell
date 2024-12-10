<template>
  <div class="callout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.callout {
  border-radius: 10px;
  border-style: solid;
  border-color: #34C759;
  border-width: 1px;
  background-color: #34C75966;
  color: #148430;
  font-size: 12px;
  padding: var(--ns-spacing);
  background-image: url(https://simple.shensi.tech/icons/callout.svg);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 8px;
  padding-left: 36px;
}
</style>
