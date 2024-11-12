<template>
  <div class="colomn" v-for="variant in variants">
    <h5>variant="{{ variant }}"</h5>
    <ns-facts square :variant="variant">
      <ns-facts-item label="账户类型">
        监管户
      </ns-facts-item>
      <ns-facts-item label="卡号">
        5187107580699970
      </ns-facts-item>
    </ns-facts>
    <p>&nbsp;</p>
  </div>
</template>

<script lang="ts" setup>
import { variants } from '@uxda/nutshell'
</script>
