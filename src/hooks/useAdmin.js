export function usePassword() {
  const router = useRouter()
  const formDrawerRef = ref(null)
  const openRepasswordForm = () => formDrawerRef.value.open()
  const form = reactive({
    oldPassword: '123456',
    newPassword: 'admin',
    rePassword: 'admin'
  })

  const rePassRule = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('确认密码不能为空！'))
    } else if (value !== form.newPassword) {
      callback(new Error('确认密码必须和新密码一致！'))
    } else {
      callback()
    }
  }

  const rules = {
    oldPassword: [
      {
        required: true,
        message: '旧密码不能为空',
        trigger: 'blur'
      }
    ],
    newPassword: [
      {
        required: true,
        message: '新密码不能为空',
        trigger: 'blur'
      }
    ],
    rePassword: [
      {
        validator: rePassRule,
        trigger: 'blur'
      }
    ]
  }

  const formRef = ref(null)

  const onSubmit = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        return false
      }
      const data = {
        oldPassword: form.oldPassword,
        newPassword: form.newPassword
      }

      formDrawerRef.value.showLoading()
      rePassword(data)
        .then(() => {
          toast('密码修改成功，重新登录')
          const { storeLogout } = useAdminStore()
          storeLogout().then(() => {
            router.push('/login')
          })
        })
        .finally(() => {
          formDrawerRef.value.hideLoading()
        })
    })
  }

  return {
    formDrawerRef,
    form,
    rules,
    formRef,
    openRepasswordForm,
    onSubmit
  }
}
