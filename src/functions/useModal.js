import Modal from '$lib/Modal.svelte';
import outroAndDestroy from '$functions/outroAndDestroy';

export default function useModal(options, Component, props = {}) {
	let modalComponent = null;
	let handleSubmit = () => {};

	function show(newOptions = {}, newProps = {}) {
		modalComponent = new Modal({
			props: {
				...options,
				...newOptions,
				content: Component,
				contentProps: { ...props, ...newProps }
			},
			target: document.body,
			intro: true
		});

		modalComponent.$on('close', close);
		modalComponent.$on('submit', ({ detail }) => {
			handleSubmit(detail);
		});
	}

	function close() {
		outroAndDestroy(modalComponent);
		modalComponent = null;
	}

	function on(event, callback) {
		if (event === 'submit') {
			handleSubmit = (payload) => callback(payload);
		}
	}

	return [show, close, on];
}
