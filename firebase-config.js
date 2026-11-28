import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDO9qUj9vtu0p5Sc_sOIf_ZIbCmznyh3Lo",
  authDomain: "alex-admin-6a9af.firebaseapp.com",
  projectId: "alex-admin-6a9af",
  storageBucket: "alex-admin-6a9af.firebasestorage.app",
  messagingSenderId: "725008015249",
  appId: "1:725008015249:web:575a208aec38299b690430",
  measurementId: "G-YDWRXWP1QG"
};

export const ADMIN_EMAIL = "contacto@alexctexeira.com.mx";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
