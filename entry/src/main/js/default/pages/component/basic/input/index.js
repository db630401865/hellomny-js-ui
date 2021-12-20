import prompt from '@system.prompt';

export default {
  data: {

  },
  showDialog(e) {
    this.$element('loginDialog').show()
  },
  // 手机号输入框
  inputPhone(e) {
    this.phone = e.value;
  },
  // 密码输入框
  inputPwd(e) {
    this.pwd = e.value;
  },
  // 验证手机号
  checkPhone() {
    const reg = /^1\d{10}$/
    if (reg.test(this.phone)) {
      prompt.showDialog({
        message: "验证通过",
      })
    } else {
      prompt.showDialog({
        message: "手机号非法，请重新输入",
      })
    }
  },
  register() {
    // 校验数据
    this.checkPhone()

    prompt.showToast({
      message: "手机号: " + this.phone + "密码: " + this.pwd,
      duration: 5000
    })
  }
}