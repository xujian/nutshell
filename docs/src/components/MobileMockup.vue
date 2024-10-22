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
        <div class="time">9:41</div>
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
  $phone-screen-border-radius: 55px;

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

  $phone-status-svg: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM5IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMTM5IDE0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ0Ljg2NSAyLjAzMzAyQzQ0Ljg2NSAxLjM5OTk3IDQ0LjM4NzUgMC44ODY3OTEgNDMuNzk4NCAwLjg4Njc5MUg0Mi43MzE3QzQyLjE0MjYgMC44ODY3OTEgNDEuNjY1IDEuMzk5OTcgNDEuNjY1IDIuMDMzMDJWMTEuOTY3QzQxLjY2NSAxMi42IDQyLjE0MjYgMTMuMTEzMiA0Mi43MzE3IDEzLjExMzJINDMuNzk4NEM0NC4zODc1IDEzLjExMzIgNDQuODY1IDEyLjYgNDQuODY1IDExLjk2N1YyLjAzMzAyWk0zNy40MzA5IDMuMzMyMDdIMzguNDk3NkMzOS4wODY3IDMuMzMyMDcgMzkuNTY0MyAzLjg1NzU3IDM5LjU2NDMgNC41MDU4MVYxMS45Mzk1QzM5LjU2NDMgMTIuNTg3NyAzOS4wODY3IDEzLjExMzIgMzguNDk3NiAxMy4xMTMySDM3LjQzMDlDMzYuODQxOCAxMy4xMTMyIDM2LjM2NDMgMTIuNTg3NyAzNi4zNjQzIDExLjkzOTVWNC41MDU4MUMzNi4zNjQzIDMuODU3NTcgMzYuODQxOCAzLjMzMjA3IDM3LjQzMDkgMy4zMzIwN1pNMzMuMDk5MiA1Ljk4MTEySDMyLjAzMjVDMzEuNDQzNCA1Ljk4MTEyIDMwLjk2NTggNi41MTMzMSAzMC45NjU4IDcuMTY5OFYxMS45MjQ1QzMwLjk2NTggMTIuNTgxIDMxLjQ0MzQgMTMuMTEzMiAzMi4wMzI1IDEzLjExMzJIMzMuMDk5MkMzMy42ODgzIDEzLjExMzIgMzQuMTY1OCAxMi41ODEgMzQuMTY1OCAxMS45MjQ1VjcuMTY5OEMzNC4xNjU4IDYuNTEzMzEgMzMuNjg4MyA1Ljk4MTEyIDMzLjA5OTIgNS45ODExMlpNMjcuNzk4NCA4LjQyNjQxSDI2LjczMTdDMjYuMTQyNiA4LjQyNjQxIDI1LjY2NSA4Ljk1MSAyNS42NjUgOS41OTgxMVYxMS45NDE1QzI1LjY2NSAxMi41ODg2IDI2LjE0MjYgMTMuMTEzMiAyNi43MzE3IDEzLjExMzJIMjcuNzk4NEMyOC4zODc1IDEzLjExMzIgMjguODY1IDEyLjU4ODYgMjguODY1IDExLjk0MTVWOS41OTgxMUMyOC44NjUgOC45NTEgMjguMzg3NSA4LjQyNjQxIDI3Ljc5ODQgOC40MjY0MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjAuNDM2NSAzLjMwMjEzQzYyLjkyMzYgMy4zMDIyMyA2NS4zMTU3IDQuMjI0MzIgNjcuMTE4MiA1Ljg3NzhDNjcuMjUzOSA2LjAwNTQ1IDY3LjQ3MDkgNi4wMDM4NCA2Ny42MDQ1IDUuODc0MTlMNjguOTAyIDQuNjEwNzJDNjguOTY5NyA0LjU0NDk2IDY5LjAwNzUgNC40NTU4OCA2OS4wMDY5IDQuMzYzMkM2OS4wMDYzIDQuMjcwNTIgNjguOTY3NSA0LjE4MTg3IDY4Ljg5OSA0LjExNjg4QzY0LjE2OCAtMC4yNTc4MzMgNTYuNzA0MyAtMC4yNTc4MzMgNTEuOTczMyA0LjExNjg4QzUxLjkwNDggNC4xODE4MyA1MS44NjU5IDQuMjcwNDQgNTEuODY1MiA0LjM2MzEzQzUxLjg2NDYgNC40NTU4MSA1MS45MDIzIDQuNTQ0OTEgNTEuOTY5OSA0LjYxMDcyTDUzLjI2NzggNS44NzQxOUM1My40MDE0IDYuMDA0MDQgNTMuNjE4NSA2LjAwNTY1IDUzLjc1NDIgNS44Nzc4QzU1LjU1NjkgNC4yMjQyMSA1Ny45NDkyIDMuMzAyMTIgNjAuNDM2NSAzLjMwMjEzWk02MC40MzMyIDcuNTIyNEM2MS43OTA1IDcuNTIyMzIgNjMuMDk5NCA4LjAzNDA2IDY0LjEwNTUgOC45NTgxOUM2NC4yNDE2IDkuMDg5MzQgNjQuNDU1OSA5LjA4NjUgNjQuNTg4NiA4Ljk1MTc4TDY1Ljg3NTkgNy42MzI0N0M2NS45NDM3IDcuNTYzMjcgNjUuOTgxMyA3LjQ2OTM5IDY1Ljk4MDMgNy4zNzE4NEM2NS45NzkzIDcuMjc0MjkgNjUuOTM5OCA3LjE4MTIxIDY1Ljg3MDcgNy4xMTM0MkM2Mi44MDY4IDQuMjIyNTcgNTguMDYyMSA0LjIyMjU3IDU0Ljk5ODMgNy4xMTM0MkM1NC45MjkxIDcuMTgxMjEgNTQuODg5NiA3LjI3NDM0IDU0Ljg4ODcgNy4zNzE5MkM1NC44ODc4IDcuNDY5NSA1NC45MjU1IDcuNTYzMzcgNTQuOTkzNSA3LjYzMjQ3TDU2LjI4MDQgOC45NTE3OEM1Ni40MTMgOS4wODY1IDU2LjYyNzQgOS4wODkzNCA1Ni43NjM1IDguOTU4MTlDNTcuNzY4OSA4LjAzNDY3IDU5LjA3NjggNy41MjI5NyA2MC40MzMyIDcuNTIyNFpNNjIuOTU3NiAxMC4zMTZDNjIuOTU5NSAxMC40MjEzIDYyLjkyMjUgMTAuNTIyOSA2Mi44NTUyIDEwLjU5NjdMNjAuNjc4NSAxMy4wNTE0QzYwLjYxNDcgMTMuMTIzNiA2MC41Mjc3IDEzLjE2NDIgNjAuNDM2OSAxMy4xNjQyQzYwLjM0NjIgMTMuMTY0MiA2MC4yNTkyIDEzLjEyMzYgNjAuMTk1NCAxMy4wNTE0TDU4LjAxODMgMTAuNTk2N0M1Ny45NTExIDEwLjUyMjggNTcuOTE0MSAxMC40MjEyIDU3LjkxNjEgMTAuMzE1OUM1Ny45MTgxIDEwLjIxMDUgNTcuOTU4OSAxMC4xMTA4IDU4LjAyODkgMTAuMDQwMUM1OS40MTkgOC43MjYyNSA2MS40NTQ5IDguNzI2MjUgNjIuODQ1IDEwLjA0MDFDNjIuOTE0OSAxMC4xMTA4IDYyLjk1NTcgMTAuMjEwNiA2Mi45NTc2IDEwLjMxNloiIGZpbGw9IndoaXRlIi8+CjxyZWN0IG9wYWNpdHk9IjAuMzUiIHg9Ijc2LjUwNjgiIHk9IjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMiIgcng9IjMuOCIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjQiIGQ9Ik0xMDIuMDA3IDUuMjgxMTNWOS4zNTY2QzEwMi44MTIgOS4wMTE0MyAxMDMuMzM1IDguMjA4NDcgMTAzLjMzNSA3LjMxODg2QzEwMy4zMzUgNi40MjkyNiAxMDIuODEyIDUuNjI2MyAxMDIuMDA3IDUuMjgxMTNaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI3OC4wMDY4IiB5PSIyLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSI5IiByeD0iMi41IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
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
    .time,
    .status {
      position: absolute;
      z-index: 7;
      width: 139px;
      height: $phone-dynamic-island-height;
      top: $phone-dynamic-island-pad;
    }
    .time {
      font-family: 'SF Pro';
      font-weight: bold;
      text-align: center;
      width: 139px;
      line-height: $phone-dynamic-island-height;
      color: #fff;
      font-size: 14px;
    }
    .status {
      right: 0;
      background-size: 139px;
      background-repeat: no-repeat;
      background-image: $phone-status-svg;
      background-position: center;
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
