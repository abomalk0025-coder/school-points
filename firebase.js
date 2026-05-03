// ====================================================
// firebase.js — إعدادات Firebase المشتركة
// ====================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, addDoc, updateDoc, onSnapshot, query, where, orderBy, serverTimestamp, increment, writeBatch }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ====== إعدادات مشروعك ======
const firebaseConfig = {
  apiKey:            "AIzaSyBvOLYvQ7QH4VOOidQ165F2Ao6_9fBi4g8",
  authDomain:        "anas-96718.firebaseapp.com",
  projectId:         "anas-96718",
  storageBucket:     "anas-96718.firebasestorage.app",
  messagingSenderId: "459362938160",
  appId:             "1:459362938160:web:5cc9c88bedfc3e95d06cf5"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

// ====== الفصول الستة ======
const CLASSES = [
  { id: "4A", name: "الصف الرابع أ",  grade: 4, section: "أ" },
  { id: "4B", name: "الصف الرابع ب",  grade: 4, section: "ب" },
  { id: "5A", name: "الصف الخامس أ",  grade: 5, section: "أ" },
  { id: "5B", name: "الصف الخامس ب",  grade: 5, section: "ب" },
  { id: "6A", name: "الصف السادس أ",  grade: 6, section: "أ" },
  { id: "6B", name: "الصف السادس ب",  grade: 6, section: "ب" },
];

// ====== رقم الأسبوع الحالي ======
function getWeekKey() {
  const now  = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 1);
  const week  = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  return `${year}-W${String(week).padStart(2, "0")}`;
}

// ====== رقم الشهر الحالي ======
function getMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export {
  db, auth, CLASSES,
  collection, doc, getDoc, getDocs, addDoc, updateDoc,
  onSnapshot, query, where, orderBy, serverTimestamp,
  increment, writeBatch,
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  getWeekKey, getMonthKey
};
