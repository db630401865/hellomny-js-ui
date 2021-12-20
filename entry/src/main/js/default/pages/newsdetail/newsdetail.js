import fetch from '@system.fetch';

export default {
  data: {
    uniquekey: '',
    detailObj: {}
  },
  onInit() {
    // 获取新闻详情
    console.log('uniquekey: '+this.uniquekey)

    this.getNewsDetail()
  },
  getNewsDetail() {
    const that = this
    const api = 'http://v.juhe.cn/toutiao/content';
    fetch.fetch({
      url: api+'?uniquekey='+this.uniquekey+'&key=6d7ee8d88bd4fb137f5d20ce7066a700',
      method: 'GET',
      responseType: 'json',
      success: res => {
        console.log('666666666: '+JSON.stringify(res))
        if (res.code == 200) {
          const target = JSON.parse(res.data)
          that.detailObj = target.result.detail
          that.detailObj.uniquekey = target.result.uniquekey
          that.detailObj.content = target.result.content
        } else {
          console.log('查询新闻失败')
        }
      }
    })
  }
}
