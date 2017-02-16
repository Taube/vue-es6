<template>
	<li class="nav-item">
		<a
			class="nav-link"
			:class="{ active: isActive }"
			:href="href"
			@click="go"
		>
		<slot></slot>
		</a>
	</li>
</template>

<script>
import routes from '../routes'

export default {
	props: {
		href: String,
		required: true
	},
	computed: {
		isActive () {
			return this.href === this.$root.currentRoute
		}
	},
	methods: {
		go (event) {
			event.preventDefault()
			this.$root.currentRoute = this.href
			window.history.pushState(
				null,
				routes[this.href],
				this.href
			)
		}
	}
}
</script>

<style lang="scss">
	@import '~bootstrap/scss/variables';
	@import '~bootstrap/scss/mixins';
	.nav-link {
		&.active {
			color: $link-hover-color;
		}
	}
</style>