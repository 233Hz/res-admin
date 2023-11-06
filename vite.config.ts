import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '@': join(__dirname, 'src')
      }
    },
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ]
  }
})
