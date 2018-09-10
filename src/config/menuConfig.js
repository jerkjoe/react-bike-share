const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      },
      {
        title: 'Modal',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings'
      },
      {
        title: 'Notification',
        key: '/admin/ui/notification'
      },
      {
        title: 'Global Message',
        key: '/admin/ui/messages'
      },
      {
        title: 'Tabs',
        key: '/admin/ui/tabs'
      },
      {
        title: 'Gallery',
        key: '/admin/ui/gallery'
      },
      {
        title: 'Carousel',
        key: '/admin/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login'
      },
      {
        title: '注册',
        key: '/form/reg'
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic'
      },
      {
        title: '高级表格',
        key: '/table/high'
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap'
  },
  {
    title: '图标',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      }
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  }
]
export default menuList
