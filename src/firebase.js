import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDw8PZ1ql_mQO0AXoXplTeHvCu2cqKNBE",
    authDomain: "todo-app-566e1.firebaseapp.com",
    projectId: "todo-app-566e1",
    storageBucket: "todo-app-566e1.appspot.com",
    messagingSenderId: "113714270709",
    appId: "1:113714270709:web:cb07d380452c94d62a10bc",
    measurementId: "G-BXNPYQ92HF"
});

const db = firebaseApp.firestore();
export default db;