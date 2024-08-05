<script>
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
	<link
		href="https://fonts.googleapis.com/css2?family=Barlow&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@500&family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
	<script src="https://use.fontawesome.com/caf87cdd69.js"></script>
</svelte:head>

<main>
	<Header />
	{@render children()}
	<Footer />
</main>
