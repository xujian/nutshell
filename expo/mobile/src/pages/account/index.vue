<template>
  <ns-page class="account-page">
    <ns-page-header
      color-mode="dark"
      class="account-header"
      title="大道云 Pro"
      :minimal="false"
      texture="https://simple.shensi.tech/motions/wave.svg"
      :style="{'--d': d}">
      <div class="avatar row align-center justify-start">
        <div class="west col px-sm">
          <img src="https://ddjf-test-oss.ddjf.info/user-central/photo-1718094978288438524.jpeg" />
        </div>
        <div class="east col px-sm">
          <h2>王大地</h2>
          <p class="caption">186****8200</p>
        </div>
      </div>
    </ns-page-header>
    <ns-page-content>
      <ns-menu :items="menu1Items" />
      <ns-menu :items="menu2Items" />
    </ns-page-content>
  </ns-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useTabbar } from '@uxda/appkit'

const width = ref(375),
  height = ref(196),
  d = computed(() => [
    `"M0 ${height.value - 20}`,
    `V0H${width.value}`,
    `V${height.value - 20}`,
    `C${width.value},${height.value - 20} ${width.value - 20},${height.value} ${width.value / 2},${height.value}`,
    `C20,${height.value} 0,${height.value - 20} 0,${height.value - 20}`,
    'Z"'
    ].join('')
  )

const menu1Items = [
  {
    label: 'AI 审批记录',
    icon: 'https://cdn.ddjf.com/static/images/customer-center/my-star-icon.png',
    link: '/pages/account/approvals',
  }
]

const menu2Items = [
  {
    label: '条款与协议',
    icon: 'https://cdn.ddjf.com/static/images/customer-center/my-term-icon.png',
  },
  {
    label: '切换账号',
    icon: 'https://cdn.ddjf.com/static/images/customer-center/my-account-icon.png',
  },
  {
    label: '联系我们',
    caption: '15521135411',
    icon: 'https://cdn.ddjf.com/static/images/customer-center/my-contact-icon.png',
  },
  {
    label: '退出登录',
    icon: 'https://cdn.ddjf.com/static/images/customer-center/my-logout-icon.png',
  }
]

onMounted(() => {
  const { setTab } = useTabbar()
  setTab('account')
})
</script>

<style lang="scss">
.account-page {
  .account-header {
    clip-path: path(var(--d));
  }
  .avatar {
    padding-bottom: 20px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 32px;
    }
    h2 {
      font-size: 20px;
      font-weight: 500;
    }
    .caption {
      font-size: 14px;
    }
  }
}
</style>
