<template>
  <div class="mobile-mockup">
    <div class="device iphone"
      :class="[model, {realistic}]">
      <div class="screen">
        <div class="viewport">
          <iframe class="iframe" allowTransparency="true"
            :src="url"></iframe>
        </div>
        <div class="status"></div>
        <div class="bottombar"></div>
      </div>
      <div class="notch"></div>
      <div class="dynamic-island"></div>
      <div class="left-buttons"></div>
      <div class="right-buttons"></div>
      <div class="side-antennas"></div>
      <div class="top-bottom-antennas"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PhoneModel } from '@uxda/nutshell'

export type MobileMockupProps = {
  /**
   * 手机型号
   */
  model?: PhoneModel,
  realistic?: boolean,
  url: string
}

const props = withDefaults(
  defineProps<MobileMockupProps>(),
  {
    model: 'iphone-14'
  }
)
</script>

<style lang="scss">
.mobile-mockup {
  width: 432px;
  height: 886px; // Configuration

  $phone-screen-width: 390px;
  // $phone-screen-width: $phone-width ;
  $phone-screen-height: 844px;
  // $phone-screen-height: $phone-height - ($phone-outer-bezel-size * 2) - ($phone-inner-bezel-size * 2);
  $phone-screen-border-radius: 40px;

  $black: #1f1f1f;

  $phone-outer-bezel-size: 5px;
  $phone-inner-bezel-size: 16px;
  $phone-outer-bezel-border-radius: $phone-screen-border-radius + $phone-inner-bezel-size;

  $phone-width: $phone-screen-width + ($phone-outer-bezel-size * 2) + ($phone-inner-bezel-size * 2);
  $phone-height: $phone-screen-height + ($phone-outer-bezel-size * 2) + ($phone-inner-bezel-size * 2);

  $phone-viewport-distance-from-screen-top: 0px;
  $phone-viewport-distance-from-screen-bottom: 0px;

  $phone-button-width: 3px;
  $phone-button-offset: 2px;
  $phone-button-border-radius: 2px;

  $phone-volume-up-button-height: 68px;
  $phone-volume-up-button-distance-from-top: 204px;
  $phone-volume-down-button-height: 68px;
  $phone-volume-down-button-offset-from-volume-up: 85px;
  $phone-switch-button-height: 34px;
  $phone-switch-button-offset-from-volume-up: 64px;
  $phone-power-button-height: 107px;
  $phone-power-button-distance-from-top: 227px;

  $phone-notch-width: 211px;
  $phone-notch-height: 47px;
  $phone-notch-border-radius: 22.5px;

  $phone-speaker-width: 47px;
  $phone-speaker-height: 9px;
  $phone-speaker-border-radius: 4.5px;
  $phone-speaker-distance-from-inner-bezel: 23px;

  $phone-camera-size: 17px;
  $phone-camera-distance-from-notch-top: 19px;
  $phone-camera-distance-from-notch-left: 141px;

  $phone-antenna-size: 9px;
  $phone-antenna-offset-from-corner: 88px;

  $phone-bottombar-width: 148px;
  $phone-bottombar-height: 5px;
  $phone-bottombar-border-radius: 2.5px;
  $phone-bottombar-distance-from-screen-bottom: 7px;

  $phone-dynamic-island-pad: 11px;
  $phone-dynamic-island-width: 125px;
  $phone-dynamic-island-height: 37px;
  $phone-dynamic-island-border-radius: 18.5px;

  // use https://yoksel.github.io/url-encoder/ to edit and convert svgs
  // and https://jakearchibald.github.io/svgomg/ to optimize before conversion
  $phone-top-icons-height: 31px;
  $phone-top-icons-base64-svg: url("data:image/svg+xml,%3Csvg width='391' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M348.2 21.71c0-1.1.9-2 2-2h14.17a2 2 0 012 2v4.57a2 2 0 01-2 2H350.2a2 2 0 01-2-2v-4.57z' fill='%23020202'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M350.53 18.85a3.15 3.15 0 00-3.15 3.15v4a3.15 3.15 0 003.15 3.15h13.5a3.15 3.15 0 003.15-3.15v-4a3.15 3.15 0 00-3.15-3.15h-13.5zm-4 3.15a4 4 0 014-4h13.5a4 4 0 014 4v4a4 4 0 01-4 4h-13.5a4 4 0 01-4-4v-4z' fill='%23979797'/%3E%3Cpath d='M368.87 26.43a2.57 2.57 0 001.66-2.43c0-1.12-.7-2.07-1.66-2.43v4.86z' fill='%23979797'/%3E%3Cpath d='M340.2 28.03c-.33.49-.8.85-1.41 1.1-.6.23-1.3.35-2.1.35a3.85 3.85 0 01-3.62-2.2 5.64 5.64 0 01-.54-2.44v-.87c0-1.5.35-2.66 1.05-3.48a3.67 3.67 0 012.95-1.24c1.04 0 1.88.27 2.51.8a3.46 3.46 0 011.16 2.26h-1.3c-.25-1.32-1.04-1.98-2.36-1.98-.88 0-1.55.31-2 .93-.45.61-.68 1.5-.69 2.68v.81c0 1.12.26 2 .77 2.67.51.66 1.2.98 2.07.98.5 0 .92-.05 1.3-.16.36-.11.67-.3.9-.55v-2.24h-2.3v-1.07h3.61v3.65zM324.89 24.35l.5-4.96h5.1v1.17h-4.02l-.3 2.71a3.21 3.21 0 011.66-.43c.9 0 1.63.3 2.16.9.53.6.8 1.4.8 2.43a3.4 3.4 0 01-.84 2.42c-.55.6-1.32.89-2.31.89-.88 0-1.6-.25-2.16-.73a2.92 2.92 0 01-.95-2.03h1.2c.08.57.28 1 .6 1.3.34.28.77.42 1.3.42.6 0 1.06-.2 1.39-.6.34-.4.5-.95.5-1.66 0-.66-.18-1.2-.54-1.6-.36-.4-.84-.6-1.44-.6-.56 0-.99.11-1.3.36l-.34.27-1.01-.26zM315.8 18.86c0-.48.31-.86.69-.86h1.36c.38 0 .68.38.68.86v10.28c0 .48-.3.86-.68.86h-1.36c-.38 0-.68-.38-.68-.86V18.86zM311.72 21.43c0-.47.3-.86.68-.86h1.36c.38 0 .68.39.68.86v7.71c0 .48-.3.86-.68.86h-1.36c-.38 0-.68-.38-.68-.86v-7.71zM307.63 24c0-.47.3-.86.68-.86h1.36c.38 0 .68.39.68.86v5.14c0 .48-.3.86-.68.86h-1.36c-.38 0-.69-.38-.69-.86V24zM303.53 26.57c0-.47.3-.86.69-.86h1.36c.38 0 .68.39.68.86v2.57c0 .48-.3.86-.68.86h-1.36c-.38 0-.69-.38-.69-.86v-2.57zM62.56 31h-8.39v-1.17l4.43-4.92c.66-.75 1.1-1.35 1.36-1.81.25-.47.37-.95.37-1.45 0-.67-.2-1.22-.6-1.65-.4-.42-.95-.64-1.62-.64-.8 0-1.44.23-1.89.7-.45.45-.67 1.1-.67 1.91h-1.62c0-1.17.37-2.13 1.13-2.85a4.23 4.23 0 013.05-1.1c1.19 0 2.13.32 2.82.95.7.62 1.04 1.45 1.04 2.49 0 1.25-.8 2.75-2.41 4.5l-3.43 3.71h6.43V31zM50.93 26.7h1.77v1.33h-1.77V31h-1.64v-2.97h-5.82v-.96l5.73-8.87h1.73v8.5zm-5.62 0h3.98v-6.27l-.19.35-3.79 5.92zM39.82 30.15c0-.28.08-.52.25-.7.17-.2.42-.29.75-.29.34 0 .59.1.76.28.17.2.26.43.26.7 0 .28-.09.5-.26.68-.17.19-.42.28-.76.28-.33 0-.58-.1-.75-.28a.97.97 0 01-.25-.67zm0-7.76c0-.28.09-.52.25-.7.17-.2.43-.29.76-.29s.59.1.76.28c.17.2.26.43.26.7 0 .28-.09.5-.26.68-.17.19-.43.28-.76.28s-.59-.1-.76-.28a.97.97 0 01-.24-.67zM36.46 26.7h1.78v1.33h-1.78V31h-1.63v-2.97H29v-.96l5.73-8.87h1.73v8.5zm-5.61 0h3.98v-6.27l-.2.35-3.78 5.92z' fill='%23020202'/%3E%3C/svg%3E");
  .iphone {
    // outer bezel
    position: relative;
    z-index: 2;
    width: 100%;
    margin: auto;
    height: 0;
    padding-bottom: $phone-height;
    box-sizing: content-box;
    border-radius: $phone-outer-bezel-border-radius;
    // inner bezel
    &::after {
      content: '';
      position: absolute;
      z-index: 3;
      left: $phone-outer-bezel-size;
      right: $phone-outer-bezel-size;
      top: $phone-outer-bezel-size;
      bottom: $phone-outer-bezel-size;
      border-radius: $phone-outer-bezel-border-radius;
      background: $black;
    }
    // screen
    .screen {
      position: absolute;
      z-index: 4;
      left: $phone-outer-bezel-size + $phone-inner-bezel-size;
      right: $phone-outer-bezel-size + $phone-inner-bezel-size;
      top: $phone-outer-bezel-size + $phone-inner-bezel-size;
      bottom: $phone-outer-bezel-size + $phone-inner-bezel-size;
      border-radius: $phone-screen-border-radius;
      background: #fff;
      overflow: hidden;
    }
    // notch background
    .notch {
      position: absolute;
      z-index: 10;
      width: $phone-notch-width;
      height: $phone-notch-height;
      top: $phone-outer-bezel-size;
      left: 50%;
      margin-left: calc($phone-notch-width / -2);
      border-bottom-left-radius: $phone-notch-border-radius;
      border-bottom-right-radius: $phone-notch-border-radius;
      background: $black;
      // speaker grill
      &::before {
        content: '';
        position: absolute;
        width:  $phone-speaker-width;
        height: $phone-speaker-height;
        top: $phone-speaker-distance-from-inner-bezel;
        left: 50%;
        margin-left: calc($phone-speaker-width / -2);
        border-radius: $phone-speaker-border-radius;
        background: #030303;
      }
      // camera circle
      &::after {
        content: '';
        position: absolute;
        width: $phone-camera-size;
        height: $phone-camera-size;
        top: $phone-camera-distance-from-notch-top;
        left: $phone-camera-distance-from-notch-left;
        border-radius: 50%;
        background: #030303;
      }
    }
    .dynamic-island {
      position: absolute;
      z-index: 10;
      height: fit-content;
      width: $phone-dynamic-island-width;
      height: $phone-dynamic-island-height;
      border-radius: $phone-dynamic-island-border-radius;
      left: 50%;
      top: $phone-outer-bezel-size + $phone-inner-bezel-size + $phone-dynamic-island-pad;
      margin-left: calc($phone-dynamic-island-width / -2);
      background-color: #000;
    }
    // viewport
    .viewport {
      position: absolute;
      z-index: 7;
      top: $phone-viewport-distance-from-screen-top;
      left: 0;
      right: 0;
      bottom: $phone-viewport-distance-from-screen-bottom;
      overflow: hidden;
      border-top: 1px solid #e3e4e8;
      border-bottom: 1px solid #e3e4e8;
      background: #fff;
    }
    .iframe {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0 none;
    }
    // time, coverage, battery
    .status {
      position: absolute;
      z-index: 7;
      width: 100%;
      height: $phone-top-icons-height;
      top: 0;
      left: 0;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: $phone-top-icons-base64-svg;
    }
    .bottombar {
      position: absolute;
      bottom: $phone-bottombar-distance-from-screen-bottom;
      left: 50%;
      width: $phone-bottombar-width;
      height: $phone-bottombar-height;
      margin-left: calc($phone-bottombar-width / -2);
      border-radius: $phone-bottombar-border-radius;
      background: $black;
      z-index: 10;
    }
    .notch {
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
    &.realistic {
      background:
        linear-gradient(90deg,
          rgba(31, 31, 31, 0.25) 0%,
          rgba(31, 31, 31, 0) 63.54%,
          rgba(31, 31, 31, 0) 100%),
        linear-gradient(180deg,
          #232323 0%,
          rgba(35, 35, 35, 0) 7.29%,
          rgba(35, 35, 35, 0) 92.71%,
          #232323 100%),
        #A4A6A8;
      // volume up button (middle left button)
      .left-buttons {
        position: absolute;
        z-index: 2;
        width: $phone-button-width;
        height: $phone-volume-up-button-height;
        left: $phone-button-offset * -1;
        top: $phone-volume-up-button-distance-from-top;
        border-top-left-radius: $phone-button-border-radius;
        border-bottom-left-radius: $phone-button-border-radius;
        background:
          linear-gradient(270deg,
            rgba(31, 31, 31, 0.25) 0%,
            rgba(31, 31, 31, 0) 63.54%,
            rgba(31, 31, 31, 0) 100%),
          linear-gradient(180deg, #232323 0%,
            rgba(35, 35, 35, 0) 11.79%,
            rgba(35, 35, 35, 0) 88.21%,
            #232323 100%), #A4A6A8;
        // switch (top left button)
        &::before {
          content: '';
          position: absolute;
          top: $phone-switch-button-offset-from-volume-up * -1;
          left: 0;
          right: 0;
          width: 100%;
          height: $phone-switch-button-height;
          border-top-left-radius: $phone-button-border-radius;
          border-bottom-left-radius: $phone-button-border-radius;
          background:
            linear-gradient(270deg, rgba(31, 31, 31, 0.25) 0%, rgba(31, 31, 31, 0) 63.54%, rgba(31, 31, 31, 0) 100%),
            linear-gradient(180deg, #232323 0%, rgba(35, 35, 35, 0) 20.74%, rgba(35, 35, 35, 0) 79.26%, #232323 100%),
            #A4A6A8;
        }
        // volume down button (bottom left button)
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: $phone-volume-down-button-offset-from-volume-up;
          left: 0;
          right: 0;
          border-top-left-radius: $phone-button-border-radius;
          border-bottom-left-radius: $phone-button-border-radius;
          background:
            linear-gradient(270deg, rgba(31, 31, 31, 0.25) 0%, rgba(31, 31, 31, 0) 63.54%, rgba(31, 31, 31, 0) 100%),
            linear-gradient(180deg, #232323 0%, rgba(35, 35, 35, 0) 11.79%, rgba(35, 35, 35, 0) 88.21%, #232323 100%), #A4A6A8;
        }
      }
      // power button (right button)
      .right-buttons {
        position: absolute;
        z-index: 2;
        width: $phone-button-width;
        height: $phone-power-button-height;
        right: $phone-button-offset * -1;
        top: $phone-power-button-distance-from-top;
        border-top-right-radius: $phone-button-border-radius;
        border-bottom-right-radius: $phone-button-border-radius;
        background:
          linear-gradient(90deg,
            rgba(31, 31, 31, 0.25) 0%,
            rgba(31, 31, 31, 0) 63.54%,
            rgba(31, 31, 31, 0) 100%),
          linear-gradient(180deg,
            #232323 0%,
            rgba(35, 35, 35, 0) 7.29%,
            rgba(35, 35, 35, 0) 92.71%,
            #232323 100%),
          #A4A6A8;
      }
      .side-antennas {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        // top left and right antenna
        &::before {
          content: '';
          position: absolute;
          top: $phone-antenna-offset-from-corner;
          left: 0;
          width: 100%;
          height: $phone-antenna-size;
          background: linear-gradient(to right,
              rgba(122, 122, 122, 1) 0%,
              rgba(122, 122, 122, 0) 0.9195%,
              rgba(122, 122, 122, 0) 99.0804%,
              rgba(122, 122, 122, 1) 100%) #3F3E3E;
        }

        // bottom left and right antenna
        &::after {
          content: '';
          position: absolute;
          bottom: $phone-antenna-offset-from-corner;
          left: 0;
          width: 100%;
          height: $phone-antenna-size;
          background: linear-gradient(to right,
            rgba(122, 122, 122, 1) 0%,
            rgba(122, 122, 122, 0) 0.9195%,
            rgba(122, 122, 122, 0) 99.0804%,
            rgba(122, 122, 122, 1) 100%) #3F3E3E;
        }
      }
      // top and bottom antennas wrapper
      .top-bottom-antennas {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        // top right antenna
        &::before {
          content: '';
          position: absolute;
          top: 0;
          right: $phone-antenna-offset-from-corner;
          width: $phone-antenna-size;
          height: 50%;
          background: linear-gradient(to bottom,
              rgba(122, 122, 122, 1) 0%,
              rgba(122, 122, 122, 0) 0.6756%,
              rgba(122, 122, 122, 0) 100%) #3F3E3E;
        }

        // bottom left antenna
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: $phone-antenna-offset-from-corner;
          width: $phone-antenna-size;
          height: 50%;
          background: linear-gradient(to top,
              rgba(122, 122, 122, 1) 0%,
              rgba(122, 122, 122, 0) 0.6756%,
              rgba(122, 122, 122, 0) 100%) #3F3E3E;
        }
      }
    }
  }
  .iphone-x {
    .dynamic-island {
      display: none;
    }
  }
  .iphone-14 {
    .notch {
      display: none;
    }
  }
}
</style>
