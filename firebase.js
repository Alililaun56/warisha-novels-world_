import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyDFW62ReV0d7oU07iTd_UGfMqMly7iZMG8",

authDomain: "warisha-novels-world.firebaseapp.com",

projectId: "warisha-novels-world",

storageBucket: "warisha-novels-world.firebasestorage.app",

messagingSenderId: "730509359637",

appId: "1:730509359637:web:27a0e9ad2eb0196ed92c1c",

measurementId: "G-91RMFW4V74"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

window.login = async function(){

try{

const result = await signInWithPopup(auth, provider);

alert("Login Successful");

console.log(result.user);

}catch(error){

console.log(error);

alert(error.message);

}

};
