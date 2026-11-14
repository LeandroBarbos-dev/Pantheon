import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,        // <-- ADICIONAR
  limit,          // <-- ADICIONAR
  serverTimestamp,// <-- ADICIONAR
  onSnapshot,
  arrayUnion,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLqcAMo3drE5SmT26ZgrOn7JsaCWT650A",
  authDomain: "pantheon-rpg.firebaseapp.com",
  projectId: "pantheon-rpg",
  storageBucket: "pantheon-rpg.firebasestorage.app",
  messagingSenderId: "84535707424",
  appId: "1:84535707424:web:0ec5c788614e2c813f7945"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export async function loginComGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro ao entrar com Google: " + error.message);
  }
}

export async function deslogar() {
  await signOut(auth);
  window.location.href = "/index.html";
}

export {
  onAuthStateChanged,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,        // <-- ADICIONAR
  limit,          // <-- ADICIONAR
  serverTimestamp,// <-- ADICIONAR
  onSnapshot,
  arrayUnion,
  increment
};

