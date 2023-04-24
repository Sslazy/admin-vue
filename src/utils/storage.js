const TokenKey = 'accessToken'

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

// 设置token
export function setToken(token) {
  localStorage.setItem(TokenKey, token)
}

// 清除token
export function removeToken() {
  localStorage.removeItem(TokenKey)
}
