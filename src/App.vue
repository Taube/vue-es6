<template>
	<div id="app">
		<header>
			<p>Header</p>
		</header>

		<div id="app-body">
			<main>
				<router-view></router-view>
			</main>
			<nav>
				<div id="nav"></div>
			</nav>
			<aside>
				<p>Aside</p>
			</aside>
		</div>

		<footer>
			<p>Footer</p>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style lang="scss">

@import '~bootstrap/scss/bootstrap-reboot';
@import 'App';

</style>
