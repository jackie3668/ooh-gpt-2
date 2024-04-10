import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3lfSzfqlwhoqAWHZH15w64c7H2kr7v74",
  authDomain: "ooh-gpt.firebaseapp.com",
  databaseURL: "https://ooh-gpt-default-rtdb.firebaseio.com",
  projectId: "ooh-gpt",
  storageBucket: "ooh-gpt.appspot.com",
  messagingSenderId: "831291528861",
  appId: "1:831291528861:web:e18c0f37ca8860d9e42674",
  measurementId: "G-K75FFXC1E0"
};

const app = initializeApp(firebaseConfig);

export {app}