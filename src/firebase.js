import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCrAAU0yx91I9jwlPdlWVaONA2ZeV_f7ME",
    authDomain: "react-chat-real-time.firebaseapp.com",
    databaseURL: "https://react-chat-real-time-default-rtdb.firebaseio.com",
    projectId: "react-chat-real-time",
    storageBucket: "react-chat-real-time.appspot.com",
    messagingSenderId: "96915190238",
    appId: "1:96915190238:web:b8512a11ed7c163d472d4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }