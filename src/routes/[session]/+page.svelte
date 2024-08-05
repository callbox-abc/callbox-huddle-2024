<script>
	import SessionContent from '$lib/SessionContent.svelte';
	let { data } = $props();

	let sessionId = $derived(data?.session);

	let sessions = $derived(JSON.parse(data?.sessions));

	let session = $derived(sessions.find(({ id }) => id === sessionId));

	let watch = [
		{
			id: 'keynote',
			href: `watch/keynote`
		},
		{
			id: 'tech-forward-strategies',
			href: `watch/tech`
		},
		{
			id: 'ai-powered-growth',
			href: `watch/ai-powered`
		},
		{
			id: 'leadership',
			href: `watch/leadership`
		}
	];
</script>

<div class="container">
	<div class="cboxContainer cboxX">
		<SessionContent {session} region="nam" {watch} />
	</div>
</div>

<style lang="scss">
	@use '../../styles/app';

	.container {
		position: relative;
		padding: 0;
		overflow: hidden;
		margin: 0 auto;
	}

	.cboxContainer {
		@include app.container;
	}

	.cboxX {
		padding: 8rem 0.625rem;

		@include app.media('sm') {
			padding: 8rem 0;
		}

		@include app.media('lg') {
			padding-right: calc(100% / 12);
			padding-left: calc(100% / 12);
		}

		@include app.media('xl') {
			padding-right: calc(1280px / 12);
			padding-left: calc(1280px / 12);
		}

		@include app.media('2xl') {
			padding-right: calc(1280px / 24);
			padding-left: calc(1280px / 24);
		}
	}
</style>
