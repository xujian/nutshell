<template>
  <div class="page design-props-page">
    <h1 class="mt-lg">Design Props</h1>
    <p class="caption">视觉风格属性组</p>
    <p>视觉效果是现代UI设计的核心,
      赏心悦目的视觉效果来自于<b>色彩</b>、<b>线条</b>、<b>字型</b>、<b>透明度</b>、<b>渐变</b>、<b>动画</b>的组合与映衬。</p>
    <p>&nbsp;</p>
    <p><b>视觉风格属性组</b></p>
    <ul>
      <li><b>填色</b>(:fill)</li>
      <li><b>面色</b>(:surface)</li>
      <li><b>字色</b>(:foreground)</li>
      <li><b>渐变底色</b>(:gradient)</li>
      <li><b>底图</b>(:texture)</li>
      <li><b>图案</b>(:pattern)</li>
      <li><b>圆角</b>(:round)</li>
      <li><b>倒角</b>(:radius)</li>
      <li><b>边线</b>(:stroke)</li>
      <li><b>线宽</b>(:thick)</li>
      <li><b>模糊</b>(:blur)</li>
      <li><b>提亮</b>(:brightness)</li>
    </ul>
    <p>组件应用以上属性时, 将会为组件生产必要的 class/style, 通过样式的叠加形成视觉效果。</p>
    <p>&nbsp;</p>
    <p>组件库得益于最尖端的浏览器样式技术, 使用</p>
    <p>&nbsp;</p>
    <h2>自动深浅色控制</h2>
    <p>组件库内置了对字色(前景色)和填色的底层控制。对于可填色组件，自动产生字色(前景色)。</p>
    <p>&nbsp;</p>
    <story file="design/color-scheme" />
    <p>&nbsp;</p>
    <p>上面的按钮均没有明确设定<b>字色(foreground)</b>属性值</p>
    <p>&nbsp;</p>
    <p class="caption">* 组件库使用 SASS 与 JavaScript 的能力，计算填色数值的亮度，并依据亮度确定 --foreground 取值。</p>
    <p class="caption">* 字色(--foreground)取值为预先定义的深色/浅色 (--ns-text-light/--ns-text-dark)</p>
    <p class="caption">* 渐变色一样可以控制</p>
    <h3>与深色浅色有关的属性</h3>
    <ul>
      <li><b>colorScheme:</b> 强制定义组件为 <b>dark</b>(深色)/<b>light</b>(浅色)</li>
      <li><b>foreground:</b> 明确定义字色</li>
    </ul>
    <p>&nbsp;</p>
    <story file="design/color-scheme-props" />
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss">
.design-props-page {
}
</style>
