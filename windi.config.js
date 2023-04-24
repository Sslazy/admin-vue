import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // 开启 attributify
  attributify: true,
  // 配置一些常用的组合样式
  shortcuts: {
    'f-center': 'flex justify-center items-center',
    'f-around': 'flex justify-around items-center',
    'f-between': 'flex justify-between items-center',
    'v-center': 'flex items-center',
    'm-btn': 'bg-gradient-to-b from-cyan-500 to-blue-400 text-sky-100 rounded-full py-5 hover:text-white font-bold'
  }
})
