import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './routes/router';

Vue.config.productionTip = false;
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
