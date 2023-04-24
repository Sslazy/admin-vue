<script setup></script>

<template>
  <div class="p-5">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <div class="bg-sky-600 w-50 h-50 text-white f-center">
      <p class="text-xl">测试 WindiCSS</p>
    </div>
    <button class="m-btn px-8 py-2 mt-2">按钮</button>
  </div>
  <el-icon size="32" class="text-sky-500">
    <Edit />
  </el-icon>
</template>

<style scoped></style>
