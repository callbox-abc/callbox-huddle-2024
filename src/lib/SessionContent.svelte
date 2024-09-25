<script>
	// import { fromUnixTime } from 'date-fns';
	// import { formatInTimeZone } from 'date-fns-tz';

	let { session, region, watch } = $props();

	let reg = $derived(region === 'nam' ? 'America/New_York' : 'Singapore');

	// let sessionDate = $derived(
	// 	formatInTimeZone(fromUnixTime(session?.date.seconds), reg, 'MMMM dd, yyyy @ p zzz')
	// );
</script>

<div class="content-container">
	<div class="content-container-inner">
		<div class="content-details">
			<div class="dot-container">
				<span class="dot"></span>
				<span>Session in Store</span>
			</div>
			<div class="label">{session?.label}</div>
			<div class="excerpt">
				{session?.excerpt}
			</div>
			<!-- <div class="date">{sessionDate}</div> -->
			<div class="btn-wrapper">
				<a class="reg-btn" href="watch">Watch on-demand</a>
			</div>
		</div>

		<img class="image" src={session?.src} alt={session.label} width="415" height="450" />
	</div>

	<div class="speakers-container">
		{#each session.speakers as speaker}
			<div class="speaker">
				<img class="speaker-image" src={speaker.src} alt={speaker.name} width="370" height="400" />

				<div class="speaker-details">
					<img
						class="company logo"
						src={speaker.companyLogo}
						alt={speaker.company}
						width="56"
						height="56"
					/>
					<div class="speaker-details-inner">
						<div class="speaker-name">{speaker.name}</div>
						<div class="speaker-company">
							{speaker.jobTitle}, {speaker.company}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="full-content-container">
		<div class="full-content-inner">
			<div class="full-content-title">{session?.label}</div>
			<div class="full-content-date">{sessionDate}</div>
			<div class="full-content-desc">{@html session?.desc}</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../styles/app';

	.content-container {
		// height: calc(100vh - (142px + 16rem));
	}

	.content-container-inner {
		display: flex;
		gap: 1.75rem;
		flex-direction: column;
		align-items: center;

		@include app.media('sm') {
			gap: 3.75rem;
			flex-direction: row;
		}
	}

	.content-details {
		order: 1;
		@include app.media('sm') {
			order: 0;
		}
	}

	.dot-container {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		color: app.colors('dark-bg');
		@include app.text('1sm');
		margin-bottom: 0.375rem;

		.dot {
			height: 5px;
			width: 5px;
			background-color: #46a8c3;
			border-radius: 50%;
			display: inline-block;
		}
	}

	.image {
		order: 0;
		height: auto;
		width: 90%;

		@include app.media('sm') {
			order: 1;
		}
	}

	.label {
		@include app.text('3xl');
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		color: app.colors('dark-bg');
		margin-bottom: 1.25rem;

		@include app.media('sm') {
			@include app.text('4xl', 2.875rem);
		}
	}

	.excerpt {
		@include app.text('base');
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		color: app.colors('dark-bg');
		margin-bottom: 1.25rem;

		@include app.media('sm') {
			@include app.text('base');
			font-weight: 400;
		}
	}

	.date {
		@include app.text('sm');
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: app.colors('dark-bg');

		@include app.media('sm') {
			@include app.text('sm');
			font-weight: 500;
		}
	}

	.speakers-container {
		padding-top: 8rem;
		display: grid;
		justify-content: center;

		// grid-template-rows: repeat(3, 1fr);
		grid-template-columns: none;

		row-gap: 1.5rem;

		@include app.media('sm') {
			gap: 2.5rem;
			grid-template-rows: none;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.speaker {
		position: relative;
		border-radius: 1rem;
	}

	.speaker-image {
		border-radius: 1rem;
		background-color: #fff;
		width: 370px;
		height: auto;
		// max-width: 100%;
		// border-radius: 100%;
	}

	.speaker-details {
		position: absolute;
		bottom: 5%;
		width: 90%;
		left: 50%;
		transform: translateX(-50%);

		padding: 0.375rem 2rem;

		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: space-evenly;

		background-color: #fff;
		border-radius: 3rem;

		font-family: 'Poppins', sans-serif;

		.speaker-name {
			@include app.text('base');
			font-weight: 600;
		}

		.speaker-company {
			@include app.text('sm', 1);
			font-weight: 400;
		}
	}

	.full-content-container {
		padding-top: 8rem;
	}

	.full-content-inner {
		padding: 1.5rem;
		border-radius: 1rem;
		background-color: app.colors('dark-bg');

		font-family: 'Poppins', sans-serif;
		color: app.colors('grey-150');

		@include app.media('sm') {
			padding: 3rem;
		}
	}

	.full-content-title {
		font-weight: 700;
		@include app.text('2xl');
		margin-bottom: 1rem;
		color: app.colors('grey-75');

		@include app.media('sm') {
			@include app.text('3xl');
			margin-bottom: 0.5rem;
		}
	}

	.full-content-date {
		font-weight: 500;
		@include app.text('base');
		margin-bottom: 1.25rem;
		color: app.colors('grey-200');

		@include app.media('sm') {
			@include app.text('base');
		}
	}

	.full-content-desc {
		font-weight: 400;
		@include app.text('base');
		color: app.colors('grey-150');

		@include app.media('sm') {
			@include app.text('2sm');
		}
	}

	.hopin-form-container {
		padding: 10rem 0;
	}

	.reg-btn {
		cursor: pointer;
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.5rem 0.875rem;
		text-align: center;
		text-decoration: none;

		@include app.text('sm');
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		border: 2px solid app.colors('dark-bg');

		border-radius: 0.625rem;
		color: app.colors('dark-bg');

		@include app.media('sm') {
			font-weight: 700;
			padding: 0.65rem 1.15rem;
			@include app.text('base');

			margin-top: 2rem;
		}

		&:hover {
			transform: translateY(-5px);
			transition: transform 0.45s ease;
		}
	}
</style>
