import app from '@system.app';

export default {
    onCreate() {
        console.info('AceApplication onCreate');
        const info = app.getInfo()
        console.log(JSON.stringify(info))
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },
    globalData: {
        appVersion: '2.0'
    },
    globalHello() {
        console.log('来自 app.js 的全局方法')
    }
};
