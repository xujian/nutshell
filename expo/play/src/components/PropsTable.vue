<script lang="ts">
import { computed, defineComponent, h, PropType } from 'vue'
import { Table as NutTable } from '@nutui/nutui-taro'

interface PropsTableColumn {
  title: string
  key: string
}

export interface PropsTableData {
  name: string
  description: string
  type: string
  default: any
}

const columns: PropsTableColumn[] = [
  {
    title: '名称',
    key: 'name'
  },
  { title: '类型', key: 'type' },
  { title: '缺省值', key: 'default' }
]

export default defineComponent({
  name: 'PropsTable',
  props: {
    data: {
      type: Array as PropType<PropsTableData[]>,
      required: true
    }
  },
  setup (props) {

    const rows = computed(() => {
      return props.data.map(item => ({
        name: () => h('div', {
          class: 'name-column'
        }, [
          h('h6', {}, item.name),
          h('p', { class: 'caption' }, item.description),
        ]),
        type: item.type,
        default: item.default
      }))
    })

    return () => h(NutTable, {
      class: [
        'props-table',
        'breakout',
        'color-scheme-light'
      ],
      columns,
      data: rows.value,
      bordered: true,
      striped: true,
    })
  }
})
</script>

<style lang="scss">
.props-table {
  margin-top: 0;
  color: var(--foreground);
  --nut-table-tr-even-bg-color: #f7f7f7;
  .nut-table__main__head__tr {
    border-bottom: solid 1px #e8e8e8;
  }
  .nut-table__main__head__tr__th {
    background-color: #fff;
    padding: 4px;
  }
  .nut-table__main__head__tr,
  .nut-table__main__body__tr {
    display: table-row;
    flex-direction: row;
    justify-content: stretch;
    .h5-span {
      padding: 4px;
      box-sizing: border-box;
      &:first-child {
        padding-left: 10px;
        flex-grow: 1;
        border-width: 1px 0 0 0;
      }
      &:nth-child(2) {
        width: 60px;
        font-size: 12px;
        border-width: 1px 1px 0 1px;
      }
      &:nth-child(3) {
        width: 60px;
        font-size: 12px;
        border-width: 1px 0 0 0;
        padding-right: 10px;
      }
      h6 {
        font-weight: bold;
      }
    }
  }
  .nut-table__main__head__tr__th,
  .nut-table__main__body__tr__th,
  .nut-table__main__head__tr__td,
  .nut-table__main__body__tr__td {
    padding: 4px 10px;
    font-size: 12px;
  }
  .caption {
    font-size: 12px;
  }
}
</style>
