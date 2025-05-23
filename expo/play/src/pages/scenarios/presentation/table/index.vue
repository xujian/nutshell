<template>
  <div class="rank-table">
    <div class="rank-table-header">
      <div
        class="rank-table-header-column"
        v-for="(item, index) in column"
        :key="index"
        :style="item.width ? {width: item.width} : { flex: 1}">
        {{ item.title }}
      </div>
    </div>
    <div class="rank-table-body">
      <div v-for="(item, index) in data" :key="index" class="rank-table-body-row">
        <div
          class="rank-table-body-row-column"
          v-for="(it, index) in column"
          :key="index"
          :style="it.width ? {width: it.width} : { flex: 1}"
          :class="getClasses(it, item)">
          <template v-if="it.key === 'sort' && [1, 2, 3].includes(item[it.key])">
            <img class="rank-table-body-row-column-icon" :src="`https://cdn.ddjf.com/static/images/fnfundkit/rank-${item[it.key]}.png`" />
          </template>
          <template v-if="item.desc && it.key === 'title'">
            <div class="rank-table-body-row-column-title">{{item.title}}</div>
            <div class="rank-table-body-row-column-desc">{{item.desc}}</div>
          </template>
          <template v-else> {{ item[it.key] }}</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType } from 'vue'
import { columnType, dataType } from '../contract.vue';

const props = defineProps({
  column: {
    type: Array as PropType<columnType[]>,
    default: []
  },
  data: {
    type: Array as PropType<dataType[]>,
    default: []
  }
})

const column = computed(() => props.column)
const data = computed(() => props.data)


function getClasses(it: columnType, item: dataType){
  if (!['sort', 'title'].includes(it.key) &&  [1, 2, 3].includes(item.sort)) return 'warnColor'
  if (!['sort', 'title'].includes(it.key) &&  ![1, 2, 3].includes(item.sort)) return 'grayColor'
  if (item.desc && it.key === 'title') return 'titleStyle'
  return ''
}

onMounted(() => {

})
</script>
<style lang="scss">
.rank-table{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &-header{
    height: 40px;
    line-height: 40px;
    flex-shrink: 0;
    display: flex;
    &-column{
      text-align: left;
      color: #35353599;
      font-size: 12px;
    }
  }
  &-body{
    flex: 1 1 0;
    overflow-y: auto;
    min-height: 0;
    &-row{
      display: flex;
      height: 40px;
      line-height: 40px;
      &-column{
        overflow: hidden;      /* 隐藏溢出内容 */
        white-space: nowrap;   /* 强制文本不换行 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        &-icon{
          display: block;
          font-size: 0;
          width: 30px;
          height: 30px;
        }
        &.titleStyle{
          .rank-table-body-row-column-title{
            line-height: 20px;
            height: 20px;
            font-size: 13px;
            overflow: hidden;      /* 隐藏溢出内容 */
            white-space: nowrap;   /* 强制文本不换行 */
            text-overflow: ellipsis; /* 超出部分显示省略号 */
          }
          .rank-table-body-row-column-desc{
            line-height: 14px;
            height: 14px;
            font-size: 11px;
            color:#35353599;
            overflow: hidden;      /* 隐藏溢出内容 */
            white-space: nowrap;   /* 强制文本不换行 */
            text-overflow: ellipsis; /* 超出部分显示省略号 */
          }
        }
      }
      .warnColor{
        color: #FA8C16;
      }
      .grayColor{
        color: #35353599;
      }
    }
  }
}
</style>
