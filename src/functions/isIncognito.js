export default function isIncognito(callback) {
	let fs = window.RequestFileSystem || window.webkitRequestFileSystem;

	if (!fs) {
		callback(false);
	} else {
		fs(window.TEMPORARY, 100, callback.bind(undefined, false), callback.bind(undefined, true));
	}
}
