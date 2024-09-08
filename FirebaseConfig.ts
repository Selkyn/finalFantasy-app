import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2BnEKM53zE98IdhWz8i9pv62LQdgwtF8",
    authDomain: "auth-netslip.firebaseapp.com",
    projectId: "auth-netslip",
    storageBucket: "auth-netslip.appspot.com",
    messagingSenderId: "88407960754",
    appId: "1:88407960754:web:53d5545edee2051030edab",
    measurementId: "G-Q022BC71MG"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };