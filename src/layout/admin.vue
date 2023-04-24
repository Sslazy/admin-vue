<template>
  <el-container>
    <el-header>
      <top-nav />
    </el-header>

    <el-container>
      <el-aside>
        <side-menu />
      </el-aside>

      <el-main>
        <bread-crumbs />
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
