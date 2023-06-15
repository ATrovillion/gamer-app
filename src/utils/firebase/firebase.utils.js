import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyOOjyAIX7DQYJwI1QhOP5wIURcWDRHfw',
  authDomain: 'gamer-app-27402.firebaseapp.com',
  projectId: 'gamer-app-27402',
  storageBucket: 'gamer-app-27402.appspot.com',
  messagingSenderId: '283111609393',
  appId: '1:283111609393:web:457924d58be839da603110',
  measurementId: 'G-NEMMHS58C8',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // see if there is an existing document reference
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // check if user data exists
  // if not present, create/set document with data from userAuth in collection
  // using the userSnapshot
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }
  // if present, return userdocref
  return userDocRef;
};
