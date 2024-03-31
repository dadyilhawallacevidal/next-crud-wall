import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: "next-crud-wall.appspot.com",
        messagingSenderId: "337091722",
        appId: "1:337091722:web:875983af68c162cbd6e173"
    });
}

export default firebase;