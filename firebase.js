import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTW0Uod_8uDf-k-yopRlj5_m64R-_6pPQ",
  authDomain: "notes-app-1a1d1.firebaseapp.com",
  projectId: "notes-app-1a1d1",
  storageBucket: "notes-app-1a1d1.appspot.com",
  messagingSenderId: "258766342214",
  appId: "1:258766342214:web:5969968d01c9a8e5f0e247"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")