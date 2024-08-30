import {
  Chart,
  Colors,
  BarController,
  LineController,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend
} from 'chart.js'

import { isLayer, UniData } from './UniData'

Chart.register(
  Colors,
  BarController,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend
)

type ChartProps = {
  data?: UniData,
  [name: string]: any,
}

class Vendor {

  container: HTMLDivElement
  props: ChartProps
  width: number = 0
  height: number = 0
  instance: Chart | null = null

  constructor(container: HTMLDivElement, props: ChartProps) {
    this.container = container
    this.props = props
  }

  private buildOptions(props: ChartProps) {
    return {}
  }

  private axises = [
  {
    name: 'y',
    type: 'linear',
    display: true,
    position: 'left',
  },
  {
    name: 'y2',
    type: 'linear',
    display: true,
    position: 'right',
  }
]

  private buildAxises () {
    const data = this.props.data || [{}],
      [y, y2] = this.axises
    let result: any = {
      [y.name]: {
        ...y
      }
    }
    const [d] = data
    // @ts-ignore
    if (isLayer(d) && data.length > 1) {
      result = {
        ...result,
          [y2.name]: {
            ...y2
          }
      }
    }
    return result
  }

  private __draw () {
  }

  draw () {
    // console.log('===this.container.id', this.container.id)
    setTimeout(() => {
      // console.log('===draw()', this.container.id)
      const query = wx.createSelectorQuery(),
        container = query.select(`#${this.container.id}`),
        canvas = query.select(`#${this.container.id} .canvas`)
        // console.log('===draw(1)', container, canvas)
        container.boundingClientRect((rect: any) => {
          this.width = rect.width,
          this.height = rect.height
        })
      canvas.node(({ node: paint }: { node: any}) => {
        const isDevTool = /Macintosh/.test(navigator.userAgent)
        const devicePixelRatio = isDevTool ? 1 : wx.getSystemInfoSync().pixelRatio
        // console.log('===devicePixelRatio', navigator.userAgent, isDevTool, devicePixelRatio)
        Chart.defaults.font.size = 10 * devicePixelRatio
        const context = paint.getContext('2d')
        // console.log('===ownerDocument', paint.ownerDocument)
        paint.width = this.width
        paint.height = this.height
        const options = this.buildOptions(this.props)
        const datasets = this.props.data?.map((d, index) => ({
          label: isLayer(d) ? d.label : '',
          data: isLayer(d) ? d.data : d,
          borderWidth: devicePixelRatio,
          yAxisID: isLayer(d) ? this.axises[index].name : 'y'
        })) || [] as any[]
        const config = {
          type: 'line',
          data: {
            labels: this.props.x,
            datasets,
            // datasets: [{
            //   label: '利润',
            //   data: [1200, 1900, 3000, 5000, 2000, 3000],
            //   borderWidth: devicePixelRatio,
            //   yAxisID: 'y',
            // },{
            //   label: '销售量',
            //   data: [12, 19, 3, 5, 2, 3],
            //   borderWidth: devicePixelRatio,
            //   yAxisID: 'y2',
            // }]
          },
          options: {
            devicePixelRatio,
            // resonsive=true 会报错 resize()
            responsive: false,
            layout: {
              padding: 0,
            },
            locale: 'en',
            scales: {
              ...this.buildAxises()
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 10 * devicePixelRatio
                  }
                }
              }
          }
          }
        }
        // console.log('===chart config', config)
        this.instance = new Chart(
          context, config
        )
      })
      .exec((res: any) => {
        // console.log('===res', res)
      })
    }, 1000)
  }
}

export {
  Vendor
}
