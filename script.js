import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxEXAMPLE-KEY",
  authDomain: "md-finance.firebaseapp.com",
  projectId: "md-finance",
  storageBucket: "md-finance.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => alert("Registered!"))
    .catch((error) => alert(error.message));
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("login-box").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("user-email").textContent = email;
    })
    .catch((error) => alert(error.message));
};

window.logout = () => {
  signOut(auth).then(() => {
    document.getElementById("login-box").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
  });
};