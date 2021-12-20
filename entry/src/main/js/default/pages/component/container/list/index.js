import prompt from '@system.prompt';

export default {
  data: {
    title: '列表',
    users: [
      '刘备',
      '关羽',
      '张飞',
      '诸葛亮',
      '曹操',
      '张辽',
      '司马懿',
      '孙权',
      '周瑜'
    ],
    usersGroup: [
      {
        'country': '蜀国',
        'users': [
          '刘备',
          '关羽',
          '张飞',
          '诸葛亮',
        ]
      },
      {
        'country': '魏国',
        'users': [
          '曹操',
          '张辽',
          '司马懿',
        ]
      },
      {
        'country': '吴国',
        'users': [
          '孙权',
          '周瑜'
        ]
      }
    ]
  },
  onInit() {

  },
  collapseOne(e) {
    this.$element('mylist').collapseGroup({
      groupid: '蜀国'
    })
  },
  expandOne(e) {
    this.$element('mylist').expandGroup({
      groupid: '蜀国'
    })
  },
  collapseAll(e) {
    this.$element('mylist').collapseGroup()
  },
  expandAll(e) {
    this.$element('mylist').expandGroup()
  },
  collapse(e) {
    prompt.showToast({
      message: 'Close ' + e.groupid
    })
  },
  expand(e) {
    prompt.showToast({
      message: 'Open ' + e.groupid
    })
  }
}
