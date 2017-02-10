<template>
	<ul class="nav flex-column">
		<li class="nav-item">
			<a class="nav-link" href="/#/">Home</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="/#/var/">var, let, const</a>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'navigation'
}
</script>

<style lang="scss">
	@import '~bootstrap/scss/variables';
	@import '~bootstrap/scss/mixins';
	@import '~bootstrap/scss/nav';
	@import '~bootstrap/scss/utilities/flex';
</style>
