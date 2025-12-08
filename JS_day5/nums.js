// console.log("first");
// setTimeout(()=>{
//     console.log("second excution"),2000
// })

// console.log("third");


// setTimeout(() => {
//     console.log("hi pravin");

//     setTimeout(() => {
//         console.log("how are you");

//         setTimeout(()=>{
//             console.log("i am fine");

//             setTimeout(()=>{
//                 console.log("what about you");  

//                 setTimeout(()=>{
//                     console.log("i am also good");
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
    
// },2000);



// let p=new Promise((resolve,reject)=>{
//     let i=false;

//     if(i){
//         resolve("promise resolved");
//     }else{
//         reject("promise rejected");
//     }
// });

// p.then((m)=>{
//     console.log(m);
// }).catch((m)=>{
//     console.log(m);
// })



// const [a,b,c]=[1,2,3,4,5];

// console.log(a);
// console.log(b);
// console.log(c);


// const [f,...r]=[1,2,3,4,5,6,7,8,9];

// console.log(f);
// console.log(r);

// const user={
//     name:"pravin",
//     age:24,
//     city:"pune"
// };
// const {name,age}=user;
// console.log(name);
// console.log(age);


function great({name,age}){
    console.log(`Hello ${name},you are ${age} years old`);
}

great({name:"pravin",age:18});





















































































