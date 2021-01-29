import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '../pages/login/login.page.vue';
import Register from '../pages/register/register.page.vue';

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Login,
			name: 'login',
			meta: { guest: true, needsAuth: false },
		},
		{
			path: '/register',
			component: Register,
			name: 'register',
			meta: { guest: true, needsAuth: false },
		},
	],
});

export default router;
