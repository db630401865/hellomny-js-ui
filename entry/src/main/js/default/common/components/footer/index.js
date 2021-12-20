export default {
  // props: ['company'],
  props: {
    company: {
      default: '拉勾'
    }
  },
  data: {

  },
  onInit() {
    console.log('来自 footer ' + this.$parent().title)
  },
  companyInfo() {
    // 接收父组件传递过来的自定义事件
    this.$emit('checkInfo', { info: '来自子组件的介绍' })
  }
}