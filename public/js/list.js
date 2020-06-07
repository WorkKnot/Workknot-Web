var myList = [
  { name: 'Harshit', ph: 12345, id: 1 },
  { name: 'Nishant', ph: 23456, id: 2 },
  { name: 'Hardik', ph: 34567, id: 3},
  { name: 'Ankit', ph: 45678, id: 4}
];

var newList = [];
console.log("The list is:");
for (var i = 0; i < myList.length; i++){
        console.log(newList[i]);
     }

//console.log("Enter a name");

var userInput = prompt("Enter a name")

for (var i = 0; i < myList.length; i++){
    	if (userInput == myList[i]){
    		console.log(myList.ph[i]);    
        	newList.push(myList[i]);
    	}
     }

for (var i = 0; i < myList.length; i++){
        console.log(newList[i]);
     }