<script>
	import { Application } from '@splinetool/runtime';
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';
	import '../styles/global.scss';
	import { page } from '$app/stores';

	const stuffs = {
		title: `Callbox Huddle 2023`,
		desc: `Gain firsthand insights and network at Callbox Huddle 2023 on November 9. Be part of the conversation shaping the landscape of B2B sales and marketing.`,
		image: `https://www.callboxhuddle.com/huddle-meta.jpg`
	};

	let stuff = $derived(stuffs);
	let route = $derived($page.url);
	let { children } = $props();

	// $effect(() => {
	// 	let canvas = document.getElementById('hero-bg');
	// 	const app = new Application(canvas);
	// 	app.load('https://prod.spline.design/kRRIPW06AgfzPJIf/scene.splinecode');
	// });
</script>

<svelte:head>
	<title>{stuff?.title}</title>
	<meta name="robots" content="index, follow" />
	<meta name="description" content={stuff?.desc} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={stuff?.title} />
	<meta property="og:description" content={stuff?.desc} />
	<meta property="og:url" content="www.callboxhuddle.com" />
	<meta property="og:site_name" content="Callbox Huddle 2023" />
	<meta property="og:image" content={stuff?.image} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="450" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@callboxinc" />

	<link rel="canonical" href={route} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<script src="https://use.fontawesome.com/caf87cdd69.js"></script>
	<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
</svelte:head>

<main>
	<spline-viewer class="hero-bg" url="/hero_bg.spline"></spline-viewer>
	<div class="container">
		<Header />
		{@render children()}
		<Footer />
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		top: 0%;
	}

	.container {
		position: relative;
	}
</style>
