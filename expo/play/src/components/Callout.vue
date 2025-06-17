<template>
  <ns-card class="callout my-md"
    fill="#34C75999"
    :brightness="1.5"
    :blur="50" stroke="#34C759">
    <slot></slot>
  </ns-card>
</template>

<style lang="scss">
.callout {
  .card-body {
  color: #0b5c1f;
  font-size: 12px;
  padding: var(--ns-spacing);
  margin: var(--ns-spacing) 0;
  background-image: url(https://simple.shensi.tech/icons/callout.svg);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 8px;
  padding-left: 36px;
  color-interpolation-filters: auto;
  .b {
    font-weight: bold;
  }
  code {
    font-weight: bold;
      color: #7a6e0c;
    }
  }
}
</style>
