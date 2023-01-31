import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc_jFy0OwBvA0AIEcQ9qapwx8qqZnycjo",
  authDomain: "carrazologin.firebaseapp.com",
  projectId: "carrazologin",
  storageBucket: "carrazologin.appspot.com",
  messagingSenderId: "896652391291",
  appId: "1:896652391291:web:219d9f9e831cd136e683de",
  measurementId: "G-M1QY3THNLY"
};

// Initialize Firebase
// initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }


createApp(App).use(router).mount('#app')
