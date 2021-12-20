import prompt from '@system.prompt';

export default {
  changeNav(idx) {
    console.log(idx)
    prompt.showToast({
      message: '当前索引：'+idx
    })
  }
}