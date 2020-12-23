import * as firebse from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCf1Yih_k57asreZjC9QxhOtlfHhfs9ehA",
    authDomain: "mechanicme-b643a.firebaseapp.com",
    projectId: "mechanicme-b643a",
    storageBucket: "mechanicme-b643a.appspot.com",
    messagingSenderId: "382717623363",
    appId: "1:382717623363:web:0a75f3da744a6e9d7928f6",
    measurementId: "G-998EE9X314"
};

//dont want to rerun it if it's already running; it will cause errors 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };