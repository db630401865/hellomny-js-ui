import router from '@system.router';
import fetch from '@system.fetch';
import qweather3ds from '../../common/data/qweather3ds.js'
import geolocation from '@system.geolocation';
import storage from '@system.storage';

export default {
    data: {
        title: "123",
        images: [
            { src: '/common/images/bg-tv.jpg' },
            { src: '/common/images/Wallpaper.png' },
        ],
        mylocation: '117.33,39.55',
        threeDays: qweather3ds.daily
    },
    onInit() {
        console.log('onInit');
        // this.title = this.$t('strings.world');

        // 访问 app.js 中的内容
        console.log(this.$app.$def.globalData.appVersion)

        this.$app.$def.globalHello()

        // 验证数据修改
        this.$delete('title')
        this.$set('title', 666)

        const that = this
        geolocation.getLocation({
            success: function(data) {
                console.log('location: '+JSON.stringify(data))
                that.mylocation = data.longitude+','+data.latitude
            },
            complete() {
                that.get3ds()
            }
        })
    },
    // 获取未来三天的天气预报
    get3ds() {
        const that = this
        const api = 'https://devapi.qweather.com/v7/weather/3d';
        console.log('mylocation: '+this.mylocation)
        fetch.fetch({
            url: api+'?location='+this.mylocation+'&key=687e517f06684448a9f4695721414a07',
            method: 'GET',
            responseType: 'json',
            success: res => {
                console.log('666666666: '+JSON.stringify(res))
                if (res.code == 200) {
                    const target = JSON.parse(res.data)
                    that.threeDays = target.daily
                } else {
                    console.log('查询天气失败')
                }
            }
        })
    },
    handleClick() {
        // 获取 ref 属性为 animator 的DOM元素
        // const animator = this.$refs.animator;
        const animator = this.$element('animator')
        const state = animator.getState();
        if (state === 'paused') {
            animator.resume();
        } else if (state === 'stopped') {
            animator.start();
        } else {
            animator.pause();
        }
    },
    onReady() {
        console.log('onReady');
    },
    onShow() {
        console.log('onShow');
    },
    onActive() {
        console.log('onActive');
    },
    onInactive() {
        console.log('onInactive');
    },
    onHide() {
        console.log('onHide');
    },
    onDestroy() {
        console.log('onDestroy');
    },
    setValue() {
        storage.set({
            key: 'hello',
            value: {username: 'zhangsan', age: 20},
            success: function() {
                console.log('call storage.set success.');
            },
            fail: function(data, code) {
                console.log('call storage.set fail, code: ' + code + ', data: ' + data);
            },
        })
    },
    getValue() {
        storage.get({
            key: 'hello',
            success: function(data) {
                console.log('call storage.get success: ' + data);
            },
            fail: function(data, code) {
                console.log('call storage.get fail, code: ' + code + ', data: ' + data);
            },
            complete: function() {
                console.log('call complete');
            },
        });
    }
}
