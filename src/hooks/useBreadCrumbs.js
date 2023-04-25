import { router } from '@/router'

// 面包屑组件 hooks
export function useBreadCrumbs() {
  const route = useRoute()

  const activeTab = ref(route.path)
  const tabList = ref([
    {
      title: '仪表盘',
      path: '/'
    }
  ])

  // 添加标签导航,并存入本地存储
  function addTab(tab) {
    let noTab = tabList.value.findIndex((t) => t.path == tab.path) == -1
    if (noTab) {
      tabList.value.push(tab)
    }
    setTabList(tabList.value)
  }

  // 从本地存储读取，初始化标签导航列表
  function initTabList() {
    let tbs = getTabList()
    if (tbs) {
      tabList.value = tbs
    }
  }

  initTabList()

  // 路由切换前的声明周期钩子
  onBeforeRouteUpdate((to) => {
    // 切换当前tab为要去的路由，并添加tab
    activeTab.value = to.path
    addTab({
      title: to.meta.title,
      path: to.path
    })
  })

  // 切换tab：激活当前tab，跳转路由
  const changeTab = (t) => {
    activeTab.value = t
    router.push(t)
  }

  // 移除当前tab
  const removeTab = (t) => {
    let tabs = tabList.value
    let a = activeTab.value
    if (a == t) {
      tabs.forEach((tab, index) => {
        if (tab.path == t) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            a = nextTab.path
          }
        }
      })
    }

    activeTab.value = a
    tabList.value = tabList.value.filter((tab) => tab.path != t)
    setTabList(tabList.value)
  }

  // 关闭所有tab，但保留仪表盘
  const handleClose = (c) => {
    if (c == 'clearAll') {
      // 切换回仪表盘页面
      activeTab.value = '/'
      // 过滤只剩下仪表盘页面
      tabList.value = [
        {
          title: '仪表盘',
          path: '/'
        }
      ]
    } else if (c == 'clearOther') {
      // 过滤只剩下仪表盘页和当前激活
      tabList.value = tabList.value.filter((tab) => tab.path == '/' || tab.path == activeTab.value)
    }
    setTabList(tabList.value)
  }

  return {
    activeTab,
    tabList,
    changeTab,
    removeTab,
    handleClose
  }
}
