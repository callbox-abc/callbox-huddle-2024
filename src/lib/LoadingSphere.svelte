<div class="pl">
	<div class="pl__dot pl__dot--a"></div>
	<div class="pl__dot pl__dot--b"></div>
	<div class="pl__dot pl__dot--c"></div>
	<div class="pl__dot pl__dot--d"></div>
</div>

<style lang="scss">
	.pl {
		--hue: 223;
		--bg: hsl(var(--hue), 10%, 5%);
		--fg: hsl(var(--hue), 10%, 95%);
		--dot-a: 313;
		--dot-b: 253;
		--dot-c: 223;
		--dot-d: 283;
		--trans-dur: 0.3s;
		font-size: calc(14px + (30 - 14) * (100vw - 280px) / (3840 - 280));

		$debug: false;

		@if $debug == true {
			outline: 1px solid;
		}
		margin: auto;
		perspective: 18em;
		position: relative;
		width: 9em;
		height: 9em;
		transform-style: preserve-3d;

		&__dot {
			animation: {
				duration: 3s;
				timing-function: cubic-bezier(0.37, 0, 0.63, 1);
				iteration-count: infinite;
				// play-state: paused;
			}
			border-radius: 50%;
			position: absolute;
			top: calc(50% - 1.5em);
			left: calc(50% - 1.5em);
			width: 3em;
			height: 3em;

			@if $debug == true {
				display: flex;

				&:before {
					color: hsl(0, 0, 100%);
					display: block;
					margin: auto;
					text-transform: uppercase;
				}
			}

			$dots: (a, b, c, d);
			@each $dot in $dots {
				&--#{$dot} {
					animation-name: dot-#{$dot};
					background-color: hsl(var(--dot-#{$dot}), 90%, 60%);
					box-shadow:
						-0.5em -0.5em 1em hsl(var(--dot-#{$dot}), 90%, 30%) inset,
						0.125em 0.125em 0.25em hsl(var(--dot-#{$dot}), 90%, 60%) inset,
						-0.25em -0.25em 0.75em 0.75em hsl(var(--dot-#{$dot}), 90%, 50%) inset,
						0.75em 0.75em 0.75em hsla(var(--hue), 10%, 5%, 0.7);

					@if $debug == true {
						&:before {
							content: '#{$dot}';
						}
					}
				}
			}
		}
	}

	/* Animations */
	@keyframes dot-a {
		from {
			transform: rotateY(0) rotateZ(0) translateX(-100%) rotateY(0) rotateZ(0);
		}
		50% {
			transform: rotateY(1turn) rotateZ(0) translateX(-100%) rotateY(-1turn) rotateZ(0);
		}
		to {
			transform: rotateY(1turn) rotateZ(-1turn) translateX(-100%) rotateY(-1turn) rotateZ(1turn);
		}
	}
	@keyframes dot-b {
		from {
			transform: rotateY(0) rotateZ(0) translateX(100%) rotateY(0) rotateZ(0);
		}
		50% {
			transform: rotateY(1turn) rotateZ(0) translateX(100%) rotateY(-1turn) rotateZ(0);
		}
		to {
			transform: rotateY(1turn) rotateZ(-1turn) translateX(100%) rotateY(-1turn) rotateZ(1turn);
		}
	}
	@keyframes dot-c {
		from {
			transform: rotateZ(0) rotateX(0) translateY(-100%) rotateZ(0) rotateX(0);
		}
		50% {
			transform: rotateZ(-1turn) rotateX(0) translateY(-100%) rotateZ(1turn) rotateX(0);
		}
		to {
			transform: rotateZ(-1turn) rotateX(1turn) translateY(-100%) rotateZ(1turn) rotateX(-1turn);
		}
	}
	@keyframes dot-d {
		from {
			transform: rotateZ(0) rotateX(0) translateY(100%) rotateZ(0) rotateX(0);
		}
		50% {
			transform: rotateZ(-1turn) rotateX(0) translateY(100%) rotateZ(1turn) rotateX(0);
		}
		to {
			transform: rotateZ(-1turn) rotateX(1turn) translateY(100%) rotateZ(1turn) rotateX(-1turn);
		}
	}
</style>
