import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAZDL-p4gyXQlcH1TEnqklUx-tUx3G5fE0",
    authDomain: "restaurants-7a919.firebaseapp.com",
    projectId: "restaurants-7a919",
    storageBucket: "restaurants-7a919.appspot.com",
    messagingSenderId: "227449955462",
    appId: "1:227449955462:web:08c0a388e38b4449dcdd07"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
