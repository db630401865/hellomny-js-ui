import router from '@system.router';

export default {
  data: {
    title: 'World',
    uris: [
      'pages/component/container/div/index',
      'pages/component/container/dialog/index',
      'pages/component/container/list/index',
      'pages/component/container/swiper/index',
      'pages/component/basic/toolbar/index',
      'pages/component/basic/chart/index',
      'pages/component/basic/picker/index',
      'pages/component/basic/input/index'
    ]
  },
  goBack() {
    router.back()
  },
  change: function(e) {
    console.log("Tab index: " + e.index);
  },
  goComp: function(e) {
    const { data } = e.target.attr
    router.push({
      uri: this.uris[data]
    })
  }
}
