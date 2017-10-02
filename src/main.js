// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
	ServerTable,
	ClientTable,
	Event
} from 'vue-tables-2';
Vue.use( ClientTable, {}, false );

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue( {
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
} )