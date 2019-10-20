const firebase = require("firebase/app");
const {firebaseConfig} = require('../config')
firebase.initializeApp(firebaseConfig);

require("firebase/auth");
require('firebase/database');

const database = firebase.database();

const Auth = firebase.auth;




// User auth
module.exports.Auth = Auth;
module.exports.database = database;