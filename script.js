// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIjGdHFgiHRKano1ePQVREcoF3_5Vl2Ew",
  authDomain: "md-finance-65c27.firebaseapp.com",
  projectId: "md-finance-65c27",
  storageBucket: "md-finance-65c27.appspot.com",
  messagingSenderId: "824719341075",
  appId: "1:824719341075:web:0e4a8f2eaa4716324831e6",
  measurementId: "G-7WNT50JPR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Login bem-sucedido!");
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
});

// REGISTRO
document.getElementById("register-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Registro concluído com sucesso!");
    })
    .catch(error => {
      alert("Erro ao registrar: " + error.message);
    });
});
