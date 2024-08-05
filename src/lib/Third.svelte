<script>
	import Timeline from './Timeline.svelte';

	let timelines = [
		{
			id: '1',
			label: `Keynote: Next-Gen Designers of Tomorrow's Business`,
			time: ['1:00 PM', '1:30 PM'],
			excerpts: [
				'Gain insights into the visionary power of Next-Gen Designers',
				'Explore the transformative potential of innovation, creativity, and pioneering strategies.',
				'Illuminate the path towards reshaping the future business landscape.'
			],
			src: 'keynote-agenda.png'
		},
		{
			id: '2',
			label: 'Networking',
			time: ['1:30 PM', '1:45 PM'],
			excerpts: [],
			src: 'networking-agenda.png'
		},
		{
			id: '3',
			label: 'Tech-Forward Strategies for Future-Ready Businesses',
			time: ['1:45 PM', '2:30 PM'],
			excerpts: [
				'Discover the role of AI, automation, and IoT in shaping industries.',
				'Learn to leverage technology for enhanced efficiency and customer experiences.',
				'Position your business as a leader in the evolving digital landscape.'
			],
			src: 'tech-agenda.png'
		},
		{
			id: '4',
			label: 'Entertainment + Networking',
			time: ['2:30 PM', '2:45 PM'],
			excerpts: [],
			src: 'entertainment-agenda.png'
		},
		{
			id: '5',
			label: 'AI-Powered Growth: Pioneering Future Business Success',
			time: ['2:45 PM', '3:30 PM'],
			excerpts: [
				'Explore the dynamic intersection of sales, marketing, and AI.',
				'Uncover strategies to personalize outreach and optimize lead conversion.',
				'Harness the power of AI-driven insights to drive seamless customer journeys and revenue growth.'
			],
			src: 'marketing-agenda.png'
		},
		{
			id: '6',
			label: 'Networking',
			time: ['3:30 PM', '3:45 PM'],
			excerpts: [],
			src: 'networking-agenda.png'
		},
		{
			id: '7',
			label: 'Leadership Innovations: Guiding Your Business into the Future',
			time: ['3:45 PM', '4:30 PM'],
			excerpts: [
				'Learn leadership qualities for navigating evolving business landscapes.',
				'Gain insights into fostering innovation and nurturing talent.',
				'Adapt strategies for sustained success in an ever-changing world.'
			],
			src: 'leadership-agenda.png'
		}
	];
</script>

<div class="third-wrapper">
	<div class="title-wrapper">
		<div class="title">Don’t miss a thing!</div>
	</div>
	<Timeline {timelines} />
</div>

<style lang="scss">
	@use '../styles/app';

	.third-wrapper {
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
			max-width: 1280px;

			font-size: 7rem;
			line-height: 1.1;
		}
	}
</style>
