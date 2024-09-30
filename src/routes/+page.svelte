<script>
	import First from '$lib/First.svelte';
	import Second from '../lib/Second.svelte';
	import Third from '../lib/Third.svelte';
	import HeroTwo from '$lib/HeroTwo.svelte';
	import { browser } from '$app/environment';

	let isScrolling = $state(true);

	function handleScroll(event) {
		console.log(event);
		if (event.deltaY > 99) {
			isScrolling = false;
		} else {
			isScrolling = true;
		}
	}
	let y = $state();
	// function handleWheel(e) {
	// 	console.log(e.target.scrollY);
	// }
	let removebg = $state(false);
	$effect(() => {
		if (browser) {
			window.addEventListener('wheel', handleScroll);
		}

		if (y > 0) {
			setTimeout(() => {
				removebg = true;
			}, 1000);
		}

		if (removebg && y <= 0) {
			removebg = false;
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<!-- {#if isScrolling && y <= 0} -->
<div class="hero-bg" class:removebg>
	<HeroTwo />
</div>
<!-- {:else} -->
<div class="main-wrapper" class:animateUp={y > 0}>
	<div class="inner-container">
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
					<ellipse
						cx="205"
						cy="550"
						rx="720"
						ry="225"
						fill="#9568c3"
						filter="url(#blurFilterOne)"
					/>
					<ellipse
						cx="1200"
						cy="625"
						rx="450"
						ry="225"
						fill="#46a8c3"
						filter="url(#blurFilterOne)"
					/>
				</svg>
			</div>

			<div class="content-wrapper">
				<First />
			</div>
		</div>

		<Second />

		<Third />

		<div class="form" id="contact">hello world</div>
	</div>
</div>

<!-- {/if} -->

<style lang="scss">
	@use '../styles/app';

	.main-wrapper {
		position: relative;
		background-color: #fff;
		padding-top: 3rem;
		transform: translateY(70%);
		transition: transform 2s ease; /* Only transition the transform property */

		&.animateUp {
			transform: translateY(0%);
		}
	}
	.hero-bg {
		display: block;
		&.removebg {
			display: none;
		}
	}

	.first-section {
		z-index: 9;
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
