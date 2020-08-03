import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2USpT-ptQukky7f2iVX8Odh-TUpM4FTM",
  authDomain: "ecommerce-training-73d23.firebaseapp.com",
  databaseURL: "https://ecommerce-training-73d23.firebaseio.com",
  projectId: "ecommerce-training-73d23",
  storageBucket: "ecommerce-training-73d23.appspot.com",
  messagingSenderId: "866396623923",
  appId: "1:866396623923:web:9de21822a9215d16fe7f46",
};

// Initialize Firebase

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
