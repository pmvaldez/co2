import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCM45FCE18Nx5Fl_Z_bqn9pIMCIqy1btHQ",
    authDomain: "consultoria-8eb43.firebaseapp.com",
    databaseURL: "https://consultoria-8eb43.firebaseio.com",
    projectId: "consultoria-8eb43",
    storageBucket: "consultoria-8eb43.appspot.com",
    messagingSenderId: "92246476433",
    appId: "1:92246476433:web:fa5a843764153cc4212130"
  };
  // Iniciando Firebase
  firebase.initializeApp(firebaseConfig);

  
const db = firebase.firestore();
const auth = firebase.auth();

  export {db, auth}

