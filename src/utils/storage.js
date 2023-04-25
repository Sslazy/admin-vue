const tabKey = 'tabList'

// 获取tabList
export function getTabList() {
  return JSON.parse(localStorage.getItem(tabKey))
}

// 设置tabList
export function setTabList(tabList) {
  localStorage.setItem(tabKey, JSON.stringify(tabList))
}

// 清除tabList
export function removeTabList() {
  localStorage.removeItem(tabKey)
}
