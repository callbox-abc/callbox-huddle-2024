<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { date, region } = $props();

	let texts = [
		{ label: `Building Tomorrow's Business `, image: 'hero-1.png' },
		{ label: `Driving Tomorrow's Success `, image: 'hero-2.png' },
		{ label: `Creating Tomorrow's Solutions `, image: 'hero-5.png' },
		{ label: `Shaping Tomorrow's Future `, image: 'hero-4.png' }
	];

	let currentIndex = $state(0);
	let intervalID;
	let dynamic = $derived(texts[currentIndex]);

	let bool = true;

	const max = texts.length;

	function change() {
		setTimeout(() => (bool = true), 3000);

		currentIndex = Math.min(currentIndex + 1, max);

		if (currentIndex === max) {
			currentIndex = 0;
		}
		setTimeout(() => (bool = false), 750);
	}

	// Function to change the text
	$effect(() => {
		intervalID = setInterval(change, 5000);
	});

	onDestroy(() => {
		clearInterval(intervalID);
	});
</script>

<div class="hero-container">
	<!-- <div class="hero-shadow"></div> -->
	<!-- <div class="hero-linearbg"></div> -->
	<!-- <div class="hero-grid"></div> -->
	<!-- <div class="hero-box">
		<img src="/hero-box.svg" alt="hero box vector" width="600" height="600" />
	</div> -->
	<div class="hero-left">
		<div class="hero-content">
			<div class="dynamic-image-wrapper">
				{#key currentIndex}
					<img
						class="dynamic-image"
						src={dynamic.image}
						alt={dynamic.label}
						width="350"
						height="350"
						in:fly={{
							delay: 525,
							duration: 2000,
							y: -75,
							easing: quintOut
						}}
						out:fly={{
							delay: 0,
							duration: 500,
							y: 50,
							easing: quintOut
						}}
					/>
				{/key}
			</div>

			<div class="headline-wrapper">
				{#key currentIndex}
					<h1 class="headline">
						<span
							class="dynamic-text"
							data-text={dynamic.label}
							in:fade={{ delay: 0, duration: 2000 }}
						>
							{dynamic.label}
						</span>
						<span class="static-text-wrapper">
							<span class="today">Today</span>
						</span>
					</h1>
				{/key}
			</div>
			<div class="fake-div"></div>
			<div class="date-btn">
				<div class="date"></div>
				<a class="watch-btn" href={`/${region}/watch`}>Watch now</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/app';

	.hero-container {
		position: relative;
		padding: 0;
		height: 100%;
		width: 100%;

		background: rgb(0, 125, 135);

		background-color: #fff;

		overflow: hidden;

		@include app.media('xl') {
			position: relative;

			padding: 1rem 0;
			height: calc(100vh - 90px);
			width: 100%;
		}

		@include app.media('2xl') {
			position: relative;

			padding: 5rem 0;
			height: calc(100vh - 90px);
			width: 100%;
		}
	}

	.hero-grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/hero-grid.png');
		background-repeat: repeat;
		background-size: 46px 46px;
		opacity: 0.125;
	}

	.hero-box {
		display: none;
		@include app.media('sm') {
			display: block;
			position: absolute;
			bottom: 200px;
			right: 100px;
			width: 30%;
			height: 30%;

			opacity: 0.75;
		}
	}

	.hero-linearbg {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 30%;
	}

	.hero-content {
		z-index: 1;
		display: grid;
		gap: 1rem;
		justify-items: center;

		@include app.media('sm') {
			grid-template-columns: 350px 1fr;
			gap: 1.25rem;
		}
	}

	.headline-wrapper {
		// top: 225px;
		// left: 2rem;

		margin-top: -50px;

		@include app.media('xl') {
			position: absolute;
			top: calc(450px / 2);
			left: 32%;
		}

		@include app.media('2xl') {
			position: absolute;
			top: calc(450px / 2);
			left: 22%;
		}
	}

	.headline {
		text-align: center;
		font-weight: 900;

		@include app.media('sm') {
			text-align: left;
		}
	}

	.dynamic-text {
		// display: block;
		font-family: 'Poppins', sans-serif;

		@include app.text('5.5xl', 3.75rem);
		font-weight: 900;

		background-image: linear-gradient(-45deg, #747fd1, #fef7c9, #3a6ea5, #ff6700);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: moveGradient 8s ease infinite;
		background-size: 200% 100%;

		@include app.media('xl') {
			@include app.text('7xl', 6.85rem);
		}

		@include app.media('2xl') {
			@include app.text('8xl', 7.85rem);
		}
	}

	@keyframes moveGradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}

		75% {
			background-position: 0% 75%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	.static-text-wrapper {
		// margin-top: 3rem;
		display: inline-flex;
		gap: 2rem;
		align-items: center;
	}

	.dynamic-image-wrapper {
		position: relative;
		width: 220px;
		height: 220px;
		background-color: app.colors('grey-75', 0.05);
		border-radius: 50%;

		@include app.media('sm') {
			border-radius: 50%;

			width: 350px;
			height: 350px;
		}
	}

	.dynamic-image {
		position: absolute;
		width: 220px;
		height: auto;
		// transform: translateY(-35%);
		z-index: 0;
		padding: 3.25rem;

		@include app.media('sm') {
			width: 350px;
			height: auto;

			padding: 3.25rem;
		}
	}

	.today {
		// display: block;
		@include app.text('5.5xl');
		color: #ff6700;

		@include app.media('xl') {
			@include app.text('7xl');
		}

		@include app.media('2xl') {
			@include app.text('8xl');
		}
	}

	.date-btn {
		display: flex;
		flex-direction: column;

		align-items: center;

		@include app.media('sm') {
			align-items: center;
		}
	}

	.date {
		padding: 1.5rem 0;
		font-family: 'Poppins', sans-serif;
		color: app.colors('grey-75');
		@include app.text('sm', 1.75rem);
		font-weight: 600;

		@include app.media('sm') {
			font-weight: 500;
			@include app.text('xl', 1.75rem);
		}
	}

	.watch-btn {
		display: inline-block;
		text-decoration: none;
		padding: 0.875rem 1.875rem;

		text-align: center;
		border-radius: 0.75rem;

		background-color: #747fd1;
		border: 2px solid #747fd1;

		font-family: 'Poppins', sans-serif;
		color: #fff;
		@include app.text('xl');
		font-weight: 600;

		scroll-behavior: smooth;

		&:hover {
			background-color: transparent;
			border: 2px solid #fff;
			color: #fff;
			transition: background-color 0.3s ease;
		}
	}

	.hero-left {
		position: relative;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
		@include app.media('lg', true) using ($bp) {
			// max-width: calc(#{$bp} / 5 * 3);
			padding-left: calc(100vw / 12);
			padding-right: 0;
		}

		@include app.media('xl') {
			padding-top: 8rem;
			padding-bottom: 8rem;
			margin-left: auto;
			// width: calc((1280px - #{$gap}) / 2);
			padding-left: calc(1280px / 12);
		}

		@include app.media('2xl') {
			padding-top: 8rem;
			padding-bottom: 8rem;
			margin-left: auto;
			// width: calc((1280px - #{$gap}) / 2);
			width: calc(((100vw - 1280px) / 2) + 1280px); // ((100vw - 1280px) / 2)
			padding-left: calc(1280px / 24);
		}
	}
</style>
