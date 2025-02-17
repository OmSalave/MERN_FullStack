/// map

// let student = [{
//     name: "om",
//     marks: 94
// },{
//     name: "rohit",
//     marks: 93
// },{
//     name:"aman",
//     marks: 91
// }];

// let gpa = student.map((el) => {
//     return el.marks/10;
// })

/// filter 

// let arr = [1,32,432,432,5,345,3,6,536,5,546,54];

// let even = arr.filter( (el) => { 
//     return el%2==0;
// } )

//// reduce 

// let arr = [1,23,2,3,24,23,4];

// let arr1 = arr.reduce((add, el) => (add+el));

// console.log(arr1)

////// maximum value in a array /////

// let arr=[34,53,6,45,63,56457,65,3,598667,36,4,3,322,4];

// let max = -1;

// for ( let i=0; i<arr.length; i++) {
//     if (max < arr[i]){
//     max = arr[i]};
// }

// console.log(max)

///// max using reduce ////

// let arr=[34,53,6,45,63,56457,65,3,598667,36,4,3,322,4];
// let max = arr.reduce( (max,el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max
//     }
// });
// console.log(max);


///  