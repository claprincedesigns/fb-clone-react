import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDptl0iZNFHq37lH3TWk8RBRBRerC4GVuQ",
    authDomain: "fb-clone-cbc30.firebaseapp.com",
    projectId: "fb-clone-cbc30",
    storageBucket: "fb-clone-cbc30.appspot.com",
    messagingSenderId: "222576142546",
    appId: "1:222576142546:web:f6e480e27dd792776d650b"
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// const auth = getAuth();

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;