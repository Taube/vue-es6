<template>
	<main-layout>
		<h1>Vue Select</h1>

		<p>
			Name: <strong>{{ country.value }}</strong><br>
			Iso2: <strong>{{ country.iso2 }}</strong><br>
			Callingcode: <strong>{{ country.callingcode }}</strong><br>
			Importance: <strong>{{ country.importance }}</strong><br>
		</p>
		
		<multiselect
			label="value"
			key="iso2"
			v-model="country"
			:options="countries">

			<template slot="option" scope="props">
				<div class="option__desc">
					<span class="option__value">{{ props.option.value }}</span>
					<span class="option__callingcode">{{ props.option.callingcode }}</span>
					<span class="flag">{{ props.option.iso2 }}</span>
				</div>
			</template>

		</multiselect>

	</main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Multiselect from 'vue-multiselect'
import countries from '../countries.json'

export default {
	components: {
		Multiselect,
		MainLayout
	},
	data() {
		return {
			country: {
				value: 'Sweden',
				iso2: 'SE',
				callingcode: '+46',
				importance: 2
			},
			countries
		}
	}
}
</script>

<style lang="scss">
/*
@import '~bootstrap/scss/_variables';
@import '~bootstrap/scss/_mixins';
@import '~bootstrap/scss/_forms';
@import '~bootstrap/scss/_buttons';
@import '~bootstrap/scss/_dropdown';
@import '~bootstrap/scss/_nav';
*/
</style>