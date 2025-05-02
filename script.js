import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIjGdHFgiHRKano1ePQVREcoF3_5Vl2Ew",
  authDomain: "md-finance-65c27.firebaseapp.com",
  projectId: "md-finance-65c27",
  storageBucket: "md-finance-65c27.appspot.com",
  messagingSenderId: "824719341075",
  appId: "1:824719341075:web:0e4a8f2eaa4716324831e6",
  measurementId: "G-7WNT50JPR7"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de registro
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Usuário registrado com sucesso!");
      showDashboard(userCredential.user.email);
    })
    .catch((error) => {
      alert("Erro no registro: " + error.message);
    });
};

// Função de login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login realizado com sucesso!");
      showDashboard(userCredential.user.email);
    })
    .catch((error) => {
      alert("Erro no login: " + error.message);
    });
};

// Função de logout
window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logout realizado com sucesso!");
      document.getElementById("login-box").style.display = "block";
      document.getElementById("dashboard").style.display = "none";
    });
};

// Função para exibir o painel logado
function showDashboard(email) {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("user-email").textContent = email;
}
