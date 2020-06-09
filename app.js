const express = require('express');
const bodyParser = require('body-parser');
var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyCpuPX-ukqhfXXl4n_EisZy3vwHQKu_iI4",
  authDomain: "work-knot-app.firebaseapp.com",
  databaseURL: "https://work-knot-app.firebaseio.com",
  projectId: "work-knot-app",
  storageBucket: "work-knot-app.appspot.com",
  messagingSenderId: "188813101400",
  appId: "1:188813101400:web:9662cd3d0287681bd47d2d",
  measurementId: "G-PVWF47TYSY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/login.html')
});

app.post('/', function(req, res){
	var phoneNumber = req.body.phoneNumber;
	console.log(phoneNumber);
});


app.listen(8000, function(){
	console.log('Server is running on port 8000');
});