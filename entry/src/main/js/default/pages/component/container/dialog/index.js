import prompt from '@system.prompt';

export default {
  showDialog(e) {
    this.$element('simpledialog').show()
  },
  // 点击空白位置，取消 dialog
  cancelDialog(e) {
    prompt.showToast({
      message: 'Dialog cancelled'
    })
  },
  // 取消按钮
  cancelSchedule(e) {
    this.$element('simpledialog').close()
    prompt.showToast({
      message: 'Successfully cancelled'
    })
  },
  // 确认按钮
  setSchedule(e) {
    this.$element('simpledialog').close()
    prompt.showToast({
      message: 'Successfully confirmed'
    })
  }
}