import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Var from 'pages/var'
import Select from 'pages/select'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/var', name: 'Var', component: Var },
		{ path: '/select', name: 'Select', component: Select }
	]
})
