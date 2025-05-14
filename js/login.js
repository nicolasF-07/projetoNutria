import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4K9WdILUOn0eJjJWLtNFsIFXgvsaBoxY",
  authDomain: "nutria-pre.firebaseapp.com",
  databaseURL: "https://nutria-pre-default-rtdb.firebaseio.com",
  projectId: "nutria-pre",
  storageBucket: "nutria-pre.firebasestorage.app",
  messagingSenderId: "1080581157539",
  appId: "1:1080581157539:web:10c75c0bc4c21bdbb64516"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');
const forgotLink = document.getElementById('esqueciSenha');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[placeholder="E-mail"]').value;
  const senha = loginForm.querySelector('input[placeholder="Senha"]').value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Bem-vindo, ${user.displayName || user.email}!`);
      window.location.href = "./index.html"; // redirecione para sua dashboard
    })
    .catch((error) => {
      alert(`Erro ao entrar: ${error.message}`);
    });
});

forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  const email = prompt("Digite seu e-mail para redefinir a senha:");

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Link de redefinição enviado por e-mail.");
      })
      .catch((error) => {
        alert(`Erro ao enviar email: ${error.message}`);
      });
  }
});
