import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClq3--BQabuFY87f9Dx306KiWpWh9Op0o",
    authDomain: "web-programing-f7dda.firebaseapp.com",
    databaseURL: "https://web-programing-f7dda-default-rtdb.firebaseio.com",
    projectId: "web-programing-f7dda",
    storageBucket: "web-programing-f7dda.appspot.com",
    messagingSenderId: "18856637136",
    appId: "1:18856637136:web:9ab0ccdef030b71a4024d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;