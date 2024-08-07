import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from 'chart.js'

import { UniData } from './UniData'

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
)

type ChartProps = {
  data?: UniData[],
  [name: string]: any,
}

class Vendor {

  container: HTMLCanvasElement
  props: ChartProps
  instance: Chart | null = null

  constructor(container: HTMLCanvasElement, props: ChartProps) {
    this.container = container
    this.props = props
  }

  private buildOptions(props: ChartProps) {
    return {}
  }

  draw () {
    const options = this.buildOptions(this.props)
    this.instance = new Chart(
      this.container, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {}
      }
    )
  }
}

export {
  Vendor
}
