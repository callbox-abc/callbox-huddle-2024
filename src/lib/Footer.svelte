<section class="footer-master">
	<div class="cntnrX cboxContainer">
		<div class="footer-container">
			<div class="copyright">© Copyright 2023 Callbox Inc</div>
			<div class="powered">Powered by Callbox</div>
		</div>
	</div>
</section>

<style lang="scss">
	@use '../styles/app';

	.footer-master {
		background: app.colors('dark-bg'); /* fallback for old browsers */
		// background: -webkit-linear-gradient(to left, #243b55, #141e30);
		// background: linear-gradient(to left, #243b55, #141e30);
		overflow: hidden;

		.cboxContainer {
			@include app.container;
		}

		.cntnrX {
			padding-right: 0.625rem;
			padding-left: 0.625rem;

			@include app.media('lg') {
				padding-right: calc(100% / 12);
				padding-left: calc(100% / 12);
			}

			@include app.media('xl') {
				padding-right: calc(1280px / 100);
				padding-left: calc(1280px / 100);
			}
		}

		.footer-container {
			display: flex;
			justify-content: space-between;
			flex-wrap: nowrap;
			padding: 1.5rem 0;
			@include app.text('xs', 1.275rem);
			font-family: 'Poppins', sans-serif;
			font-weight: 500;
			color: #fff;

			@include app.media('sm') {
				padding: 1rem 0;
				@include app.text('sm');
				font-weight: 600;
			}

			.copyright {
				justify-content: flex-start;
			}

			.powered {
				justify-content: flex-end;
			}
		}
	}
</style>
