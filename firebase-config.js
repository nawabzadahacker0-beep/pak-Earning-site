import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    getDocs, 
    updateDoc, 
    query, 
    where, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOK0ZQxaPikV_AZsNWVLe9Ax_PxmkL9Uk",
  authDomain: "pak-earn-dd5d0.firebaseapp.com",
  databaseURL: "https://pak-earn-dd5d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pak-earn-dd5d0",
  storageBucket: "pak-earn-dd5d0.firebasestorage.app",
  messagingSenderId: "28853126153",
  appId: "1:28853126153:web:265db3cd9905a59552e4d8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, doc, setDoc, getDoc, getDocs, updateDoc, query, where, onSnapshot };
