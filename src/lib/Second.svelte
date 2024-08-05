<script>
	const sessions = [
		{
			id: 'session1',
			label: `Keynote: Next-Gen Designers of Tomorrow's Business`,
			bookmark: 'Keynote',
			excerpt: `Unveil the visionary power of Next-Gen Designers, as they illuminate the path towards reshaping tomorrow's business landscape with innovation, creativity, and pioneering strategies.`,
			color: '#003f60',
			fontColor: '#f9f9f9',
			btnColor: '#ffffff',
			src: 'keynoteRom.png',
			smallimg: 'session1.webp',
			href: '/keynote'
		},
		{
			id: 'session2',
			label: 'Tech-Forward Strategies for Future-Ready Businesses',
			bookmark: 'Tech-Forward Strategies',
			excerpt:
				'Explore how technologies like AI, automation, and IoT are reshaping industries. Learn how to harness these advancements to drive efficiency, enhance customer experiences, and position your business as a leader in the digital age.',
			color: '#432C7A',
			fontColor: '#f9f9f9',

			btnColor: '#46a8c3',
			src1: '/nam_technology.png',
			src2: '/apac_technology.png',
			smallimg: 'session2.webp',
			href: 'tech-forward-strategies'
		},
		{
			id: 'session3',
			label: 'AI-Powered Growth: Pioneering Future Business Success',
			bookmark: 'AI-Powered Growth',
			excerpt:
				'Delve into the synergy between sales, marketing, and AI to create seamless customer journeys and drive revenue growth. Discover strategies to personalize outreach, leverage predictive analytics, and optimize lead conversion through AI-powered insights.',
			color: '#eee',
			fontColor: '#161616',

			btnColor: '#ff8f4f',
			src1: '/nam_marketing.png',
			src2: '/apac_marketing.png',
			smallimg: 'session3.webp',
			href: 'ai-powered-growth'
		},
		{
			id: 'session4',
			label: 'Leadership Innovations: Guiding Your Business into the Future',
			bookmark: 'Leadership Innovations',
			excerpt:
				'Uncover the leadership qualities and approaches required to navigate rapidly evolving business landscapes. Gain insights into fostering innovation, nurturing talent, and adapting strategies that lay the foundation for sustained success in an ever-changing world.',
			color: '#11386f',
			fontColor: '#f9f9f9',

			btnColor: '#fef7c9',
			src: 'leader.png',
			smallimg: 'session4.webp',
			href: 'leadership'
		},
		{
			id: 'session5',
			label: 'Meet your Peers Virtually',
			bookmark: 'Networking',
			excerpt:
				'What better way to discover new opportunities than by meeting new people who share your interests and uncovering new gems of information together?',
			color: '#d44336',
			fontColor: '#f9f9f9',
			btnColor: '#f9f9f9',
			src: 'virtually.png',
			smallimg: 'session5.webp',
			href: 'networking'
		}
	];

	let sessionCurrentIndex = $state(0);
	let selected = $derived(sessions[sessionCurrentIndex]);

	let selectedSession = $derived(sessions.find(({ id }) => id === selected.id));

	$effect(() => {
		setInterval(() => {
			sessionCurrentIndex = (sessionCurrentIndex + 1) % sessions.length;
		}, 10000);
	});
</script>

