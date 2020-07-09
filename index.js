const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
var admin = require('firebase-admin');
var firebase = require("firebase/app");
const serviceAccount = require('/Users/harshitruwali/Downloads/work-knot-app-firebase-adminsdk-b5fuf-db65e7f570.json')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
admin.initializeApp({
	credential: admin.credential.applicationDefault()	
});

const db = admin.firestore();

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/index.html')
});

require("firebase/firestore");


var firebaseConfig = {
	apiKey: "AIzaSyCpuPX-ukqhfXXl4n_EisZy3vwHQKu_iI4", 
	authDomain: "work-knot-app.firebaseapp.com",
	databaseURL: "https://work-knot-app.firebaseio.com",
	projectId: "work-knot-app",
	storageBucket: "work-knot-app.appspot.com",
	messagingSenderId: "188813101400",
	appId: "1:188813101400:web:9662cd3d0287681bd47d2d",
	measurementId: "G-PVWF47TYSY"
};

firebase.initializeApp(firebaseConfig);


app.post('/', function(req, res){
	const Name = req.body.Name;
	const work = req.body.work;
	const number = req.body.phnumber;
	const email = req.body.email;
	const address = req.body.address;

	console.log(Name, work, number, email, address);

	var data = {
		members: [
		{
			email_address: email,
			status: "You have been Registered",
			merge_fields: {
				Contact: number,
				Name: Name,
				OfficeAddress: address,
				Profession: work,
				Rating:"N.A.",
				EMail: email,	
			}
		}
		]
	};

	//const jsonData = JSON.stringify(data);
	//const url = "https://us10.api.mailchimp.com/3.0/lists/8fd61d4b63"; //listid
	// const options = {
	// 	method: "POST",
	// 	auth: "" //api
	// }

async function initializeAppFunctions() {
		process.env.GCLOUD_PROJECT = 'firestorebeta1test2';
  // [START initialize_app_functions]
  const admin = require('firebase-admin');  
  admin.initializeApp();

  const db = admin.firestore();

  // [END initialize_app_functions]
  return db;
}

async function initializeAppSA() {
  // [START initialize_app_service_account]

  const serviceAccount = require('./path/to/serviceAccountKey.json');

  admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();

  // [END initialize_app_service_account]
  return db;
}


	//console.log(sdata.body);
	//const obj = JSON.parse(sdata.body);

	const sdata = {
		Contact: number,
		Name: Name,
		OfficeAddress: address,
		Profession: work,
		Rating:"N.A.",
		EMail: email,
	};
	
	return db.collection('sampleData').doc('data1').set(sdata).then(() =>{
		res.sendFile(__dirname + "/success.html");
	})

	const request = https.request(url, options, function(response){

		if (response.statusCode === 200){
			res.sendFile(__dirname + "/success.html");
		}
		else{
			res.sendFile(__dirname + "/failure.html");
		}
		response.on('data', function(data){
			console.log(JSON.parse(data));
		});
	});

	request.write(jsonData);
	request.end();

});

app.post("/failure", function (req, res) {
	res.redirect("/");
});
app.post('home', function (req, res) {
	res.redirect('/');
})

app.listen(process.env.PORT || 8000, function(){
	console.log('Server is running on port 8000');
});


