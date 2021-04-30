  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  import 'firebase/storage'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDtCqDoJkob7T8heKjgH2RDT5uOiDveaOw",
    authDomain: "nextblog-17ee1.firebaseapp.com",
    projectId: "nextblog-17ee1",
    storageBucket: "nextblog-17ee1.appspot.com",
    messagingSenderId: "469001714178",
    appId: "1:469001714178:web:e5ddb219f3af3d9712c51b"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export const firestore = firebase.firestore()
  export const storage = firebase.storage()