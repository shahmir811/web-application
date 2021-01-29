import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './routes/router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
