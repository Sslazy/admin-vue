<script setup>
const form = reactive({
  username: 'admin',
  password: '123456'
})

const store = useAdminStore()

const { storeLogin, getStoreInfo, storeLogout } = store
</script>

<template>
  <div>
    <el-button type="primary" size="default" @click="storeLogin(form)">登录</el-button>
    <el-button type="primary" size="default" @click="getStoreInfo">获取用户信息</el-button>
    <el-button type="primary" size="default" @click="storeLogout">登出</el-button>
  </div>
</template>
