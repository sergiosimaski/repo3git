import firebase from "firebase/app";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgp4sttHVIzoXbGAfWP8F2pmVT9WLdJsM",
  authDomain: "react-app-4a133.firebaseapp.com",
  projectId: "react-app-4a133",
  storageBucket: "react-app-4a133.appspot.com",
  messagingSenderId: "185093087567",
  appId: "1:185093087567:web:3206d1f574bca45884253a"
};

//Inicializamos la App

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}