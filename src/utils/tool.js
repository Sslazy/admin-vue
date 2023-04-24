import { ElNotification, ElMessageBox } from 'element-plus'
// 封装消息提示组件
export function toast(message, type = 'success', duration = 1000) {
  ElNotification({
    message,
    type,
    duration
  })
}

// 封装模态弹框组件
export function showModal(content = '提示内容', type = 'warning', title = '') {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type
  })
}
