import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDR_6qwesEdljfrIGNa9dB4klc6586G_eI",
    authDomain: "trance-ead89.firebaseapp.com",
    projectId: "trance-ead89",
    storageBucket: "trance-ead89.appspot.com",
    messagingSenderId: "319944311415",
    appId: "1:319944311415:web:a131abeac334244ac57c72",
    measurementId: "G-PFBNGGLHZP"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;