// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfigKey.json';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireBaseAuth = getAuth(app);
// const analytics = getAnalytics(app);

export { fireBaseAuth };