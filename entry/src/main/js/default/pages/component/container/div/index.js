export default {
  data: {
    title: 'World'
  },
  longPressCallback() {
    this.title = "longpress"
  },
  swipeCallback(e) {
    this.title = "swipe 方向: "+e.direction
  }
}
