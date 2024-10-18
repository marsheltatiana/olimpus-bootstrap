import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist-olimpus'
  },
  server: {
    port: 8080
  }
}