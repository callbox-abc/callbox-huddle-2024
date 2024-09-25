<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { date, region } = $props();

	let texts = [
		{ label: `Building Tomorrow's Business`, image: 'hero-1.png' },
		{ label: `Driving Tomorrow's Success`, image: 'hero-2.png' },
		{ label: `Creating Tomorrow's Solutions`, image: 'hero-5.png' },
		{ label: `Shaping Tomorrow's Future`, image: 'hero-4.png' }
	];

	const position = [
		{ left: 0, bottom: 60 },
		{ left: 60, bottom: 45 },
		{ left: 32, bottom: 42 },
		{ left: 5, bottom: 25 }
	];

	let currentIndex = $state(0);

	let intervalID;
	let dynamic = $derived(texts[currentIndex]);
	let pos = $derived(position[currentIndex]);

	const max = texts.length;

	function change() {
		currentIndex = Math.min(currentIndex + 1, max);
		if (currentIndex === max) {
			currentIndex = 0;
		}
	}

	$effect(() => {
		intervalID = setInterval(change, 11000);
	});

	onDestroy(() => {
		clearInterval(intervalID);
	});
</script>

<div class="hero-container">
	<div class="headline-inner">
		<!-- {#key currentIndex}
			<div class="headline" style={`left: ${pos.left}%; bottom: ${pos.bottom}%;`}>
				<h1 class="dynamic-text">
					{dynamic.label} Today
				</h1>
				<p class="desc">
					Join Callbox as we huddle with some of the most influential business leaders to discuss
					topics that will inspire and reshape how you run your business.
				</p>
			</div>
		{/key} -->
	</div>
	<!-- <div class="date-btn">
			<div class="date"></div>
			<a class="watch-btn" href={`#contact`}>Register now</a>
		</div> -->
</div>

<style lang="scss">
	@use '../styles/app';

	.hero-container {
		position: relative;
		padding: 3.75rem 1rem 0;

		height: 100vh;
		max-width: 1600px;
		margin: 0 auto;
	}

	.headline {
		text-align: center;

		max-width: 700px;

		@include app.media('sm') {
			position: absolute;
			text-align: left;
		}
	}

	.dynamic-text {
		font-weight: 700;
		font-size: 3.75rem;
		font-family: 'Syne', sans-serif;
		color: #fff;
		line-height: 1;

		text-shadow:
			0 1px 0 #ccc,
			0 2px 0 #c9c9c9,
			0 3px 0 #bbb,
			0 4px 0 #b9b9b9,
			0 5px 0 #aaa,
			0 6px 1px rgba(0, 0, 0, 0.1),
			0 0 5px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0, 0.3),
			0 3px 5px rgba(0, 0, 0, 0.2),
			0 5px 10px rgba(0, 0, 0, 0.25),
			0 10px 10px rgba(0, 0, 0, 0.2),
			0 20px 20px rgba(0, 0, 0, 0.15);

		@include app.media('sm') {
			font-weight: 700;
			font-size: 5rem;
			line-height: 1;
		}
	}

	.desc {
		margin: 2rem 0 0;
		font-weight: 400;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		color: #fff;
		line-height: 1.15;

		@include app.media('sm') {
			font-weight: 300;
			font-size: 1.125rem;
			line-height: 1.375;
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
</style>
