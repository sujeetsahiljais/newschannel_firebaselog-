import  Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAso6TQePN_4HohgDh24yQqIJ1CaR4WFVo",
    authDomain: "login-auth-f543e.firebaseapp.com",
    databaseURL: "https://login-auth-f543e.firebaseio.com",
    projectId: "login-auth-f543e",
    storageBucket: "login-auth-f543e.appspot.com",
    messagingSenderId: "555280945211",
    appId: "1:555280945211:web:039642641fea8dd769cc1e",
    measurementId: "G-RXQHW4BHEG"
  };
  // Initialize Firebase
       
 const Fire = Firebase.initializeApp(firebaseConfig);

 export default Fire;