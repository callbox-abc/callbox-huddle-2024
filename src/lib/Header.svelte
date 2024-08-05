<script>
	import { page } from '$app/stores';

	let width = $state();
	let open = false;

	let route = $derived($page.route?.id);
</script>

<svelte:window bind:innerWidth={width} />

<section class="header-master" class:nogradient={route === '/'}>
	<div class="cntnrX cboxContainer">
		<div class="container">
			<header class="container-header">
				<div class="logo">
					<a href="/"><img src="/huddle-logo.svg" alt="Logo" width="160" height="85" /></a>
				</div>
				<!-- {#if route !== '/'}
					<div class="meet-btn-container">
						{#if route.includes('/nam/meet')}
							<a class="meet-btn" href="/apac/meet">Asia-Pacific</a>
						{:else if route.includes('/apac/meet')}
							<a class="meet-btn" href="/nam/meet">North America</a>
						{:else if route.includes('/nam')}
							<a class="meet-btn" href="/apac">Asia-Pacific</a>
							<a class="meet-btn connect" href="/nam/meet">Connect</a>
						{:else}
							<a class="meet-btn" href="/nam">North America</a>
							<a class="meet-btn connect" href="/apac/meet">Connect</a>
						{/if}
					</div>
				{/if} -->
			</header>
		</div>
	</div>
</section>

<style lang="scss">
	@use '../styles/app';

	.header-master {
		width: 100%;

		position: sticky;
		z-index: 1;

		&.nogradient {
			background: none;
			background-color: transparent;
			box-shadow: none;
		}

		// box-shadow:
		// 	rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		// 	rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

		// background: rgb(20, 21, 71);
		// background: linear-gradient(
		// 	45deg,
		// 	rgba(74, 84, 173, 1) 0%,
		// 	rgba(0, 78, 84, 1) 40%,
		// 	rgba(0, 33, 50, 1) 100%
		// );

		@include app.media('sm') {
			// background: rgb(20, 21, 71);
			// background: linear-gradient(
			// 	45deg,
			// 	rgba(20, 21, 71, 1) 0%,
			// 	rgba(74, 84, 173, 1) 36%,
			// 	rgba(0, 78, 84, 1) 80%,
			// 	rgba(0, 33, 50, 1) 100%
			// );
			background-color: transparent;
		}

		.cboxContainer {
			@include app.container;
		}

		.cntnrX {
			padding-right: 1rem;
			padding-left: 1rem;

			@include app.media('lg') {
				padding-right: calc(100% / 12);
				padding-left: calc(100% / 12);
			}

			@include app.media('xl') {
				padding-right: calc(1280px / 24);
				padding-left: calc(1280px / 24);
			}
		}

		.container-header {
			display: grid;
			grid-template-columns: max-content 1fr;

			align-items: center;

			@include app.media('sm') {
				grid-template-columns: 1fr 1fr;
			}
		}
		.logo {
			max-height: 90px;
			padding: 0;
		}

		.menu {
			display: flex;
			justify-content: flex-end;

			@include app.media('sm') {
				align-items: center;
			}
		}

		.nav {
			position: absolute;
			margin: 0;
			top: 25%;
			left: 0;
			right: 0;
			background-color: #fff;
			padding: 1.5rem;
			border-radius: 0.5rem;
			box-shadow:
				0 50px 100px -20px rgba(50, 50, 93, 0.25),
				0 30px 60px -30px rgba(0, 0, 0, 0.3);

			@include app.media('sm') {
				position: relative;
				box-shadow: none;
				padding: 0.15rem;
				background-color: transparent;
			}

			ul {
				padding: 0;
				margin: 0;
				list-style: none;
				display: block;
				gap: 1rem;

				@include app.media('sm') {
					display: flex;
					align-items: center;
					gap: 1.75rem;
				}

				li {
					display: block;
					padding: 0;
					@include app.media('sm') {
						display: inline-block;
					}
				}
			}

			.link {
				border-radius: 0.225rem;
				padding: 0.225rem 0.5rem;
				display: inline-block;
				@include app.text('base', 2rem);
				font-family: 'Poppins', sans-serif;
				font-weight: 600;
				text-decoration: none;
				color: app.colors('dark-bg');
				cursor: pointer;

				@include app.media('sm') {
					color: #fff;
					padding: 0.625rem 0.975rem;
					@include app.text('sm');
				}

				&:hover {
					color: app.colors('blue-100');
				}
			}

			.btn {
				border: 1px solid #51bdef;
				background-color: #51bdef;
				border-radius: 0.225rem;
				padding: 0.225rem 0.5rem;
				display: inline-block;
				@include app.text('1sm');
				font-family: 'Poppins', sans-serif;
				font-weight: 600;
				text-decoration: none;
				color: #fff;
				cursor: pointer;

				&:hover {
					border: 1px solid#51bdef;
					color: #51bdef;
					background-color: transparent;
				}

				@include app.media('sm') {
					padding: 0.625rem 0.975rem;
					@include app.text('sm');
				}
			}
		}

		.close-btn {
			position: absolute;
			top: 0;
			right: 0;
			background-color: transparent;
			border: 0;
			padding: 0.75rem;
			@include app.media('sm') {
				display: none;
			}
		}
		.menu-btn {
			background-color: transparent;
			border: none;
		}
	}

	.meet-btn-container {
		text-align: end;
	}

	.meet-btn {
		display: inline-block;

		text-decoration: none;

		padding: 0.5rem 0.65rem;
		font-weight: 500;
		// font-size: 0.775rem;
		@include app.text('xs');

		color: #fff;
		// border: 1px solid #9568c3;
		border-radius: 1.5rem;

		font-family: inherit;

		background: linear-gradient(45deg, #4a54ad, #46a8c3, #9568c3, #46a8c3);
		background-size: 240% 240%;
		animation: gradient-animation 5s ease infinite;

		@include app.media('sm') {
			padding: 0.75rem 1rem;
			font-weight: 600;
			@include app.text('base');
		}

		&:hover {
			transform: translateY(-5px);
			transition: transform 0.45s ease;
		}
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.connect {
		margin-left: 0.375rem;

		@include app.media('sm') {
			margin-left: 0.75rem;
		}
	}
</style>
