// Reemplazá estos valores con tu firebaseConfig de la consola de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-jx_Fv__ytAxcuj-zaatg_RE6FIvXAT0",
  authDomain: "mundial-2026-8c792.firebaseapp.com",
  projectId: "mundial-2026-8c792",
  storageBucket: "mundial-2026-8c792.firebasestorage.app",
  messagingSenderId: "1027072557113",
  appId: "1:1027072557113:web:946b7aeaefd748e1bb0de8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ADMIN_PASSWORD = "mundial2026"; // Cambiá esta contraseña
