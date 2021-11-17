
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBDjuhfscwTlIuATR_CPOav9c8UaPDRgII",
      authDomain: "kwitter-4d53d.firebaseapp.com",
      databaseURL: "https://kwitter-4d53d-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d53d",
      storageBucket: "kwitter-4d53d.appspot.com",
      messagingSenderId: "584632248392",
      appId: "1:584632248392:web:77e0881ed2bed867d2907d",
      measurementId: "G-WEGPBQ98Z3"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
