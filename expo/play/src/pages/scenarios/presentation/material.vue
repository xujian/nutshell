<template>
  <ns-page fill="#f1f2f4">
    <ns-page-header fill='#fff' title="影像资料" has-back-button reveal :blur="10">
    </ns-page-header>
    <ns-page-content  class="material-content">
      <div class="material-card">
        <div class="material-card-box">
          <div class="type">
            <div class="title">文件名称</div>
            <div class="del-box">
              <img
                v-if="!isDelStatus"
                @click="isDelStatus = !isDelStatus"
                src="https://cdn.ddjf.com/static/images/fnfundkit/m-delete-icon.png" />
              <span v-else @click="cancelDel">完成</span>
            </div>
          </div>
          <div class="file">
            <div class="img-card img-upload" @click="chooseImage()">
              <img
                class="img"
                src="https://cdn.ddjf.com/static/images/fnfundkit/m-upload.png" />
              <div>上传资料</div>
            </div>
            <div v-for="(item, index) in imageList" :key="index" class="img-card">
              <img class="img" :src="getImg(item)" @click.self="openView(item)" />
              <div
                @click.self="item.selected = !item.selected"
                v-show="isDelStatus"
                class="img-checkbox"
                :class="[item.selected ? 'checked' : '']"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="materiral-bottom" v-show="isDelStatus">
        <div class="num">
          已选（
          <span>2</span>
          ）
        </div>
        <ns-button  color="primary" @click="cancelDel" variant="outlined">取消</ns-button>
        <ns-button  color="primary" @click="delFile">
          删除
        </ns-button>
      </div>
    </ns-page-content>
  </ns-page>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref, reactive } from 'vue'

