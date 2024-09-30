<svelte:head>
	<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
</svelte:head>
<div class="container">
	<spline-viewer
		class="hero-bg"
		url="/hero_bg.spline"
		loading="eager"
		style="height: 1200px; width: 1920px"
	></spline-viewer>
</div>

<style lang="scss">
	.container {
		position: absolute;
		top: 0;
		overflow: hidden;
		height: 100vh;
		width: 100%;
	}
</style>
