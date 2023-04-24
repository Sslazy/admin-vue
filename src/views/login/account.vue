<script setup>
// 结构出 hooks 中的值
const { form, formRef, rules, loading, onSubmit } = useAccountLogin()
// 监听回车事件
function onKeyUp(e) {
  if (e.key == 'Enter') {
    onSubmit()
  }
}
// 添加键盘监听
onMounted(() => {
  document.addEventListener('keyup', onKeyUp)
})
// 移除键盘监听
onBeforeUnmount(() => {
  document.removeEventListener('keyup', onKeyUp)
})
</script>

<template>
  <el-form :model="form" ref="formRef" :rules="rules" class="w-[80%]">
    <el-form-item prop="username" class="py-3">
      <el-input placeholder="Username" v-model="form.username">
        <template #prefix>
          <IEpUser />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password" class="py-3">
      <el-input type="password" placeholder="Password" v-model="form.password">
        <template #prefix>
          <IEpLock />
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="m-btn w-full" @click="onSubmit" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>
