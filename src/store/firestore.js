import {
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	orderBy,
	onSnapshot
} from 'firebase/firestore';
import app from './firebase';
import { readable } from 'svelte/store';

const db = getFirestore(app);

const teamsRef = collection(db, 'team');
const sessionRef = collection(db, 'session');

export async function addDataToFirestore(data, collectionName, compareData) {
	if (data.length) {
		for (const itemData of data) {
			try {
				await addDoc(collection(db, collectionName), itemData);
				console.log('Document added successfully:', itemData);
			} catch (error) {
				console.error('Error adding document:', error);
			}
		}
	} else {
		if (compareData?.length) {
			for (const comData of compareData) {
				if (data.id !== comData.id) {
					await addDoc(collection(db, collectionName), data);
					console.log('Document added successfully:', data);
				} else {
					console.error('Error adding document: Data already existed or ', error);
				}
			}
		} else {
			try {
				await addDoc(collection(db, collectionName), data);
				console.log('Document added successfully:', data);
			} catch (error) {
				console.error('Error adding document:', error);
			}
		}
	}
}

function createTeams() {
	let unsubscribe = () => {};
	let teams = [];

	const { subscribe } = readable(
		null,
		(set) => {
			try {
				const q = query(teamsRef, orderBy('order'), orderBy('name', 'asc'));

				unsubscribe = onSnapshot(q, (querySnapshot) => {
					teams = [];
					querySnapshot.forEach((doc) => teams.push({ ...doc.data(), documentId: doc.id }));

					set(teams);
				});
			} catch (error) {
				unsubscribe();
			}
		},
		[]
	);

	return {
		subscribe
	};
}

export const teams = createTeams();

function createSessions() {
	let unsubscribe = () => {};
	let teams = [];

	const { subscribe } = readable(
		null,
		(set) => {
			try {
				const q = query(collection(db, 'sessions'), orderBy('date', 'desc'));

				unsubscribe = onSnapshot(q, (querySnapshot) => {
					teams = [];
					querySnapshot.forEach((doc) => teams.push({ ...doc.data(), documentId: doc.id }));

					set(teams);
				});
			} catch (error) {
				unsubscribe();
			}
		},
		[]
	);

	return {
		subscribe
	};
}

export const sessions = createSessions();

function createContentUrl() {
	let unsubscribe = () => {};
	let contentUrl = [];

	const { subscribe } = readable(
		null,
		(set) => {
			try {
				const q = query(collection(db, 'emailLog'), orderBy('id', 'desc'));

				unsubscribe = onSnapshot(q, (querySnapshot) => {
					contentUrl = [];
					querySnapshot.forEach((doc) => contentUrl.push({ ...doc.data(), documentId: doc.id }));

					set(contentUrl);
				});
			} catch (error) {
				unsubscribe();
			}
		},
		[]
	);

	return {
		subscribe
	};
}

export const contentUrl = createContentUrl();

export async function addDataAndCompareEmail(data, collectionName, compareData) {
	for (const comData of compareData) {
		if (data.email !== comData.email) {
			await addDoc(collection(db, collectionName), data);
			// console.log('Document added successfully:', data);
		} else {
			// alert('Error adding document: Data already existed');
		}
	}
}
