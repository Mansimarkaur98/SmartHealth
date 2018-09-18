const firebase = require('firebase');
// require("firebase/auth");
// require('firebase/database');


const config = {
    apiKey: "AIzaSyAJmGhYsogteAvEfor_lYYWV5GcgRbkF5o",
    authDomain: "smartpark008.firebaseapp.com",
    databaseURL: "https://smartpark008.firebaseio.com",
    projectId: "smartpark008",
    storageBucket: "smartpark008.appspot.com",
    messagingSenderId: "355092244805"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.googleAuthProvider