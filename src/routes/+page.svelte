<script>
	import Hero from '$lib//Hero.svelte';
	import First from '$lib/First.svelte';
	import Second from '../lib/Second.svelte';
	import Third from '../lib/Third.svelte';
	import Timeline from '../lib/Timeline.svelte';

	// let { data } = $props();
</script>

<Hero />

<div class="first-section">
	<div class="svg-wrapper">
		<svg
			width="1900"
			height="1900"
			viewBox="0 0 1500 1500"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="branch-bg-gradientcolor"
		>
			<defs>
				<filter id="blurFilterOne" x="-20" y="-20" width="435" height="195">
					<feGaussianBlur in="SourceGraphic" stdDeviation="75" />
				</filter>
			</defs>
			<!-- <circle cx="600" cy="680" r="300" fill="#9568c3" filter="url(#blurFilterOne)" /> -->
			<!-- <circle cx="205" cy="600" r="275" fill="#9568c3" filter="url(#blurFilterOne)" /> -->
			<!-- <circle cx="1150" cy="700" r="285" fill="#46a8c3" filter="url(#blurFilterOne)" /> -->
			<ellipse cx="205" cy="550" rx="720" ry="225" fill="#9568c3" filter="url(#blurFilterOne)" />
			<ellipse cx="1200" cy="625" rx="450" ry="225" fill="#46a8c3" filter="url(#blurFilterOne)" />
		</svg>
	</div>

	<div class="content-wrapper">
		<First />
	</div>
</div>

<Second />

<Third />

<style lang="scss">
	@use '../styles/app';

	.first-section {
		position: relative;
		overflow: hidden;
		max-width: 100%;
	}

	.svg-wrapper {
		position: absolute;
		top: 0;
		opacity: 1;
		scale: 1.275;
		transition: opacity 100ms ease-in-out;
		z-index: 9;
	}

	@keyframes rotate_move {
		50% {
			transform: rotate(180deg);
		}
	}

	.content-wrapper {
		position: relative;
		z-index: 99;
	}
</style>
