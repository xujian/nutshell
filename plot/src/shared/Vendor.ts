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

import { UniData } from './UniData'

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
  data?: UniData[],
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

  private __draw () {
  }

  draw () {
    console.log('===this.container.id', this.container.id)
    Chart.defaults.font.size = 30;
    setTimeout(() => {
      const query = wx.createSelectorQuery(),
        container = query.select(`#${this.container.id}`),
        canvas = query.select(`#${this.container.id} .canvas`)
        container.boundingClientRect((rect: any) => {
          this.width = rect.width,
          this.height = rect.height
        })
      canvas.node(({ node: canvas }: { node: any}) => {
        const context = canvas.getContext('2d')
        canvas.width = this.width
        canvas.height = this.height
        const options = this.buildOptions(this.props)
        const devicePixelRatio = wx.getSystemInfoSync().pixelRatio
        this.instance = new Chart(
          context, {
            type: 'line',
            data: {
              labels: ['1', '2', '3', '4', '5', '6'],
              datasets: [{
                label: '利润',
                data: [1200, 1900, 3000, 5000, 2000, 3000],
                borderWidth: 3,
                yAxisID: 'y',
              },{
                label: '销售量',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 3,
                yAxisID: 'y2',
              }]
            },
            options: {
              devicePixelRatio,
              layout: {
                padding: 0,
              },
              locale: 'en',
              scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y2: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                }
              },
              plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 30
                        }
                    }
                }
            }
            }
          }
        )
      })
      .exec((res: any) => {
        console.log('===res', res)
      })
    }, 1000)
  }
}

export {
  Vendor
}
