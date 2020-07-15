const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
var admin = require('firebase-admin');
var firebase = require("firebase/app");
require('dotenv').config()

// var serviceAccount = require('/Users/harshitruwali/Downloads/work-knot-app-firebase-adminsdk-b5fuf-db65e7f570.json')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// admin.initializeApp(functions.config().firebase);

// admin.initializeApp({
// 	credential: admin.credential.applicationDefault(),
//   	databaseURL: "https://work-knot-app.firebaseio.com"

// });


admin.initializeApp({
	credential: admin.credential.cert({
		projectId: process.env.FIREBASE_PROJECT_ID,
		clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
		privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
	}),
	databaseURL: "https://work-knot-app.firebaseio.com"
});

const db = admin.firestore();

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/index.html')
});

require("firebase/firestore");


var firebaseConfig = {
	apiKey: process.env.API, 
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
	const work = req.body.Profession;
	const number = req.body.phnumber;
	const email = req.body.email;
	const address = req.body.address;
	const location = req.body.location;
	const about = req.body.about;
	const qname = req.body.qname;
	const qemail = req.body.qemail;
	const query = req.body.query;

	// console.log(query);
	console.log('-----------------------------------------');

	try {
  		console.log(Name);
	}
	catch(err) {
  		console.log(query);
	}
	// if (Name && work && number && email && address && location && about == 'undifined'){
	// 	console.log(query);
	 	console.log('-----------------------------------------');
	// }

	//console.log(Name, work, number, email, address, about, query);

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
				Location: location, 
				Discription: about,
				QueryName: qname,
				QueryEmail: qemail,
				Query: query
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

  		// const serviceAccount = require('./path/to/serviceAccountKey.json');

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
		Location: location,
		Discription: about
	};

	const qdata ={
		QueryName: qname,
		QueryEmail: qemail,
		Query: query
	};

	// async function sendData() {
	// 	return db.collection('test-web').doc(location).collection(work).doc(number).set(sdata).then(() =>{
	// 		res.sendFile(__dirname + "/success.html");
	// 	})
	// }

	try{
		return db.collection('test-web').doc(location).collection(work).doc(number).set(sdata).then(() =>{
			res.sendFile(__dirname + "/success.html");
		})
	}
	catch (err){
		console.log('-----------------------------------------');
		// console.log(err);
		return db.collection('query').doc(qemail).collection(query).doc(qname).set(qdata).then(() =>{
			res.sendFile(__dirname + "/success-query.html");
		})
	}
	
	
	
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
// app.post('home', function (req, res) {
// 	res.redirect('/');
// })

app.listen(process.env.PORT || 8000, function(){
	console.log('Server is running on port 8000');
});
