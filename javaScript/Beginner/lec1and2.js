// if else staments

let x = "green";

if(x=="red"){
    console.log("STOP");
    console.log(`light color is ${x}`);
}
else if (x=="yellow"){
    console.log("WAIT AND CHECK");
    console.log(`light is ${x}`);
}
else if (x=="green"){
    console.log("GO");
    console.log(`light color is ${x}`);
} 
else {
    console.log(`light is broken`)
}



let num = 0;

if ( num > 0 ){
    console.log("number is positive.");
}
else if ( num < 0 ){
    console.log("number is negative.");
}
else if (num==0){
    console.log("number is zero")
}



let age= 20;

if (age >= 18){
    console.log('you can vote.');
} 
else {
    console.log( "you cannot vote");
}



let size = "l"

if (size==`xl`){
    console.log(`price is 250 rupees `);
}
else if (size==`l`){
    console.log(`price is 200 rupees`);
}
else if (size==`m`){
    console.log(`price is 100 rupees`);
}
else if (size==`s`){
    console.log(`price is 50 rupees`);
}
else {
    console.log(`select size.`);
}



let marks = 95;

if ( marks>=33){ 
    if (marks>80){
        console.log("Outstanding")
    }
    else {
        console.log("pass")
    }
}
else {
    console.log("better luck next time.")
}



let nam = 'aara ara';

if (nam[0]==='a' && nam.length>3){
    console.log('good string');
}
else {
    console.log('bad string');
}


let number =12;

if ((number%3==0 && number+1==15) || (number-1==11)){
    console.log("safe")
}
else {
    console.log("unsafe")
}

// // switch staments can be used as if else 
// when we have fixed values for if else



let light = "red";

switch (light){
    case "red":
        console.log('stop');
        break;
    case "yellow":
        console.log('wait');
        break;
    case "green":
        console.log('go');
        break
    default :
    console.log("broken light");

}



let day = "6";

switch (day){
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("twesday");
        break;
    case "3":
        console.log("wednesday");
        break;
    case "4":
        console.log("thrusday");
        break;
    case "5":
        console.log("firday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("sunday")
        break;
    default:
        console.log("wrong number")
}

// alert and prompt 

let firstName = prompt ("enter your frist name ");
let lastName = prompt (`enter your last name `);

alert("Welcome " + firstName + " " +lastName);