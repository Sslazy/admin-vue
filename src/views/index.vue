<script setup>
const { handleLogout } = useLogout()
</script>

<template>
  <div>
    <el-button type="primary" @click="handleLogout">登出</el-button>
  </div>
</template>
