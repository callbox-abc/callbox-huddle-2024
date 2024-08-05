import { sessions } from '$store/firestore';
import { get } from 'svelte/store';

export async function load({ params }) {
	let $sessions = get(sessions);
	let _sessions = $sessions?.filter(({ region }) => region === 'nam');
	let session = params.session;

	return {
		sessions: JSON.stringify(_sessions),
		session
	};
}
