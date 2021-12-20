import router from '@system.router';
import fetch from '@system.fetch';
import newsList from '../../common/data/newsList.js'

export default {
  data: {
    title: 'World',
    type: 'top',
    // lists: newsList.result.data,
    news: [
      {key: 'top', title: '头条', list: newsList.result.data},
      {key: 'shehui', title: '社会', list: []},
      {key: 'guonei', title: '国内', list: []},
      {key: 'guoji', title: '国际', list: []},
      {key: 'yule', title: '娱乐', list: []},
      {key: 'tiyu', title: '体育', list: []},
      {key: 'junshi', title:  '军事', list: []},
      {key: 'keji', title: '科技', list: []},
      {key: 'caijing', title: '财经', list: []},
      {key: 'shishang', title: '时尚', list: []},
      {key: 'youxi', title: '游戏', list: []},
      {key: 'qiche', title: '汽车', list: []},
      {key: 'jiankang', title: '健康', list: []},
    ],
  },
  onInit() {
    console.log('News onInit');
    this.getNewsList()
  },
  onReady() {
    console.log('News onReady');
  },
  onShow() {
    console.log('News onShow');
  },
  onActive() {
    console.log('News onActive');
  },
  onInactive() {
    console.log('News onInactive');
  },
  onHide() {
    console.log('News onHide');
  },
  onDestroy() {
    console.log('News onDestroy');
  },
  goBack() {
    router.back()
  },
  getNewsList() {
    const that = this
    const api = 'http://v.juhe.cn/toutiao/index';
    fetch.fetch({
      url: api+'?type='+this.type+'&key=6d7ee8d88bd4fb137f5d20ce7066a700',
      method: 'GET',
      responseType: 'json',
      success: res => {
        console.log('666666666: '+JSON.stringify(res))
        if (res.code == 200) {
          const target = JSON.parse(res.data)
          // that.lists = target.result.data
          this.news.forEach(item => {
            if (item.key == this.type) {
              item.list = target.result.data
            }
          })
        } else {
          console.log('查询新闻失败')
        }
      }
    })
  },
  change(e) {
    console.log('Tab index: '+ e.index)
    this.type = this.news[e.index].key
    this.getNewsList()
  },
  clickItem(uk) {
    // 跳转到新闻详情页面
    router.push({
      uri: "pages/newsdetail/newsdetail",
      params: {
        uniquekey: uk
      }
    })
  }
}
