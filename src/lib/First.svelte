<script>
	import { Application } from '@splinetool/runtime';

	const contents = [
		{
			id: 'content2',
			name: 'Explore next-gen strategies, insights, and transformative experiences.',
			excerpt:
				'Join thought leaders, experts, and visionaries as we dive into the realms of AI-powered sales, cutting-edge marketing, and forward-looking leadership. Get ready to shape the future of business today.',
			color: '#432C7A',
			src: 'business.png'
		},
		{
			id: 'content3',
			name: 'Network with people sharing similar interests through our online meetup sessions.',
			excerpt:
				'Connect with industry peers and get the chance to learn from each other and open up doors for new and different types of opportunities.',

			color: '#DE3C3C',
			src: 'business.png'
		}
	];

	let contentCurrentIndex = $state(0);
	let content = $derived(contents[contentCurrentIndex]);
	let animationClass = $state('enter');

	$effect(() => {
		const canvas = document.getElementById('robot');
		const app = new Application(canvas);

		app.load('https://prod.spline.design/6sCG-M77ZdqpW3hX/scene.splinecode');

		setInterval(() => {
			animationClass = 'exit';

			setTimeout(() => {
				contentCurrentIndex = (contentCurrentIndex + 1) % contents.length;
				animationClass = 'enter';
			}, 1000);
		}, 5000);
	});
</script>

<div class="first-wrapper">
	<div class="title-wrapper">
		<div class="title-inner">
			<div class="title top">VIRTUAL EVENT</div>
			<!-- <img class="title-img" src="/vr-hero.png" alt="virtual hero" height="950" /> -->
			<canvas class="title-img" id="robot"></canvas>

			<div class="title bottom">ACROSS THE GLOBE</div>

			<p class="excerpt">
				Join Callbox as we huddle with some of the most influential business leaders to discuss
				topics that will inspire and reshape how you run your business.
			</p>
		</div>
	</div>

	<div class="card-wrapper">
		<!-- {#each contents as content (content.id)} -->
		{#key content.id}
			<div class={`card ${animationClass}`}>
				<img class="image2" src={content.src} alt="content vector" loading="lazy" />

				<div class="card-content">
					<div class="card-name">
						{content.name}
					</div>
					<div class="card-excerpt">
						{content.excerpt}
					</div>
				</div>
			</div>
		{/key}

		<!-- {/each} -->
	</div>
</div>

<style lang="scss">
	@use '../styles/app';

	.first-wrapper {
		padding: 3.75rem 1rem 0;

		@include app.media('sm') {
			padding: 8rem 1rem;
			max-width: 1600px;
			margin: 0 auto;
		}
	}

	.title-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
		align-items: center;

		@include app.media('sm') {
			flex-direction: row;
			padding: 1rem 0;
		}
	}

	.title-inner {
		order: 1;
		@include app.media('sm') {
			position: relative;
			order: 0;
		}
	}

	.title-img {
		position: absolute;
		top: 25%;
		left: 0%;
		z-index: 9;
		height: 750px;

		@include app.media('sm') {
			top: 0%;
			left: 0%;
			height: 1000px;
		}
	}

	.title {
		position: relative;
		font-weight: 900;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
		@include app.text('2xl');
		text-shadow:
			0 0 3px #ff0000,
			0 0 5px #0000ff;

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
			font-weight: 1000;
			max-width: 100%;
		}

		&.top {
			font-size: 5rem;
			line-height: 1;
			z-index: 1;
			padding: 0.625rem 0 0;

			@include app.media('sm') {
				font-size: 11.425rem;
				line-height: 1;
				padding: 0.625rem 0 0;
			}
		}

		&.bottom {
			font-size: 5rem;
			line-height: 1;
			z-index: 99;
			padding: 0 0 0.625rem;

			@include app.media('sm') {
				font-size: 11.425rem;
				line-height: 1;
				padding: 0 0 0.625rem;
			}
		}
	}

	.excerpt {
		position: relative;
		z-index: 99;
		max-width: 100%;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: app.colors('grey-75');
		@include app.text('base');

		@include app.media('sm') {
			margin: 0;
			font-weight: 300;
			max-width: 550px;
			@include app.text('base');
		}
	}

	.card-wrapper {
		position: relative;
		z-index: 999;
		margin: 1rem auto 0;

		@include app.media('sm') {
			margin: 2.75rem auto 0;
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 2.75rem;

		border-radius: 1rem;
		background-color: #fff;
		padding: 1.75rem 2rem;
		box-shadow:
			rgba(240, 243, 245, 0.48) 6px 2px 16px 0px,
			rgba(255, 255, 255, 0.45) -6px -2px 16px 0px;

		@include app.media('sm') {
			flex-direction: row;
		}

		&.enter {
			animation: slideIn 500ms forwards;
		}
		&.exit {
			animation: slideOut 1s cubic-bezier(0.1, -0.15, 0.2, 0);
		}
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slideOut {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-100%);
			opacity: 0;
		}
	}

	.card-name {
		font-weight: 700;
		font-family: 'Libre Franklin', sans-serif;
		color: app.colors('grey-600');
		@include app.text('4xl');
		margin-bottom: 0.75rem;
	}

	.card-excerpt {
		font-weight: 400;
		font-family: 'Poppins', sans-serif;
		color: app.colors('grey-600');
		@include app.text('lg');
	}
</style>