interface FileType {
  applyNo: string
  custNo: string
  fileId: string
  fileIds: string
  fileName: string
  fileSize: number
  fileSuffix: string
  fileType: string
  id: string
  remarks: string
  sortNo: number
  thumbnailUrl: string
  typeNo: string
  url: string
  selected?: boolean // 是否选中
  tempFilePath?: string
}
const isDelStatus = ref<boolean>(false)
const imageList = ref<FileType[]>([
  {
    "id":"420339546114260994",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846475c14bf9a000130125d",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":56701,
    "fileType":"image",
    "sortNo":0,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846475c14bf9a000130125d?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=4934299827c86ddf2a7d796bfb836d29&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846475c14bf9a000130125d?systemCode=fundkit&authKey=4934299827c86ddf2a7d796bfb836d29&width=120&height=120&save=0&protocol=1",
  },
  {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },{
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    {
    "id":"420450390902865922",
    "applyNo":"FFZZ25060956002",
    "custNo":"420339382960635905",
    "typeNo":"M01002",
    "fileId":"6846ae9714bf9a0001301321",
    "fileName":"户口本(首页+个人页)",
    "fileSuffix":".jpeg",
    "fileSize":3818388,
    "fileType":"image",
    "sortNo":10,
    "remarks":"upload",
    "fileIds":"",
    "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },{
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // },
    // {
    // "id":"420450390902865922",
    // "applyNo":"FFZZ25060956002",
    // "custNo":"420339382960635905",
    // "typeNo":"M01002",
    // "fileId":"6846ae9714bf9a0001301321",
    // "fileName":"户口本(首页+个人页)",
    // "fileSuffix":".jpeg",
    // "fileSize":3818388,
    // "fileType":"image",
    // "sortNo":10,
    // "remarks":"upload",
    // "fileIds":"",
    // "url":"https://tech-sit.ddjf.info/eis//view/process/6846ae9714bf9a0001301321?styleType=image%2Fresize%2Cw_1800%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Ctype_ZmFuZ3poZW5nc2h1c29uZw%2Crotate_316%2Cw%3D1800%2Ch_1100%2Csize_20%2Cfill_1%2Ctext_MjAyNS0wNi0wOSAxNzo1MToyOSAgICAgICAgICAgICAgICAgICAgICAgICAgICAg%2Ccolor_808080%2Ct_55%2Cg_se%2Cx_10%2Cy_10&systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&version=0","thumbnailUrl":"https://tech-sit.ddjf.info/eis//view/redirect/thumbnail/6846ae9714bf9a0001301321?systemCode=fundkit&authKey=c97edaa67ff9ef0e5542f5513a393deb&width=120&height=120&save=0&protocol=1",
    // }
  ])

// 取消删除
function cancelDel() {
  isDelStatus.value = false
  imageList.value.forEach((item: FileType) => {
    item.selected = false
  })
}
async function delFile() {}

async function chooseImage() {}

const getImg = (item: any) => {
  if (item?.fileType === 'image' || item?.type === 'image') {
    return item.url || item.path
  } else {
    let fileSuffix = item.fileSuffix
      ? item.fileSuffix.slice(1)
      : item?.tempFilePath.split('.')[1]
    return `https://cdn.ddjf.com/static/images/bpms-workBench/${fileSuffix}_logo.png`
  }
}

/**
 * 预览图片
 */
async function openView(item: FileType) {
  if (isDelStatus.value) {
    item.selected = !item.selected
    return
  }
  // pdf 则需下载 否则直接预览
  // if (item.fileSuffix === '.pdf') {
  //   await Taro.showLoading({
  //     title: '加载中...',
  //     mask: true,
  //   })
  //   const response = await http<any>({
  //     url: APIS.getOriginFilePath,
  //     method: 'GET',
  //     data: {
  //       fileId: item.fileId.split('_')[0],
  //     },
  //   })
  //   if (response.success) {
  //     Taro.hideLoading()
  //     await Taro.showLoading({
  //       title: '下载中...',
  //       mask: true,
  //     })
  //     Taro.downloadFile({
  //       url: response.result,
  //       success: function (res) {
  //         Taro.hideLoading()
  //         var filePath = res.tempFilePath
  //         Taro.openDocument({
  //           filePath: filePath,
  //           fileType: 'pdf',
  //           success: function () {
  //             console.log('打开文档成功')
  //           },
  //         })
  //       },
  //     })
  //   } else {
  //     Taro.hideLoading()
  //   }
  // } else {
  //   let imgs = imageList.value.map((item: FileType) => {
  //     return item.url
  //   })
  //   Taro.previewImage({
  //     current: item.url, // 当前显示图片的http链接
  //     urls: imgs, // 需要预览的图片http链接列表
  //   })
  // }
}
</script>
<style lang="scss" scoped>
.material-content{
  padding: 0px;
  display: flex;
  flex-direction: column;
  .material-card{
    padding: 10px;
    flex: 1;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    &-box{
      border-radius: 8px;
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
      width: 100%;
      display: flex;
      flex-direction: column;
      .type {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 4px;
        .title {
          line-height: 30px;
        }
        .del-box {
          img {
            display: block;
            font-size: 0;
            width: 20px;
            height: 20px;
          }
          span {
            color: #017fff;
          }
        }
      }
      .file {
        flex: 1;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        .img-card {
          position: relative;
          width: 30%;
          height: 100px;
          margin: 5px 0px;
          &.img-upload {
            text-align: center;
            color: #005bea;
            background: #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .img {
              display: block;
              width: 20px;
              height: 20px;
              margin: 4px auto;
              font-size: 0;
            }
          }
          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .img-checkbox {
            display: inline-block;
            position: absolute;
            top: 4px;
            right: 4px;
            z-index: 10;
            border: 0;
            width: 1rem;
            height: 1rem;
            background: url('https://cdn.ddjf.com/static/images/fnfundkit/file-notSelected.png')
              no-repeat;
            background-size: 100% 100%;
            &.checked {
              background-image: url('https://cdn.ddjf.com/static/images/fnfundkit/file-selected.png');
            }
          }
        }
      }
      .file:after {
        content: '';
        width: 30%; // 宽度与子元素相同即可
      }
    }
  }
  .materiral-bottom {
    padding: 0 12px;
    height: 55px;
    background: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    .num {
      color: rgb(102, 102, 102);
      font-size: 14px;
      font-weight: 400;
    }
    .ns-button {
      flex: 1;
    }
  }
}
</style>
