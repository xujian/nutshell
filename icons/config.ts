export type Config = {
  figmaFile: {
    id: string,
    page: string
  },
  dest: string,
  concurrency: number,
  replace: {
    default: {
      primary: string
    }
  }
}

const config: Config = {
  figmaFile: {
    id: 'JTa7dAPoLYz7xO6wtQkUvd',
    page: 'icons'
  },
  dest: './svg',
  concurrency: 10,
  replace: {
    default: {
      // figma 里使用的 primary color
      // 会被替换为多个 theme 并另存
      primary: '#4DCB93'
    }
  }
}

export default config
