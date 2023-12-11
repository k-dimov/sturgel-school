import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1jdy8jcegupBS8PfcVgY7puieA49q5RU",
    authDomain: "sturgel-react.firebaseapp.com",
    projectId: "sturgel-react",
    storageBucket: "sturgel-react.appspot.com",
    messagingSenderId: "30919778980",
    appId: "1:30919778980:web:c70d393322408a2b68bc31",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
