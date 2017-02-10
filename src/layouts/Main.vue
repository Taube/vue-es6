<template>
	<div id="app">
		<header>
			<nav class="navbar navbar-light bg-faded">
				<a class="navbar-brand" href="#">
					<img src="../assets/es6.png" width="30" height="30" class="d-inline-block align-top" alt="ES6">
					ES6
				</a>
				<a class="navbar-brand" href="#">
					<img src="../assets/vue.svg" width="30" height="30" class="d-inline-block align-top" alt="Vue">
					Vue
				</a>
				<a class="navbar-brand" href="#">
					<img src="../assets/webpack.svg" width="30" height="30" class="d-inline-block align-top" alt="Webpack">
					Webpack
				</a>
				<a class="navbar-brand" href="#">
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
import VLink from '../components/VLink.vue'
export default {
	components: {
		VLink
	}
}
</script>

<style lang="scss">

@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/code';
@import '~bootstrap/scss/nav';
@import '~bootstrap/scss/navbar';
@import '~bootstrap/scss/utilities/flex';
@import "~bootstrap/scss/utilities/background";

@import 'Main';

.navbar {
	display: block;
}

</style>
