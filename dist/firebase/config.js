"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var firebase = require('firebase');
// require("firebase/auth");
// require('firebase/database');


var config = {
    apiKey: "AIzaSyAJmGhYsogteAvEfor_lYYWV5GcgRbkF5o",
    authDomain: "smartpark008.firebaseapp.com",
    databaseURL: "https://smartpark008.firebaseio.com",
    projectId: "smartpark008",
    storageBucket: "smartpark008.appspot.com",
    messagingSenderId: "355092244805"
};

firebase.initializeApp(config);

exports.default = firebase;
var database = exports.database = firebase.database();
var auth = exports.auth = firebase.auth();
var googleAuthProvider = exports.googleAuthProvider = new firebase.auth.googleAuthProvider();