const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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