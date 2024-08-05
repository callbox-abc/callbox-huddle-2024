let intersectionObserver;

function ensureIntersectionObserver(options) {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		},
		{
			rootMargin: '200px 0px',
			threshold: 1
		}
	);
}

export default function viewport(element, options) {
	ensureIntersectionObserver(options);

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
