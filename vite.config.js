import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import Components from 'unplugin-vue-components/vite' // 自动按需导入组件
import AutoImport from 'unplugin-auto-import/vite' // 自动导入Api
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          'vue-router': ['onBeforeRouteLeave']
        }
      ],
      // 指定文件夹位置， 加 /** 可遍历子目录
      dirs: ['src/hooks'],
      // 生成 auto-import.d.ts 声明文件
      dts: 'src/auto-import.d.ts',
      // 解析 ElementPlus
      resolvers: [ElementPlusResolver(), IconResolver({ prefix: 'Icon' })]
    }),
    Components({
      // 指定组件所在文件夹的位置，默认是 src/components，可以自行扩充
      dirs: ['src/components'],
      // 解析 ElementPlus
      resolvers: [ElementPlusResolver(), IconResolver({ enabledCollections: ['ep'] })],
      // 组件的有效文件扩展名
      extensions: ['vue'],
      // 配置 type 文件生成位置，生成 components.d.ts; 可以设置为 false
      dts: 'src/components.d.ts',
      // 遍历子目录
      deep: true
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000, // 端口号
    open: true // 是否自动打开浏览器
  }
})
