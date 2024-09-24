<template>
  <div class="mockup-container">
    <div class="iphone">
      <div class="screen">
        <div class="viewport">
          <iframe class="iframe" allowTransparency="true"
            :src="url"></iframe>
        </div>
        <div class="status"></div>
        <div class="bottombar"></div>
      </div>
      <div class="notch"></div>
      <div class="left-buttons"></div>
      <div class="right-buttons"></div>
      <div class="side-antennas"></div>
      <div class="top-bottom-antennas"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>

export type MobileMockupProps = {
  url: string
}

const props = defineProps<MobileMockupProps>()
</script>

<style lang="scss">
.mockup-container {
  width: 433px;
  height: 888px; // Configuration
  $phone-width: 433px; // Do not change these, to make the phone smaller or bigger
  $phone-height: 888px; // Do not change these, to make the phone smaller or bigger

  $phone-outer-bezel-size: 5px;
  $phone-outer-bezel-border-radius: 64px;

  $phone-inner-bezel-size: 16px;
  $phone-inner-bezel-border-radius: 62px;

  $phone-screen-width: $phone-width - ($phone-outer-bezel-size * 2) - ($phone-inner-bezel-size * 2);
  $phone-screen-height: $phone-height - ($phone-outer-bezel-size * 2) - ($phone-inner-bezel-size * 2);
  $phone-screen-border-radius: 46px;

  $phone-viewport-distance-from-screen-top: 39px;
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

  // use https://yoksel.github.io/url-encoder/ to edit and convert svgs
  // and https://jakearchibald.github.io/svgomg/ to optimize before conversion
  $phone-top-icons-height: 31px;
  $phone-top-icons-base64-svg: url("data:image/svg+xml,%3Csvg width='391' height='32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M348.2 21.71c0-1.1.9-2 2-2h14.17a2 2 0 012 2v4.57a2 2 0 01-2 2H350.2a2 2 0 01-2-2v-4.57z' fill='%23020202'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M350.53 18.85a3.15 3.15 0 00-3.15 3.15v4a3.15 3.15 0 003.15 3.15h13.5a3.15 3.15 0 003.15-3.15v-4a3.15 3.15 0 00-3.15-3.15h-13.5zm-4 3.15a4 4 0 014-4h13.5a4 4 0 014 4v4a4 4 0 01-4 4h-13.5a4 4 0 01-4-4v-4z' fill='%23979797'/%3E%3Cpath d='M368.87 26.43a2.57 2.57 0 001.66-2.43c0-1.12-.7-2.07-1.66-2.43v4.86z' fill='%23979797'/%3E%3Cpath d='M340.2 28.03c-.33.49-.8.85-1.41 1.1-.6.23-1.3.35-2.1.35a3.85 3.85 0 01-3.62-2.2 5.64 5.64 0 01-.54-2.44v-.87c0-1.5.35-2.66 1.05-3.48a3.67 3.67 0 012.95-1.24c1.04 0 1.88.27 2.51.8a3.46 3.46 0 011.16 2.26h-1.3c-.25-1.32-1.04-1.98-2.36-1.98-.88 0-1.55.31-2 .93-.45.61-.68 1.5-.69 2.68v.81c0 1.12.26 2 .77 2.67.51.66 1.2.98 2.07.98.5 0 .92-.05 1.3-.16.36-.11.67-.3.9-.55v-2.24h-2.3v-1.07h3.61v3.65zM324.89 24.35l.5-4.96h5.1v1.17h-4.02l-.3 2.71a3.21 3.21 0 011.66-.43c.9 0 1.63.3 2.16.9.53.6.8 1.4.8 2.43a3.4 3.4 0 01-.84 2.42c-.55.6-1.32.89-2.31.89-.88 0-1.6-.25-2.16-.73a2.92 2.92 0 01-.95-2.03h1.2c.08.57.28 1 .6 1.3.34.28.77.42 1.3.42.6 0 1.06-.2 1.39-.6.34-.4.5-.95.5-1.66 0-.66-.18-1.2-.54-1.6-.36-.4-.84-.6-1.44-.6-.56 0-.99.11-1.3.36l-.34.27-1.01-.26zM315.8 18.86c0-.48.31-.86.69-.86h1.36c.38 0 .68.38.68.86v10.28c0 .48-.3.86-.68.86h-1.36c-.38 0-.68-.38-.68-.86V18.86zM311.72 21.43c0-.47.3-.86.68-.86h1.36c.38 0 .68.39.68.86v7.71c0 .48-.3.86-.68.86h-1.36c-.38 0-.68-.38-.68-.86v-7.71zM307.63 24c0-.47.3-.86.68-.86h1.36c.38 0 .68.39.68.86v5.14c0 .48-.3.86-.68.86h-1.36c-.38 0-.69-.38-.69-.86V24zM303.53 26.57c0-.47.3-.86.69-.86h1.36c.38 0 .68.39.68.86v2.57c0 .48-.3.86-.68.86h-1.36c-.38 0-.69-.38-.69-.86v-2.57zM62.56 31h-8.39v-1.17l4.43-4.92c.66-.75 1.1-1.35 1.36-1.81.25-.47.37-.95.37-1.45 0-.67-.2-1.22-.6-1.65-.4-.42-.95-.64-1.62-.64-.8 0-1.44.23-1.89.7-.45.45-.67 1.1-.67 1.91h-1.62c0-1.17.37-2.13 1.13-2.85a4.23 4.23 0 013.05-1.1c1.19 0 2.13.32 2.82.95.7.62 1.04 1.45 1.04 2.49 0 1.25-.8 2.75-2.41 4.5l-3.43 3.71h6.43V31zM50.93 26.7h1.77v1.33h-1.77V31h-1.64v-2.97h-5.82v-.96l5.73-8.87h1.73v8.5zm-5.62 0h3.98v-6.27l-.19.35-3.79 5.92zM39.82 30.15c0-.28.08-.52.25-.7.17-.2.42-.29.75-.29.34 0 .59.1.76.28.17.2.26.43.26.7 0 .28-.09.5-.26.68-.17.19-.42.28-.76.28-.33 0-.58-.1-.75-.28a.97.97 0 01-.25-.67zm0-7.76c0-.28.09-.52.25-.7.17-.2.43-.29.76-.29s.59.1.76.28c.17.2.26.43.26.7 0 .28-.09.5-.26.68-.17.19-.43.28-.76.28s-.59-.1-.76-.28a.97.97 0 01-.24-.67zM36.46 26.7h1.78v1.33h-1.78V31h-1.63v-2.97H29v-.96l5.73-8.87h1.73v8.5zm-5.61 0h3.98v-6.27l-.2.35-3.78 5.92z' fill='%23020202'/%3E%3C/svg%3E");

  $phone-url-width: 373px;
  $phone-url-height: 38px;
  $phone-url-border-radius: 19px;
  $phone-url-distance-from-screen-top: 47px;
  $phone-url-base64-svg: url("data:image/svg+xml,%3Csvg width='373' height='38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M144.4 20.86c0 1.31-.3 2.36-.9 3.13a2.85 2.85 0 01-2.4 1.17c-1 0-1.77-.36-2.32-1.07l-.1.91h-1.71V13h1.9v4.36a2.75 2.75 0 012.2-.97 2.9 2.9 0 012.44 1.15c.59.76.88 1.84.88 3.21v.1zm-1.9-.16c0-.92-.17-1.6-.5-2.07-.31-.46-.78-.68-1.4-.68-.82 0-1.4.35-1.73 1.07v3.49c.34.73.92 1.1 1.75 1.1.6 0 1.05-.22 1.37-.66.32-.45.5-1.12.5-2.01v-.24zM151.1 24.17c-.55.66-1.34.99-2.37.99-.91 0-1.6-.27-2.08-.8-.47-.54-.7-1.32-.7-2.34v-5.47h1.9V22c0 1.07.44 1.6 1.33 1.6.92 0 1.54-.32 1.87-.98v-6.07h1.9V25h-1.8l-.04-.83zM162.3 20.86c0 1.31-.3 2.36-.89 3.13a2.85 2.85 0 01-2.41 1.17c-.99 0-1.76-.36-2.31-1.07l-.1.91h-1.72V13h1.9v4.36a2.75 2.75 0 012.21-.97 2.9 2.9 0 012.43 1.15c.6.76.89 1.84.89 3.21v.1zm-1.9-.16c0-.92-.16-1.6-.49-2.07-.32-.46-.79-.68-1.4-.68-.82 0-1.4.35-1.74 1.07v3.49c.34.73.92 1.1 1.75 1.1.6 0 1.06-.22 1.38-.66.32-.45.49-1.12.5-2.01v-.24zM171.31 20.86c0 1.31-.3 2.36-.88 3.13a2.85 2.85 0 01-2.41 1.17c-1 0-1.77-.36-2.32-1.07l-.1.91h-1.7V13h1.89v4.36a2.75 2.75 0 012.21-.97 2.9 2.9 0 012.43 1.15c.59.76.88 1.84.88 3.21v.1zm-1.9-.16c0-.92-.16-1.6-.48-2.07-.32-.46-.8-.68-1.4-.68-.83 0-1.4.35-1.74 1.07v3.49c.34.73.92 1.1 1.75 1.1.6 0 1.05-.22 1.37-.66.33-.45.5-1.12.5-2.01v-.24zM174.93 25h-1.9V13h1.9v12zM180.73 25.16c-1.2 0-2.18-.38-2.93-1.14a4.14 4.14 0 01-1.12-3.03v-.23c0-.85.16-1.6.48-2.26a3.63 3.63 0 013.34-2.1 3.3 3.3 0 012.67 1.1c.63.73.95 1.77.95 3.1v.77h-5.53c.06.7.3 1.25.7 1.66.41.4.93.61 1.55.61.87 0 1.57-.35 2.12-1.05l1.02.97c-.33.5-.79.9-1.35 1.18-.57.28-1.2.42-1.9.42zm-.23-7.25c-.52 0-.94.19-1.27.55-.31.37-.52.87-.6 1.52h3.61v-.14a2.29 2.29 0 00-.5-1.43c-.3-.33-.71-.5-1.24-.5zM186.27 25v-7.05h-1.3v-1.4h1.3v-.78c0-.93.26-1.66.78-2.17a3 3 0 012.18-.76c.34 0 .7.04 1.07.14l-.05 1.48c-.2-.04-.45-.06-.73-.06-.9 0-1.36.46-1.36 1.4v.75h1.72v1.4h-1.72V25h-1.9zM194.8 25.16c-1.2 0-2.18-.38-2.93-1.14a4.14 4.14 0 01-1.11-3.03v-.23c0-.85.16-1.6.48-2.26a3.63 3.63 0 013.34-2.1 3.3 3.3 0 012.67 1.1c.63.73.94 1.77.94 3.1v.77h-5.52c.06.7.3 1.25.7 1.66.4.4.92.61 1.54.61.87 0 1.58-.35 2.13-1.05l1.02.97c-.34.5-.79.9-1.36 1.18-.56.28-1.2.42-1.9.42zm-.22-7.25c-.52 0-.95.19-1.27.55-.31.37-.52.87-.6 1.52h3.61v-.14a2.29 2.29 0 00-.5-1.43c-.3-.33-.72-.5-1.24-.5zM202.55 22.6l1.79-6.05h1.96L203.37 25h-1.65l-2.95-8.45h1.96l1.82 6.04zM211.1 25.16c-1.2 0-2.18-.38-2.93-1.14a4.14 4.14 0 01-1.11-3.03v-.23c0-.85.16-1.6.48-2.26a3.63 3.63 0 013.34-2.1 3.3 3.3 0 012.67 1.1c.63.73.94 1.77.94 3.1v.77h-5.52c.06.7.29 1.25.7 1.66.4.4.92.61 1.54.61.87 0 1.58-.35 2.13-1.05l1.02.97c-.34.5-.8.9-1.36 1.18-.56.28-1.2.42-1.9.42zm-.22-7.25c-.53 0-.95.19-1.27.55-.32.37-.52.87-.61 1.52h3.62v-.14a2.29 2.29 0 00-.51-1.43c-.3-.33-.7-.5-1.24-.5zM220.4 18.28a4.7 4.7 0 00-.78-.06c-.87 0-1.45.33-1.75 1V25h-1.9v-8.45h1.81l.05.94c.46-.73 1.1-1.1 1.9-1.1.28 0 .5.04.68.11l-.01 1.78zM221.42 23c.36 0 .63.1.82.3.2.2.3.45.3.75s-.1.55-.3.75c-.2.19-.46.29-.82.29-.34 0-.6-.1-.8-.3a.99.99 0 01-.3-.74c0-.3.1-.55.29-.75.2-.2.46-.3.81-.3zM228.18 23.64c.47 0 .87-.14 1.18-.41.31-.28.48-.62.5-1.03h1.79a2.8 2.8 0 01-.5 1.48c-.3.45-.72.81-1.24 1.08-.53.26-1.1.4-1.7.4a3.6 3.6 0 01-2.82-1.15 4.55 4.55 0 01-1.04-3.17v-.2c0-1.29.34-2.31 1.03-3.09a3.56 3.56 0 012.81-1.16c1.01 0 1.83.3 2.46.88.63.59.97 1.36 1 2.3h-1.8a1.72 1.72 0 00-.5-1.19c-.3-.31-.7-.47-1.17-.47-.62 0-1.09.23-1.42.68-.34.44-.5 1.11-.51 2.02v.3c0 .92.16 1.6.5 2.06.33.45.8.67 1.43.67zM232.73 20.7c0-.83.16-1.58.49-2.24.33-.67.79-1.18 1.38-1.53.6-.36 1.28-.54 2.05-.54 1.14 0 2.06.37 2.77 1.1.72.74 1.1 1.71 1.16 2.92v.45a5 5 0 01-.48 2.23 3.52 3.52 0 01-1.37 1.53 3.9 3.9 0 01-2.07.54c-1.19 0-2.14-.4-2.86-1.2a4.59 4.59 0 01-1.07-3.17v-.1zm1.9.16c0 .87.18 1.55.53 2.05.36.49.86.73 1.5.73.65 0 1.14-.25 1.5-.75.36-.5.53-1.23.53-2.2 0-.85-.18-1.53-.55-2.03-.36-.5-.86-.75-1.5-.75-.61 0-1.1.25-1.47.75a3.67 3.67 0 00-.54 2.2zM243.98 16.55l.05.88c.6-.7 1.4-1.04 2.44-1.04 1.13 0 1.9.43 2.32 1.3a3 3 0 012.6-1.3c.93 0 1.62.26 2.07.77.46.52.7 1.28.7 2.29V25h-1.9v-5.5c0-.54-.11-.93-.35-1.18-.23-.25-.62-.37-1.16-.37-.43 0-.79.11-1.06.35-.27.23-.46.53-.57.9V25h-1.9v-5.56c-.02-1-.53-1.5-1.52-1.5-.76 0-1.3.32-1.61.93V25h-1.9v-8.45h1.79z' fill='%2300A73E'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M116.5 18v-1.5a3.5 3.5 0 117 0V18c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7a1.5 1.5 0 01-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5zm1-1.5a2.5 2.5 0 115 0V18h-5v-1.5z' fill='%2300A73E'/%3E%3C/svg%3E");

  $phone-bottom-icons-height: 27px;
  $phone-bottom-icons-distance-from-screen-bottom: 40px;
  $phone-bottom-icons-base64-svg: url("data:image/svg+xml,%3Csvg width='391' height='27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M35.7 5.8a1 1 0 010 1.4l-7.29 7.3 7.3 7.3a1 1 0 01-1.42 1.4l-8-8a1 1 0 010-1.4l8-8a1 1 0 011.42 0zM110.3 23.2a1 1 0 010-1.4l7.29-7.3-7.3-7.3a1 1 0 111.42-1.4l8 8a1 1 0 010 1.4l-8 8a1 1 0 01-1.42 0z' fill='%23DEDDE0'/%3E%3Cpath d='M195.12.08a1 1 0 00-.33.21l-3 3a1 1 0 101.42 1.42l1.29-1.3V13a1 1 0 002 0V3.41l1.3 1.3a1 1 0 101.4-1.42l-3-3a1 1 0 00-1.08-.21z' fill='%23DEDDE0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M188 8.5a1 1 0 00-1 1v12a1 1 0 001 1h15a1 1 0 001-1v-12a1 1 0 00-1-1h-2.5a1 1 0 010-2h2.5a3 3 0 013 3v12a3 3 0 01-3 3h-15a3 3 0 01-3-3v-12a3 3 0 013-3h2.5a1 1 0 010 2H188z' fill='%23DEDDE0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M349 2.5a3 3 0 00-3 3v13a3 3 0 003 3h3v2a3 3 0 003 3h13a3 3 0 003-3v-13a3 3 0 00-3-3h-3v-2a3 3 0 00-3-3h-13zm14 5v-2a1 1 0 00-1-1h-13a1 1 0 00-1 1v13a1 1 0 001 1h3v-9a3 3 0 013-3h8zm-9 16a1 1 0 001 1h13a1 1 0 001-1v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13zM275 23.24c-.32-.1-.63-.19-.96-.27-.96-.25-2.12-.47-3.04-.47-.92 0-2.08.22-3.04.47-.95.24-1.88.56-2.8.88l-.16.05V5.8c.81-.28 1.63-.55 2.47-.76 1-.25 2.35-.53 3.53-.53 1.18 0 2.53.28 3.53.53.5.13.99.27 1.47.42.48-.15.97-.3 1.47-.42 1-.25 2.35-.53 3.53-.53 1.18 0 2.53.28 3.53.53.84.21 1.66.48 2.47.76V23.9l-.15-.05c-.93-.32-1.86-.64-2.8-.88-.97-.25-2.13-.47-3.05-.47-.92 0-2.08.22-3.04.47l-.96.27v.26h-2v-.26zm-8-2.09V7.23c1.3-.38 2.65-.73 4-.73s2.7.35 4 .73v13.92c-1.3-.35-2.65-.65-4-.65s-2.7.3-4 .65zm10 0c1.3-.35 2.65-.65 4-.65s2.7.3 4 .65V7.23c-1.3-.38-2.65-.73-4-.73s-2.7.35-4 .73v13.92z' fill='%23047CF6'/%3E%3C/svg%3E");


  // Make entering values easier
  @function phonePixelToPercentage($valueInPixels, $targetWidth: false, $targetHeight: false, $separator: "/") {
    @if ($targetWidth and $targetHeight) {
      @return percentage($valueInPixels / $targetWidth) unquote($separator) percentage($valueInPixels / $targetHeight);
    }
    @else {
      @if $targetWidth {
        @return percentage($valueInPixels / $targetWidth);
      }
      @else {
        @return percentage($valueInPixels / $targetHeight);
      }
    }
  }
  .iphone {
    // outer bezel
    position: relative;
    z-index: 2;
    width: 100%;
    margin: auto;
    height: 0;
    padding-bottom: percentage($phone-height / $phone-width);
    box-sizing: content-box;
    border-radius: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-border-radius,
        $targetWidth: $phone-width,
        $targetHeight: $phone-height );
    background:
      linear-gradient(180deg,
        rgba(98, 99, 102, 0) 0%,
        #626366 1.69%, #626366 3.38%,
        rgba(98, 99, 102, 0) 9.01%,
        rgba(98, 99, 102, 0) 90.99%,
        #626366 96.62%, #626366 98.61%,
        rgba(98, 99, 102, 0) 100%),
      #949699;
    // inner bezel
    &::after {
      content: '';
      position: absolute;
      z-index: 3;
      left: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-size,
          $targetWidth: $phone-width );
      right: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-size,
          $targetWidth: $phone-width );
      top: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-size,
          $targetHeight: $phone-height );
      bottom: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-size,
          $targetHeight: $phone-height );
      border-radius: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-border-radius,
          $targetWidth: (
          $phone-width - ($phone-outer-bezel-size * 2)),
        $targetHeight: (
          $phone-height - ($phone-outer-bezel-size * 2))
        );
      background: #1F1F1F;
    }
    // screen
    .screen {
      position: absolute;
      z-index: 4;
      left: phonePixelToPercentage($valueInPixels: (
          $phone-outer-bezel-size + $phone-inner-bezel-size),
        $targetWidth: $phone-width
        );
      right: phonePixelToPercentage($valueInPixels: (
          $phone-outer-bezel-size + $phone-inner-bezel-size),
        $targetWidth: $phone-width
        );
      top: phonePixelToPercentage($valueInPixels: (
          $phone-outer-bezel-size + $phone-inner-bezel-size),
        $targetHeight: $phone-height
        );
      bottom: phonePixelToPercentage($valueInPixels: (
          $phone-outer-bezel-size + $phone-inner-bezel-size),
        $targetHeight: $phone-height
        );
      border-radius: phonePixelToPercentage($valueInPixels: $phone-screen-border-radius,
          $targetWidth: $phone-screen-width,
          $targetHeight: $phone-screen-height );
      background: #fff;
      overflow: hidden;
    }
    // volume up button (middle left button)
    .left-buttons {
      position: absolute;
      z-index: 2;
      width: phonePixelToPercentage($valueInPixels: $phone-button-width,
          $targetWidth: $phone-width );
      height: phonePixelToPercentage($valueInPixels: $phone-volume-up-button-height,
          $targetHeight: $phone-height );
      left: phonePixelToPercentage($valueInPixels: (
          $phone-button-offset * -1),
        $targetWidth: $phone-width
        );
      top: phonePixelToPercentage($valueInPixels: $phone-volume-up-button-distance-from-top,
          $targetHeight: $phone-height );
      border-top-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
          $targetWidth: $phone-button-width,
          $targetHeight: $phone-volume-up-button-height,
          $separator: ''
        );
      border-bottom-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
          $targetWidth: $phone-button-width,
          $targetHeight: $phone-volume-up-button-height,
          $separator: ''
        );
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
        top: phonePixelToPercentage($valueInPixels: (
            $phone-switch-button-offset-from-volume-up * -1),
          $targetHeight: $phone-volume-up-button-height
          );
        left: 0;
        right: 0;
        width: 100%;
        height: phonePixelToPercentage($valueInPixels: $phone-switch-button-height,
            $targetHeight: $phone-volume-up-button-height );
        border-top-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
            $targetWidth: $phone-button-width,
            $targetHeight: $phone-switch-button-height,
            $separator: ''
          );
        border-bottom-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
            $targetWidth: $phone-button-width,
            $targetHeight: $phone-switch-button-height,
            $separator: ''
          );
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
        top: phonePixelToPercentage($valueInPixels: $phone-volume-down-button-offset-from-volume-up,
            $targetHeight: $phone-volume-up-button-height );
        left: 0;
        right: 0;
        border-top-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
            $targetWidth: $phone-button-width,
            $targetHeight: $phone-volume-down-button-height,
            $separator: ''
          );
        border-bottom-left-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
            $targetWidth: $phone-button-width,
            $targetHeight: $phone-volume-down-button-height,
            $separator: ''
          );
        background:
          linear-gradient(270deg, rgba(31, 31, 31, 0.25) 0%, rgba(31, 31, 31, 0) 63.54%, rgba(31, 31, 31, 0) 100%),
          linear-gradient(180deg, #232323 0%, rgba(35, 35, 35, 0) 11.79%, rgba(35, 35, 35, 0) 88.21%, #232323 100%), #A4A6A8;
      }
    }
    // power button (right button)
    .right-buttons {
      position: absolute;
      z-index: 2;
      width: phonePixelToPercentage($valueInPixels: $phone-button-width,
          $targetWidth: $phone-width,
        );
      height: phonePixelToPercentage($valueInPixels: $phone-power-button-height,
          $targetHeight: $phone-height,
        );
      right: phonePixelToPercentage($valueInPixels: (
          $phone-button-offset * -1),
        $targetWidth: $phone-width
        );
      top: phonePixelToPercentage($valueInPixels: $phone-power-button-distance-from-top,
          $targetHeight: $phone-height,
        );
      border-top-right-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
          $targetWidth: $phone-button-width,
          $targetHeight: $phone-power-button-height,
          $separator: ''
        );
      border-bottom-right-radius: phonePixelToPercentage($valueInPixels: $phone-button-border-radius,
          $targetWidth: $phone-button-width,
          $targetHeight: $phone-power-button-height,
          $separator: ''
        );
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
    // notch background
    .notch {
      position: absolute;
      z-index: 10;
      width: phonePixelToPercentage($valueInPixels: $phone-notch-width,
          $targetWidth: $phone-width );
      height: phonePixelToPercentage($valueInPixels: $phone-notch-height,
          $targetWidth: $phone-height );
      top: phonePixelToPercentage($valueInPixels: $phone-outer-bezel-size,
          $targetWidth: $phone-height );
      left: 50%;
      margin-left: phonePixelToPercentage($valueInPixels: (
          $phone-notch-width / -2),
        $targetWidth: $phone-width
        );
      border-bottom-left-radius: phonePixelToPercentage($valueInPixels: $phone-notch-border-radius,
          $targetWidth: $phone-notch-width,
          $targetHeight: $phone-notch-height,
          $separator: ''
        );
      border-bottom-right-radius: phonePixelToPercentage($valueInPixels: $phone-notch-border-radius,
          $targetWidth: $phone-notch-width,
          $targetHeight: $phone-notch-height,
          $separator: ''
        );
      background: #1F1F1F;

      // speaker grill
      &::before {
        content: '';
        position: absolute;
        width: phonePixelToPercentage($valueInPixels: $phone-speaker-width,
            $targetWidth: $phone-notch-width );
        height: phonePixelToPercentage($valueInPixels: $phone-speaker-height,
            $targetHeight: $phone-notch-height );
        top: phonePixelToPercentage($valueInPixels: $phone-speaker-distance-from-inner-bezel,
            $targetHeight: $phone-notch-height );
        left: 50%;
        margin-left: phonePixelToPercentage($valueInPixels: (
            $phone-speaker-width / -2),
          $targetWidth: $phone-notch-width
          );
        border-radius: phonePixelToPercentage($valueInPixels: $phone-speaker-border-radius,
            $targetWidth: $phone-speaker-width,
            $targetHeight: $phone-speaker-height );
        background: #030303;
      }

      // camera circle
      &::after {
        content: '';
        position: absolute;
        width: phonePixelToPercentage($valueInPixels: $phone-camera-size,
            $targetWidth: $phone-notch-width,
          );
        height: phonePixelToPercentage($valueInPixels: $phone-camera-size,
            $targetHeight: $phone-notch-height,
          );
        top: phonePixelToPercentage($valueInPixels: $phone-camera-distance-from-notch-top,
            $targetHeight: $phone-notch-height,
          );
        left: phonePixelToPercentage($valueInPixels: $phone-camera-distance-from-notch-left,
            $targetWidth: $phone-notch-width,
          );
        border-radius: 50%;
        background: #030303;
      }
    }

    // viewport
    .viewport {
      position: absolute;
      z-index: 7;
      top: phonePixelToPercentage($valueInPixels: $phone-viewport-distance-from-screen-top,
          $targetHeight: $phone-screen-height );
      left: 0;
      right: 0;
      bottom: phonePixelToPercentage($valueInPixels: $phone-viewport-distance-from-screen-bottom,
          $targetHeight: $phone-screen-height );
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
      z-index: 5;
      width: 100%;
      height: phonePixelToPercentage($valueInPixels: $phone-top-icons-height,
          $targetHeight: $phone-screen-height );
      top: 0;
      left: 0;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: $phone-top-icons-base64-svg;
    }
    .bottombar {
      position: absolute;
      bottom: phonePixelToPercentage($valueInPixels: $phone-bottombar-distance-from-screen-bottom,
          $targetHeight: $phone-screen-height );
      left: 50%;
      width: phonePixelToPercentage($valueInPixels: $phone-bottombar-width,
          $targetWidth: $phone-screen-width );
      height: phonePixelToPercentage($valueInPixels: $phone-bottombar-height,
          $targetHeight: $phone-screen-height );
      margin-left: phonePixelToPercentage($valueInPixels: (
          $phone-bottombar-width / -2),
        $targetWidth: $phone-screen-width
        );
      border-radius: phonePixelToPercentage($valueInPixels: $phone-bottombar-border-radius,
          $targetWidth: $phone-bottombar-width,
          $targetHeight: $phone-bottombar-height );
      background: #1F1F1F;
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
        top: phonePixelToPercentage($valueInPixels: $phone-antenna-offset-from-corner,
            $targetHeight: $phone-height );
        left: 0;
        width: 100%;
        height: phonePixelToPercentage($valueInPixels: $phone-antenna-size,
            $targetHeight: $phone-height );
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
        bottom: phonePixelToPercentage($valueInPixels: $phone-antenna-offset-from-corner,
            $targetHeight: $phone-height );
        left: 0;
        width: 100%;
        height: phonePixelToPercentage($valueInPixels: $phone-antenna-size,
            $targetHeight: $phone-height );
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
        right: phonePixelToPercentage($valueInPixels: $phone-antenna-offset-from-corner,
            $targetWidth: $phone-width );
        width: phonePixelToPercentage($valueInPixels: $phone-antenna-size,
            $targetWidth: $phone-width );
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
        left: phonePixelToPercentage($valueInPixels: $phone-antenna-offset-from-corner,
            $targetWidth: $phone-width );
        width: phonePixelToPercentage($valueInPixels: $phone-antenna-size,
            $targetWidth: $phone-width );
        height: 50%;
        background: linear-gradient(to top,
            rgba(122, 122, 122, 1) 0%,
            rgba(122, 122, 122, 0) 0.6756%,
            rgba(122, 122, 122, 0) 100%) #3F3E3E;
      }
    }
  }
}
</style>
