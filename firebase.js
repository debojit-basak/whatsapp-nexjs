import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1VfmQzQK0ZQ2rPmFwAzQH9Sr6slMcPnY",
    authDomain: "whatsapp-next-f622a.firebaseapp.com",
    projectId: "whatsapp-next-f622a",
    storageBucket: "whatsapp-next-f622a.appspot.com",
    messagingSenderId: "390230816729",
    appId: "1:390230816729:web:15082b6347abc7516c4bc8"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};