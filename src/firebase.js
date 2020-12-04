import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBKX4aEL2miaCxEj8vxCukVjcv_yI_06e8",
    authDomain: "web-chat-app-37410.firebaseapp.com",
    databaseURL: "https://web-chat-app-37410-default-rtdb.firebaseio.com",
    projectId: "web-chat-app-37410",
    storageBucket: "web-chat-app-37410.appspot.com",
    messagingSenderId: "529898568961",
    appId: "1:529898568961:web:fbf955e9a1aee781c62f00",
    measurementId: "G-9KRN89T65T"
});

export const auth = app.auth()
export default app