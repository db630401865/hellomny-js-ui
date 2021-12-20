import prompt from '@system.prompt';

export default {
  data: {
    title: 'Picker',
    rangetext:['男', "女", "未知"],
    multitext:[
        ["红桃", "黑桃", "方片", "梅花"],
        ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    ],
    textvalue:'文本选择器',
    datevalue:'日期选择器',
    timevalue:'时间选择器',
    datetimevalue:'日期时间选择器',
    multitextvalue:'多文本选择器',
    containsecond:true,
    multitextselect:[1,2,0],
    datetimeselect:'2012-5-6-11-25',
    timeselect:'11:22:30',
    dateselect:'2021-3-2',
    textselect:'0',
    defaultTime: "",
    time: "",
  },
  textonchange(e) {
    this.textvalue = e.newValue;
    prompt.showToast({ message:"text:"+e.newValue+",newSelected:"+e.newSelected })
  },
  textoncancel(e) {
    prompt.showToast({ message:"text: textoncancel" })
  },
  dateonchange(e) {
    this.datevalue = e.year + "-" + e.month + "-" + e.day;
    prompt.showToast({ message:"date:"+e.year+"-"+e.month+"-"+e.day })
  },
  dateoncancel() {
    prompt.showToast({ message:"date: dateoncancel" })
  },
  timeonchange(e) {
    if(this.containsecond){
      this.timevalue=e.hour+":"+e.minute+":"+e.second;
      prompt.showToast({ message:"时间:" + e.hour + ":" + e.minute + ":" + e.second })
    } else {
      this.timevalue=e.hour+":"+e.minute;
      prompt.showToast({ message:"时间:" + e.hour + ":" + e.minute })
    }},
  timeoncancel() {
    prompt.showToast({ message:"timeoncancel" })
  },
  datetimeonchange(e) {
    this.datetimevalue=e.year+"-"+e.month+"-"+e.day+" "+e.hour+":"+e.minute;
    prompt.showToast({ message:"时间:"+e.month+"-"+e.day+" "+e.hour+":"+e.minute })
  },
  datetimeoncancel() {
    prompt.showToast({ message:"datetimeoncancel" })
  },
  multitextonchange(e) {
    this.multitextvalue=e.newValue;
    prompt.showToast({ message:"多列文本更改" + e.newValue })
  },
  multitextoncancel() {
    prompt.showToast({ message:"multitextoncancel" })
  },
  popup_picker() {
    this.$element("picker_text").show();
  },

  onInit() {
    this.defaultTime = this.now();
  },
  handleChange(data) {
    this.time = this.concat(data.hour, data.minute);
  },
  now() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return this.concat(hours, minutes);
  },

  fill(value) {
    return (value > 9 ? "" : "0") + value;
  },

  concat(hours, minutes) {
    return `${this.fill(hours)}:${this.fill(minutes)}`;
  },
}
