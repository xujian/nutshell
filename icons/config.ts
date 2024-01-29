export type Config = {
  figmaFile: {
    id: string,
    page: string
  },
  dest: string,
  concurrency: number,
}

const config: Config = {
  figmaFile: {
    id: 'JTa7dAPoLYz7xO6wtQkUvd',
    page: 'icons'
  },
  dest: './svg',
  concurrency: 10
}

export default config
