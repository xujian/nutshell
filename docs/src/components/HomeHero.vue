<template>
  <div class="home-hero r-md flex flex-column align-center justify-center mb-lg">
    <h1>Nutshell</h1>
    <p class="subline">前端标准组件库</p>
  </div>
</template>
<style lang="scss">
.home-hero {
  position: relative;
  width: 100%;
  aspect-ratio: 21/9;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(/motions/clouds/motion.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    z-index: 2;
    font-size: 80px;
    color: #ffffff99;
    // background: -webkit-linear-gradient(315deg, var(--ns-primary) 25%, var(--ns-secondary));
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  .subline {
    color: #b4b4b488;
    z-index: 2;
  }
}
</style>
