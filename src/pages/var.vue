<template>
<main-layout>

<h1>var, let, const and template variables</h1>


<p>
<strong>Use the correct type for the task</strong>
</p>
<pre v-highlightjs>
	<code class="javascript">
		var name = 'John'; // ES5
		let name = 'John'; // ES6
		const ENV_VARIABLE = 'production'; // A constant that should never change
	</code>
</pre>

<p><strong>Using Template Variables in ES6</strong></p>
<ul>
	<li>This makes string concatination easier and prettier</li>
	<li>Using backquotes (´) it also support multi lines.</li>
</ul>
<pre v-highlightjs>
	<code class="javascript">
		let name = "John";
		let lastname = "Smith";
		let message = ´Hi, my name is $('name') $('lastname')!´; // Hi, my name is John Smith!
	</code>
</pre>

	</main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
export default {
	components: {
		MainLayout
	}
}
</script>

<style lang="scss">

</style>