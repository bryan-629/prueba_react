import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAP-K8g37NXLSsauAXqsduq27vvqkZEd-w",
    authDomain: "task-6b784.firebaseapp.com",
    projectId: "task-6b784",
    storageBucket: "task-6b784.appspot.com",
    messagingSenderId: "1080382012321",
    appId: "1:1080382012321:web:d0053717ec4922ff1ea9e0",
    measurementId: "G-Z1LLMSMPRV"
};
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();