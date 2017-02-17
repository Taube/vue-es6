<template>
	<div id="app">
		<header>
			<nav class="navbar navbar-light bg-faded">
				<a class="navbar-brand" href="https://es6.io/">
					<img src="../assets/es6.png" width="30" height="30" class="d-inline-block align-top" alt="ES6">
					ES6
				</a>
				<a class="navbar-brand" href="https://vuejs.org/">
					<img src="../assets/vue.svg" width="30" height="30" class="d-inline-block align-top" alt="Vue">
					Vue
				</a>
				<a class="navbar-brand" href="https://webpack.github.io/">
					<img src="../assets/webpack.svg" width="30" height="30" class="d-inline-block align-top" alt="Webpack">
					Webpack
				</a>
				<a class="navbar-brand" href="https://v4-alpha.getbootstrap.com/">
					<img src="../assets/bootstrap.svg" width="30" height="30" class="d-inline-block align-top" alt="BS4">
					Bootstrap
				</a>
			</nav>
		</header>

		<div id="app-body">
			<main>
				<slot></slot>
			</main>
			<nav>
				<ul class="nav flex-column">
					<v-link href="/">Home</v-link>
					<v-link href="/var">Let, const and $(literal)</v-link>
					<v-link href="/arrow">Arrow Functions</v-link>
					<v-link href="/select">Select</v-link>
				</ul>
			</nav>
			<aside>
				<p>Aside</p>
			</aside>
		</div>

		<footer class="bg-faded">
			<p>Ola Taube 2017</p>
		</footer>
	</div>
</template>

<script>
import Vue from 'vue'
import VLink from '../components/VLink.vue'
import hljs from 'highlight.js'

hljs.configure({
	tabReplace: '    ', // 4 spaces
	languages: ['javascript']
})

export default {
	components: {
		VLink
	}
}

Vue.directive('highlightjs', {
	deep: true,
	bind: function(el, binding) {
		// on first bind, highlight all targets
		let targets = el.querySelectorAll('code')
		targets.forEach((target) => {
			// if a value is directly assigned to the directive, use this
			// instead of the element content.
			if (binding.value) {
				target.innerHTML = binding.value
			}
			hljs.highlightBlock(target)
		})
	},
	componentUpdated: function(el, binding) {
		// after an update, re-fill the content and then highlight
		let targets = el.querySelectorAll('code')
		targets.forEach((target) => {
			if (binding.value) {
				target.innerHTML = binding.value
				hljs.highlightBlock(target)
			}
		})
	}
})

</script>

<style lang="scss">

@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/nav';
@import '~bootstrap/scss/navbar';
@import '~bootstrap/scss/utilities/flex';
@import "~bootstrap/scss/utilities/background";

.navbar {
	display: block;
}

#app {
	display: flex;
	min-height: 100vh;
	flex-direction: column;
}
#app-body {
	display: flex;
	flex: 1;
}
header {
	text-align: center;
}
main {
	padding-top: 2em;
	flex: 1;
}
nav, aside {
	/* 12em is the width of the columns */
	padding-top: 2em;
	flex: 0 0 15em;
}
nav {
	order: -1;
}
footer{
	font-size: 12px;
	line-height: 22px;
	text-align: center;
	p {
		margin-top: 10px;
		margin-bottom: 10px;
	}
}

@media (min-width: 768px) {
	#app-body {
		flex-direction: row;
		flex: 1;
	}
	main {
		flex: 1;
	}
}

h1 {
	margin-bottom: 1em,
}
pre {
	// white-space: normal;
	position: relative;
	margin-top: -3em;
	margin-bottom: 0;
}
@import '~highlight.js/styles/atelier-lakeside-dark.css';

</style>