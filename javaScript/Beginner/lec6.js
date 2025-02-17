// // functions 

// function hello() {
//     console.log("hello");
// }

// hello();
// hello();

// function printName(){
//     console.log("Om Salave");
// }

// printName();

// function print1to5(){
//     for ( let i=0; i<=5 ; i++)
//     console.log(i);
// }
// print1to5();

// // is a person adult function 

// // function isAdult(){
// //     let age= prompt('enter the age.');
// //     if ( age>=18){
// //         console.log('Adult');

// //     } else{
// //         console.log('Not an Adult');
// //     }
// // }

// // isAdult();

// // function for a dice 

// function dice(){
//     x= Math.floor(Math.random()*6)+1;
//     console.log(x);
// }

// dice();
// dice();
// dice();
// dice();
// dice();
// dice();


// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo('om', 18);
// printInfo("dishant",17);

// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,5);

// // functio - avg of 3 no

// function avg(a,b,c){
//     let cAvg = (a+b+c)/3;
//     console.log(cAvg);
// }

// avg(2,3,44);

// function table(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// table(73);

// // sum of the number from 1 to n 

// function getSum (n) {
//     let sum=0;
//     for (let i=1 ; i<=n; i++){
//     sum += + i;
//     }
//     return sum;
// }                            // do again 



// let str =  ['i','am','om','salave'];

// function arr(str){
    
//     let result='';
    
//     for (let i=0; i<str.length; i++){
//        result += str[i] ;
//     }
//     return result;

// }
// console.log(arr(str))

// scope

// let sum = 23;

// function calSum(a,b){

//     let sum= a+b
//     console.log(sum)

// }
// calSum(2,3)
 
// let greet="hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerFunc(){
//         console.log(greet);
//     }
//     innerFunc();
// }

// console.log(greet);
// changeGreet();

////// function expression / lamda function   


// const sum = function(a,b){
//     console.log(a+b);
// }
 
// sum(2,10);

///// high order function 

// function multipleGreet(func,fuc,n){
//     for(let i=1; i<=n; i++){
//         func();
//         fuc();
//     }
// }

// let greet= function(){
//     console.log("Namaste")
// }

// let hello= function(){
//     console.log("hello")
// }
// multipleGreet(greet,hello,5)
// multipleGreet(function() {console.log("hi")}, 10)

///// methods

// const calculator = {

//     num: 10,

//     add: function(a,b){
//         return a+b;
//     },

//     sub: function(a,b){    //// to call on console .. calculate.add(1,2)---- o/p 3
//         return a-b;
//     },

//     multi: function(){
//         return a*b;
//     },
// };

////Q2

// let str = 'abcdabcdefgggh';

// function unique(str){

//     let ans = "" ;
    
//     for (let i=0; i <str.length; i++){
//         let x = str[i];
//         if (ans.indexOf(x) == -1){
//             ans += x ;
//         }
//     }
//     console.log(ans);
// }

// unique(str);

///q1

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let target = 5 ;
// function getElement(arr,target) {

//     for (let i =0; i < arr.length; i++) {
//         if (arr[i] > target ){
//         console.log(arr[i]);
//         }
//     }
// }
// getElement(arr,target);

