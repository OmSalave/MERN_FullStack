
// object litrals 

// const student ={
//     name: 'om salave',
//     age: 18,
//     marks:100
// };
// console.log(student)

// object litral for a twitter post

// const post = {
//     username: "omsalave",
//     content:'this is a post',
//     likes: 150,
//     repost: 10,
//     tags: ['apnacollege','delta','aman']
// };
// console.log(post)

// console.log(post.content);
// console.log(post['username']);

// object litrals convert keys to strings 

// const data= {
//     1:'raj',
//     2:'om',
//     null:'quit',
//     undefine:'brain'
// };

// console.log(data[1]);
// // error console.log(data.1);

// console.log(data.null); // no error

// add or update in object litrals

// const stu= {
//     name: 'om',
//     age : 18,
//     marks: 99.99,
//     city: 'delhi',
// };

// stu.city = "pune";
// stu.gender = "male";
// stu.marks='100';

// delete stu.age; // delete an key 

// console.log(stu)

// object of object 
// array of object 

// Math object 

// generate a random integer from 1-10

// let x = Math.random();

// x = x*10;
// x = Math.floor(x);
// x=x+1;

// console.log(x);

// all in one - generate a random integer from 1-10

// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// random no 1-100

// console.log(Math.floor(((Math.random()*100)+1)))


// guessing game for generating random number 



// const max = prompt('enter the max value');
// const random = Math.floor(Math.random()*max) +1 ;
// console.log(random);
// let guess= prompt('Guess the number');

// // // while(guess!=random && guess!="quit"){
// //     guess= prompt('wrong number Guess the number again');
// // }

// while(true) {

//     if (guess == 'quit') {
//         console.log("user Quit");
//         break;
//     }

//     if ( guess == random ) {
//         console.log(`congratulation right guess. The random no. was ${random} `);
//         break;
   
//     } else if (guess<random ){
//         guess = prompt('your guess is too small');
//     } else if (guess>random) {
//        guess = prompt('your guess is too large');
//     }
// }




