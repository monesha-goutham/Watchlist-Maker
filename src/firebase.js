// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyADi_W7UBIPosx7e4LAmAPQSeBqRrHZFAg",
	authDomain: "watchlist-9788a.firebaseapp.com",
	projectId: "watchlist-9788a",
	storageBucket: "watchlist-9788a.appspot.com",
	messagingSenderId: "901057161976",
	appId: "1:901057161976:web:c0d0c1a069344699faa90d",
	measurementId: "G-0DPV3QZZ8J",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
