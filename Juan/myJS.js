//This is my JS File

//alert("We are happy to be linked");

//1. Variables and Data Types

//Number
//String
//Boolean
//Array
//Object


//var pass = true;

/*var cityName = "london";
//String

var busNumber = 16;
//Number

var shoppingList = ["Milk", "Sugar", 2, true]; //Array

var living = {
    cityName: "London",
    country: "UK" // Object
}*/

/*var firN = 25;
var secN = "15";

console.log(secN + 2 + firN);*/

/*var myCar; //camel case
var MyCar; // partial
var my_Car; // underscore*/

// 2. Arrays

/*var jsF = []; //Array literal
var jsF = new Array(); //Array constructor*/

//var jsF = ["jQuery", "nodeJs", "reactJS"];

/*var jsF = [2];*/

//jsF.pop();

/*console.log(jsF.length);*/
//alert(jsF);


/*for (var i = 0; i < 10; i++)
    {
        
        console.log(i);
    }*/

/*var i = 0;
while (i >= -10) {
    
    console.log(i);
    
    i--;
}*/

/*var myN = [23, 75, 2, 9];


for (var i = myN.length - 1; i >= 0; i--)
{
    
    console.log(myN[i]);
}*/


//Conditions

/*if (6 == 6 || 4 == 4) {
    
    console.log("This is true");
    
} else {
    
    console.log("This is false");
}*/

//switch conditional

/*var car = "Porsche";

switch(car) {
        
    case "Mercedes":
        alert("I love this car");
    break;
        
        case "Ferrari":
        alert("I hate this car");
    break;
        
        default:
        alert("None of above");
    break;
               
}*/



   /* var x = document.getElementById("1name").value;
    

    var y = document.getElementById("2name").value;
    
var z = x + y;


function myFunction() {
    z = document.getElementById("demo").innerHTML;
    
    console.log(z);
}
myFunction();*/



/*var i = 5;
do {
    
    console.log(i);
    i++;
    
} while(i <= 10);*/

//Functions

/*var height = 5;
var width = 9;
var total;

function area() {
    
    total = height * width;
    
    return total;
    
    //console.log(total);
    
    
}

area();


console.log(total);*/

/*window.onload = function() {
    
    alert("I have arrived");
}*/

/*setTimeout(function() {
    
    alert("I am waiting!!!")
    
}, 1000);*/


/*var height = 5;
var width = 9;
var total;

(function() {
    
    total = height * width;
    
    console.log(total);
    
    alert("I am also here!")
    
    //return total;
    
})();*/

//myArea();


//Parameters and Arguments

/*function calcVolume (height, width, length)
{
    
    return height * width * length;
}


var livingRoom = calcVolume(4, 3, 5);

console.log(livingRoom);*/


//Objects

// Not a good practice

/*
var student = new Object();

student.firstName = "Manuel";
student.lastName = "Cubuca";

//console.log(student.lastName);

var ages = new Array(23);

console.log(ages);
*/

// The good practice

var student = {
    
    firstName: "Manuel",
    lastName: "Cubuca",
    
    getFullName: function() {
    
        return this.firstName + " " + this.lastName;
        
    },
    address: {
        doorN: 20,
        street: "Boone Street",
        postCode: "SE9 4HL"
    }
   
};

//var ages = [45];

console.log(student.getFullName());
console.log(student.address.doorN);













































