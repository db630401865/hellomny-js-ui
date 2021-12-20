import router from '@system.router';

export default {
  props: ['curIndex'],
  data: {
    menu: [
      {
        icon: 'common/icons/home.png',
        active_icon: 'common/icons/home_active.png',
        name: '首页',
        path: 'pages/index/index',
        active: true
      },
      {
        icon: 'common/icons/comment.png',
        active_icon: 'common/icons/comment_active.png',
        name: '新闻',
        path: 'pages/news/news',
        active: false
      },
      {
        icon: 'common/icons/cart.png',
        active_icon: 'common/icons/cart_active.png',
        name: '组件',
        path: 'pages/component/component',
        active: false
      },
      {
        icon: 'common/icons/user.png',
        active_icon: 'common/icons/user_active.png',
        name: '我',
        path: 'pages/profile/index',
        active: false
      }
    ]
  },
  onInit() {
    this.menu[this.curIndex].icon = this.menu[this.curIndex].active_icon
  },
  changeNav(id) {
    console.log('current id: '+id)

    // 跳转到具体的页面
    router.replace({
      uri: this.menu[id].path
    })
  }
}