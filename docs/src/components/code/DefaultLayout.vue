<template>
  <div class="code-editor-layout flex flex-row">
    <div class="preview flex-col">
      <slot name="preview"></slot>
    </div>
    <div class="editor flex-col">
      <slot name="editor"></slot>
    </div>
  </div>
</template>
<style lang="scss">
.code-editor-layout {
  border: 1px solid var(--ns-stroke);
  border-radius: 10px;
  background-color: #00000022;
  min-height: 320px;
  max-height: 600px;
  .editor {
    width: 50%;
    padding: 1em;
    padding-left: 0;
    border-left: 1px solid var(--ns-stroke);
  }
  .preview {
    width: 50%;
    padding: 1em;
  }
}
</style>