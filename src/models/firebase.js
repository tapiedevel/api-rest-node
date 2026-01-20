// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDet8JP5FNvMz-dC_YtbezP2VatMTEgqeM',
    authDomain: 'api-rest-node-6c311.firebaseapp.com',
    projectId: 'api-rest-node-6c311',
    storageBucket: 'api-rest-node-6c311.firebasestorage.app',
    messagingSenderId: '474874760391',
    appId: '1:474874760391:web:edc5c75869abd72541c2e2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
