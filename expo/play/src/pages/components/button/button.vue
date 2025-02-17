<template>
  <ns-page>
    <ns-page-header title="按钮"
      :blur="10" reveal has-back-button />
    <ns-page-content>
      <h2>Size</h2>
      <size-cases class="breakout" v-slot="{size}">
        <ns-button color="primary"
          class="with-measure measure-height"
          :size label="确定" />
      </size-cases>
      <h2>Color</h2>
      <color-cases class="breakout" v-slot="{color}">
        <ns-button
          :color
          label="确定" />
      </color-cases>
      <h2>Variants</h2>
      <p class="caption">形态</p>
      <variant-cases v-slot="{variant}" class="breakout column">
        <ns-row align="start" wrap :gap="10">
          <ns-button v-for="(color) in colors"
            :key="color"
            :color
            :variant label="创建订单"></ns-button>
        </ns-row>
      </variant-cases>
      <p>&nbsp;</p>
      <h2>带图标</h2>
      <ns-row>
        <ns-button
          variant="plain"
          icon="https://simple.shensi.tech/icons/pdf.svg"
          label="证件识别" />
        <ns-button
          color="primary"
          icon="https://cdn.ddjf.com/static/images/ai-approve-mini/scan.png"
          label="证件识别" />
      </ns-row>
      <h2>按钮的排列</h2>
      <ns-card class="sample-card" title="卡片" fill="#fff" stroke="neutral">
        <template #footer>
          <ns-row justify="end">
            <ns-button variant="outlined">取消</ns-button>
            <ns-button color="primary">保存</ns-button>
          </ns-row>
        </template>
      </ns-card>
      <p class="caption">向右对齐</p>
      <p>&nbsp;</p>
      <ns-card class="sample-card" title="卡片" fill="#fff" stroke="neutral">
        <template #footer>
          <ns-row justify="center">
            <ns-button variant="outlined">取消</ns-button>
            <ns-button color="primary">保存</ns-button>
          </ns-row>
        </template>
      </ns-card>
      <p class="caption">居中</p>
      <p>&nbsp;</p>
      <ns-card class="sample-card" title="卡片" fill="#fff" stroke="neutral">
        <template #footer>
          <ns-row justify="stretch">
            <ns-button color="primary">申请</ns-button>
          </ns-row>
        </template>
      </ns-card>
      <p class="caption">横向填满</p>
      <p>&nbsp;</p>
      <ns-card class="sample-card" title="卡片" fill="#fff" stroke="neutral">
        <template #footer>
          <ns-row justify="stretch">
            <ns-button variant="outlined shrink">取消</ns-button>
            <ns-button color="primary">申请</ns-button>
          </ns-row>
        </template>
      </ns-card>
      <p class="caption">控制空间占用</p>
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { brands } from '@uxda/nutshell/taro'
const colors = brands //.slice(0, 3)
</script>

