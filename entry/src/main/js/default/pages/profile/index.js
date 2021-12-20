import prompt from '@system.prompt';

export default {
  private: {
    title: '个人中心',
    glasses: [
      {
        name:'前端',
        kinds:[
          {name:'JavaScript',color:'red'},
          {name:'CSS',color:'green'}
        ]
      },
      {
        name:'后端',
        kinds:[
          {name:'Java',color:'blue'}
        ]
      },
    ],
  },
  companyInfo(e) {
    prompt.showToast({
      message: '父组件中的方法，'+e.detail.info,
      duration: 10000
    })
  }
}
