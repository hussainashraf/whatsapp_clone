import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCI-8uDItaWvjbIcPX0R_CtLrIg_k815uU",
    authDomain: "whatsappclone-8208b.firebaseapp.com",
    projectId: "whatsappclone-8208b",
    storageBucket: "whatsappclone-8208b.appspot.com",
    messagingSenderId: "472729160983",
    appId: "1:472729160983:web:39389de479f135f77e3b52"
  };

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{db,auth,provider}