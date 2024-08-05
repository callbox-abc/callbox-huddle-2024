<script>
	let { timelines } = $props();
	import { onMount } from 'svelte';

	let element = $state();

	function observeIntersection(targetClass, observerOptions, enter) {
		const observerCallback = (entries, observer) => {
			if (enter === 'opacity') {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = '1';
						entry.target.querySelector('.timeline-date').style.opacity = '1';
						entry.target.querySelector('.timeline-content').classList.add('animate-slide');
						observer.unobserve(entry.target);
					}
				});
			} else if (enter === 'height') {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						inView = true;

						observer.unobserve(entry.target);
					}
				});
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		document.querySelectorAll(`.${targetClass}`).forEach((element) => {
			observer.observe(element);
		});
	}

	onMount(() => {
		observeIntersection(
			'step-number',
			{
				root: null,
				rootMargin: '0px 0px -400px 0px',
				threshold: 1
			},
			'opacity'
		);
		observeIntersection(
			'timeline-content-wrapper',
			{
				root: null,
				rootMargin: '0px 0px -300px 0px',
				threshold: 1
			},
			'opacity'
		);

		observeIntersection(
			'active-line',
			{
				root: null,
				rootMargin: '0px 0px -500px 0px',
				threshold: 1
			},
			'height'
		);
	});

	let newHeight = $state();

	let height = $state(0);
	let inView = $state(false);
	let theHeight = $state(0);

	$effect(() => {
		if (inView) {
			if (theHeight === 0) {
				theHeight = newHeight;
			}

			height = newHeight - theHeight;
		}
	});
</script>

<svelte:window bind:scrollY={newHeight} />

<div class="container">
	<div class="line-wrapper">
		<div class="line">
			<div class="active-line" style={`height: ${height}px`} bind:this={element}></div>
		</div>
	</div>
	<div class="timeline-wrapper">
		{#each timelines as time, i (time.id)}
			<div class={`timeline-body timeline-${i}`}>
				<div class="step">
					<div class="dark-line-wrapper">
						<div class="dark-line"></div>
					</div>
					<div class="step-number" bind:this={element}>
						{i + 1}
					</div>
				</div>

				<div class={`timeline-content-wrapper timeline-content-wrapper-${i}`} bind:this={element}>
					<div class="timeline-date">
						<div class="time">
							{time.time[0]}
						</div>
						<span class="time-to"> to </span>
						<div class="time">
							{time.time[1]}
						</div>
					</div>
					<div class="timeline-content">
						<div
							class="timeline-label"
							class:no-excerpt-label={time.excerpts?.length === 0}
							class:entertainment={time.label === 'Entertainment + Networking'}
						>
							{time.label}
						</div>

						<div class="timeline-excerpt">
							{#if time.excerpts?.length > 0}
								<ul>
									{#each time.excerpts as excerpt}
										<li>{excerpt}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '../styles/app';

	.container {
		position: relative;
		display: block;
		width: 100%;
		padding-top: 5rem;

		@include app.media('sm') {
			padding-top: 1.75rem;
		}
	}

	.line-wrapper {
		display: none;

		@include app.media('sm') {
			position: absolute;
			display: flex;
			overflow: hidden;
			width: 100px;
			height: 100%;
			align-items: center;
			justify-content: center;
			left: 0;
		}
	}

	.line {
		width: 2px;
		height: 85%;
		// background-color: hsla(0, 0%, 100%, 0.15);
		background-color: app.colors('grey-400', 0.325);
	}

	.active-line {
		position: absolute;
		width: 2px;
		max-height: 1950px;
		// background-color: #fff;
		background-color: #002132;
	}

	.timeline-wrapper {
		position: relative;
	}

	.timeline-body {
		position: relative;
		display: block;
		margin-bottom: 2rem;

		@include app.media('sm') {
			display: flex;
			gap: 5rem;
			align-items: center;
			margin-bottom: 2.5rem;
		}
	}

	.step {
		display: flex;
		flex: 0 0 auto;
		padding: 1rem 1.5rem 0;
		overflow: hidden;
		min-width: 100px;
		height: 50%;
		align-items: center;

		@include app.media('sm') {
			justify-content: center;
			padding: 1rem 0;
		}
	}

	.step-number {
		// position: absolute;
		// left: 7%;
		// top: 10%;
		opacity: 1;
		width: 45px;
		border-radius: 50%;
		text-align: center;
		color: app.colors('grey-100');
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		background-color: #002132;
		border: 2px solid app.colors('grey-100');

		transition: opacity 0.3s;

		@include app.media('sm') {
			position: relative;
			left: 0;
			top: 0;
			opacity: 0.5;
		}
	}

	.dark-line-wrapper {
		display: none;

		@include app.media('sm') {
			position: absolute;
			display: flex;
			overflow: hidden;
			width: 100px;
			height: 40%;
			align-items: center;
			justify-content: center;
			left: 0;
		}
	}

	.dark-line {
		width: 5px;
		height: 100%;
		// background-color: #002132;
		background-color: #fff;
	}

	.timeline-content-wrapper {
		padding: 1.25rem 2rem 2rem;

		transition: opacity 1.5s;
		opacity: 1;

		display: flex;
		gap: 1.25rem;
		flex: 1;
		flex-direction: column;

		@include app.media('sm') {
			display: grid;
			grid-template-columns: max-content 1fr;
			align-items: center;
			opacity: 0;
			gap: 2.5rem;
			flex-direction: row;
		}
	}

	.timeline-content {
		width: 100%;
		height: 100%;

		padding: 1.5rem 1.75rem;

		border-radius: 1rem;

		border: 2px solid #002132;

		@include app.media('sm') {
			padding: 2.5rem 3rem;
		}
	}

	.animate-slide {
		@include app.media('sm') {
			transition: opacity 250ms ease-in;
			animation: fadeInUp 1s;
		}
	}

	@keyframes fadeInUp {
		0% {
			transform: translateX(40%);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	.timeline-label {
		// margin-bottom: 0.75rem;
		@include app.text('2xl', 2rem);
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		color: app.colors('grey-600');

		@include app.media('sm') {
			@include app.text('3xl', 2.5rem);
		}
	}

	.timeline-date {
		font-family: 'Montserrat', sans-serif;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		opacity: 1;

		transition: opacity 0.5s;

		@include app.media('sm') {
			display: block;
			text-align: center;
			opacity: 0;
		}
	}

	.time {
		@include app.text('2xl');
		font-weight: 500;
		color: app.colors('grey-600');

		// border-left: 1px solid app.colors('blue-300', 0.5);

		@include app.media('sm') {
			width: 120px;
			@include app.text('3xl');
			font-weight: 600;
			color: app.colors('grey-600');
		}
	}

	.time-to {
		display: block;
		padding: 0.5rem 0;
	}

	.timeline-excerpt {
		@include app.text('sm');
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
		color: app.colors('grey-600');

		@include app.media('sm') {
			@include app.text('2sm');
		}
	}

	.no-excerpt-label {
		@include app.text('4xl', 1);
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		color: app.colors('grey-600');

		@include app.media('sm') {
			@include app.text('6xl', 1);
		}
	}

	.no-excerpt-date {
		@include app.text('xl');
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: app.colors('grey-600');

		@include app.media('sm') {
			@include app.text('4xl', 1);
		}
	}

	.entertainment {
		@include app.text('3xl', 1);
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		color: app.colors('grey-600');

		@include app.media('sm') {
			@include app.text('4xl', 1);
		}
	}
</style>
