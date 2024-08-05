export async function handle({ event, resolve }) {
	const res = resolve(event, {
		filterSerializedResponseHeaders: (name) => name.startsWith('x-')
	});

	return res;
}
