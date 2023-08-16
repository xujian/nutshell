<script setup lang="ts">
const onClick = (...args: any[]) => {
  console.log('ns-button-------onClick', args)
}
</script>

<template>
  <div class="welcome">
    <h1>Nutshell Desktop Expo</h1>
    <ns-row>
      <ns-col span="12">
        <ns-button type="primary"
          size="sm"
          width="100"
          color="#ff9900"
          disabled
          label="Press" @click="onClick" />
      </ns-col>
      <ns-col span="12">
        <ns-input type="text" label="客户名称" placeholder="客户名称" />
    </ns-col>
  </ns-row>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
