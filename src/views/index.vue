<script setup>
import { ref } from 'vue'
const msg = ref('测试自动导入')
</script>

<template>
  <div class="bg-sky-600 w-50 h-50 text-white f-center">
    <p class="text-xl">{{ msg }}</p>
  </div>
  <hello></hello>
  <el-empty description="description" />
</template>
