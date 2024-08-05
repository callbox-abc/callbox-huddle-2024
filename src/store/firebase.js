import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBUPm-ygUPFnkdsU2RO0x-qMr-2tCUMCtE',
	authDomain: 'huddle-team-e5480.firebaseapp.com',
	projectId: 'huddle-team-e5480',
	storageBucket: 'huddle-team-e5480.appspot.com',
	messagingSenderId: '7215976556',
	appId: '1:7215976556:web:f5e15af292503fdd048849'
};

const app = initializeApp(firebaseConfig, 'CLIENT');

export default app;
