import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
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

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = registerForm.querySelector('input[placeholder="Nome completo"]').value;
  const email = registerForm.querySelector('input[placeholder="E-mail"]').value;
  const senha = registerForm.querySelector('input[placeholder="Senha"]').value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      return updateProfile(userCredential.user, { displayName: nome });
    })
    .then(() => {
      alert("Conta criada com sucesso!");
      window.location.href = "./login.html";
    })
    .catch((error) => {
      alert(`Erro: ${error.message}`);
    });
});
