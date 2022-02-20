import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXr8CJD9fFrlm_BZve9e1ASOZIGqaBJlQ",
    authDomain: "pagina-react-d0c8d.firebaseapp.com",
    projectId: "pagina-react-d0c8d",
    storageBucket: "pagina-react-d0c8d.appspot.com",
    messagingSenderId: "914575982680",
    appId: "1:914575982680:web:d3820b5d46b35aa65aca2d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }