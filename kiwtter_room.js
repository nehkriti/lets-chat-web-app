//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAqQYm-WJv94PviiRiVYLEq6-n_MYTJkWs",
    authDomain: "projectkwitter1.firebaseapp.com",
    projectId: "projectkwitter1",
    storageBucket: "projectkwitter1.appspot.com",
    messagingSenderId: "136889395314",
    appId: "1:136889395314:web:179fc67a2647a74d52baeb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();