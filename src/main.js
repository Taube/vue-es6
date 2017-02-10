// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import routes from './routes'
// import Navigation from './components/navigation'

/* eslint-disable no-new
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
*/

const app = new Vue({
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent() {
			const matchingView = routes[this.currentRoute]
			return matchingView ? require('./pages/' + matchingView + '.vue') : require('./pages/404.vue')
		}
	},
	render(h) {
		return h(this.ViewComponent)
	}
})

window.addEventListener('popstate', () => {
	app.currentRoute = window.location.pathname
})