<div class="second-wrapper">
	<div class="title-wrapper">
		<div class="title">Sessions in Store for You</div>
	</div>

	<div class="content-wrapper">
		<div class="session-and-line">
			<div class="session-wrapper">
				{#each sessions as session, i (session.id)}
					<label
						class="session-label"
						class:selectedSession={session.id === selectedSession?.id}
						for={session.id}
					>
						{session.label}
						<input
							class="session-input"
							type="radio"
							id={session.id}
							value={i}
							bind:group={sessionCurrentIndex}
						/>
						<img class="img" src={session.smallimg} alt="sessionimg" width="65" />
					</label>
				{/each}
			</div>

			<div class="line-wrapper">
				{#each sessions as session, i (session.id)}
					<div class="line" class:selectedline={session.id === selectedSession.id}></div>
				{/each}
				{#if selectedSession?.id === 'session1'}
					<svg
						width="1650"
						height="500"
						viewBox="0 0 1500 1500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-20" y="-20" width="300" height="195">
								<feGaussianBlur in="SourceGraphic" stdDeviation="20" />
							</filter>
						</defs>

						<ellipse
							cx="-1250"
							cy="550"
							rx="475"
							ry="285"
							fill="#014e89"
							filter="url(#blurFilterOne)"
						/>
					</svg>
				{:else if selectedSession?.id === 'session2'}
					<svg
						width="1650"
						height="500"
						viewBox="0 0 1500 1500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-20" y="-20" width="435" height="195">
								<feGaussianBlur in="SourceGraphic" stdDeviation="50" />
							</filter>
						</defs>

						<ellipse
							cx="-300"
							cy="550"
							rx="475"
							ry="285"
							fill="#014e89"
							filter="url(#blurFilterOne)"
						/>
					</svg>
				{:else if selectedSession?.id === 'session3'}
					<svg
						width="1585"
						height="500"
						viewBox="0 0 1500 1500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-30" y="-30" width="435" height="195">
								<feGaussianBlur in="SourceGraphic" stdDeviation="50" />
							</filter>
						</defs>

						<ellipse
							cx="750"
							cy="550"
							rx="475"
							ry="285"
							fill="#014e89"
							filter="url(#blurFilterOne)"
						/>
					</svg>
				{:else if selectedSession?.id === 'session4'}
					<svg
						width="1650"
						height="500"
						viewBox="0 0 1500 1500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-30" y="-30" width="435" height="195">
								<feGaussianBlur in="SourceGraphic" stdDeviation="50" />
							</filter>
						</defs>

						<ellipse
							cx="1625"
							cy="550"
							rx="475"
							ry="285"
							fill="#014e89"
							filter="url(#blurFilterOne)"
						/>
					</svg>
				{:else if selectedSession?.id === 'session5'}
					<svg
						width="1650"
						height="500"
						viewBox="0 0 1500 1500"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="branch-bg-gradientcolor"
					>
						<defs>
							<filter id="blurFilterOne" x="-30" y="-30" width="435" height="195">
								<feGaussianBlur in="SourceGraphic" stdDeviation="75" />
							</filter>
						</defs>

						<ellipse
							cx="2570"
							cy="550"
							rx="475"
							ry="285"
							fill="#014e89"
							filter="url(#blurFilterOne)"
						/>
					</svg>
				{/if}
			</div>
		</div>
		<div class="selected-wrapper">
			<img class="selected-img" src="version 1.png" alt="sessionimg" width="850" />
			{#key selectedSession.id}
				<div class="selected-content">
					<div class="selected-bookmark">{selectedSession.bookmark}</div>
					<div class="selected-label">{selectedSession.label}</div>
					<div class="selected-excerpt">
						{selectedSession.excerpt}
					</div>
					<div class="selected-btn">
						<a class="btn" href={selectedSession.href}>
							<span> Learn More </span>
							<svg width="12" height="11">
								<g>
									<path class="line-arrow" d="M 0 5 H 9"></path>
									<path class="tip-arrow" d="M 5 10 L 10 5 L 5 0"></path>
								</g>
							</svg>
						</a>
					</div>
				</div>
			{/key}
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/app';

	.second-wrapper {
		padding: 3.75rem 0 0;

		@include app.media('sm') {
			padding: 8rem 0 0;
			max-width: 1600px;
			margin: 0 auto;
		}
	}

	.title-wrapper {
		padding: 1rem 1.5rem;
		display: flex;
		justify-content: flex-end;
		text-align: start;

		@include app.media('sm') {
			padding: 1rem;
			text-align: end;
		}
	}

	.title {
		position: relative;
		padding: 0.55rem 0;
		font-weight: 800;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
		@include app.text('6xl', 4rem);

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
			font-weight: 900;
			max-width: 800px;

			font-size: 7rem;
			line-height: 1.1;
		}
	}

	.session-and-line {
		position: relative;
		overflow: hidden;
	}

	.session-wrapper {
		position: relative;
		z-index: 99;
		display: block;
		padding: 1.5rem;

		@include app.media('sm') {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
			justify-items: end;
			text-align: end;
			padding: 1.5rem 0 1.75rem;
		}
	}

	.session-label {
		display: none;
		gap: 1.25rem;

		font-family: 'Montserrat', sans-serif;
		color: app.colors('grey-800');
		@include app.text('base');
		font-weight: 600;

		cursor: pointer;

		&.selectedSession {
			display: grid;
			grid-template-columns: 1fr max-content;
			gap: 1.25rem;
			animation: selectedSlide 1.25s;
		}

		@include app.media('sm') {
			display: flex;
			@include app.text('sm');
			font-weight: 600;
		}
	}

	@keyframes selectedSlide {
		0% {
			transform: translateX(50%);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	.session-input {
		position: fixed;
		left: -99999px;
	}

	.img {
		border-radius: 0.185rem;
	}

	.line-wrapper {
		display: block;

		svg {
			position: absolute;
			top: 0;
			opacity: 1;

			display: none;

			@include app.media('sm') {
				display: block;
			}
		}

		@include app.media('sm') {
			position: absolute;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			bottom: 0;

			height: 100%;
			width: 100%;
			z-index: 9;
		}
	}

	.line {
		padding: 0.5rem 0 0;
		border-bottom: 1px solid app.colors('grey-250', 0.375);
		display: none;

		@include app.media('sm') {
			display: block;
			padding: 1.75rem 0 0;
		}

		&.selectedline {
			display: block;
			animation: expand 10s;
			border-bottom: 3px solid app.colors('blue-400', 0.875);
		}
	}

	@keyframes expand {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}

	.content-wrapper {
		padding: 1.75rem 0 0;

		@include app.media('sm') {
			padding: 5rem 0 2.75rem;
		}
	}

	.selected-wrapper {
		padding: 1.75rem 1.5rem;
		overflow: hidden;

		@include app.media('sm') {
			display: flex;
			gap: 5rem;
			padding: 5rem 1.75rem;
		}
	}

	.selected-img {
		border-radius: 0.475rem;
		box-shadow:
			rgba(0, 0, 0, 0.3) 0px 14px 28px,
			rgba(0, 0, 0, 0.25) 0px 10px 10px;
		width: 100%;

		@include app.media('sm') {
			width: 850px;
		}
	}

	.selected-content {
		padding: 1.25rem 0;
		text-align: start;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		animation: fadeInLeft 1.25s;

		@include app.media('sm') {
			text-align: end;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			animation: fadeInUp 1.25s;
		}
	}

	@keyframes fadeInUp {
		0% {
			transform: translateY(40%);
			opacity: 0;
		}
		100% {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	@keyframes fadeInLeft {
		0% {
			transform: translateX(10%);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	.selected-bookmark {
		font-family: 'Montserrat', sans-serif;
		color: app.colors('grey-800');
		@include app.text('base');
		font-weight: 600;
	}

	.selected-label {
		font-family: 'Poppins', sans-serif;
		color: app.colors('grey-800');
		@include app.text('2xl');
		font-weight: 700;

		@include app.media('sm') {
			margin-top: 0.5rem;
			color: app.colors('grey-800');
			@include app.text('3xl');
			font-weight: 700;
		}
	}

	.selected-excerpt {
		font-family: 'Poppins', sans-serif;
		color: app.colors('grey-800');
		@include app.text('base');
		font-weight: 400;

		@include app.media('sm') {
			@include app.text('sm');
			font-weight: 400;
		}
	}

	.selected-btn {
		display: inline-block;

		.btn {
			display: inline-flex;
			align-items: center;
			gap: 0.875rem;
			cursor: pointer;
			text-decoration: none;
			border: 0;
			border-radius: 9999px;

			margin-top: 1rem;

			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			@include app.text('base');
			padding: 0.5rem 1rem 0.5rem 1.25rem;
			color: app.colors('grey-800');

			border: 1px solid app.colors('grey-400');
			border-radius: 9999px;

			&:hover {
				background-color: transparent;
				color: app.colors('purple-100');

				.line-arrow {
					opacity: 1;
					stroke: app.colors('purple-100');
				}

				.tip-arrow {
					transform: translate(0px, 0);
					stroke: app.colors('purple-100');
				}
			}

			@include app.media('sm') {
				font-weight: 600;
				@include app.text('lg');
				padding: 0.625rem 1.25rem 0.625rem 1.5rem;
			}
		}
	}

	.line-arrow {
		opacity: 0;
		transition: opacity 200ms ease-in-out;
		stroke: app.colors('grey-400');
		stroke-width: 2.325px;
		fill: transparent;
	}

	.tip-arrow {
		transform: translate(-5px, 0);
		transition: transform 200ms ease-in-out;
		stroke: app.colors('grey-400');
		stroke-width: 2.325px;
		fill: transparent;
	}
</style>
