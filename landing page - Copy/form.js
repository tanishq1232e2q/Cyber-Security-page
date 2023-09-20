// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCQ2Fb0rvZ6Q30xSjjK6rNuUqwkxR4MmYQ",
//   authDomain: "register-app-e8d70.firebaseapp.com",
//   databaseURL: "https://register-app-e8d70-default-rtdb.firebaseio.com",
//   projectId: "register-app-e8d70",
//   storageBucket: "register-app-e8d70.appspot.com",
//   messagingSenderId: "318763939952",
//   appId: "1:318763939952:web:18e9d5a3da5d952d9cdcb5",
//   measurementId: "G-KD0MMKF6FX"
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig)
// // reference your database
// var contactrock = firebase.database().ref("Register app");

// document.getElementById("form").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   var fname = getElementVal("fname");
//   var lname = getElementVal("lname");
//   var username = getElementVal("username");
//   // var address=getElementVal("address");

//   var city = getElementVal("city");
//   var state = getElementVal("state");
//   var phone = getElementVal("phone");

//   saveMessages(fname, lname, username, city, state, phone);

//   //   enable alert
//   document.querySelector(".alert").style.display = "block";

//   //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

//   //   reset the form
//   document.getElementById("form").reset();
// }

// const saveMessages = (fname, lname, username, city, state, phone) => {
//   var newContactForm = contactrock.push();

//   newContactForm.set({
//     fname: fname,
//     lname: lname,
//     username: username,
//     city: city,
//     state: state,
//     // address:address,
//     phone: phone,
//   });
// };

// const getElementVal = (id) => {
//   return document.getElementById(id).value;
// };
