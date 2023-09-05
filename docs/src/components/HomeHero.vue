<template>
  <div class="home-hero flex flex-col align-center justify-center">
    <h1>Nutshell</h1>
    <p class="subline">前端标准组件库</p>
  </div>
</template>
<style lang="scss">
.home-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 0;
    background-image: url(/images/gradient-circle-green.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    transform: translate3d(0, -64%, 0);
    z-index: -1;
  }
  h1 {
    font-size: 60px;
    background: -webkit-linear-gradient(315deg, var(--ns-primary) 25%, var(--ns-secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subline {
    color: #004cff;
  }
}
</style>