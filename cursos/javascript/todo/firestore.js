// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
        
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvbawLEnP5KcsdhcArWGsj9E5C59-8CY",
  authDomain: "todo-2135b.firebaseapp.com",
  projectId: "todo-2135b",
  storageBucket: "todo-2135b.appspot.com",
  messagingSenderId: "983044125704",
  appId: "1:983044125704:web:31e1c3eca128ee71184dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
    addDoc(collection(db, 'tasks'), {title: title, description: description});
}

export const getTasks = () => {
    return getDocs(collection(db, 'tasks'));
}