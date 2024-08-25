// let obj={
//     height:"5.5'",
//     address:"Rajpur"
// }

// console.log(obj);

// obj.company="FIEM";
// console.log(obj);

// obj.company="IIT";
// console.log(obj);

// let priya=new Object();
// priya.hello="World";
// console.log(priya);

//const car={type:"Fiat",model:"see",color:"white"};
// console.log(car["model"]); //[can give only string in this case]

// car.price=200;
// console.log(car);

//let car={}; //as car is a const variable cant define this as let

// let box={
//     height:100,
//     color:'red',
//     myfun:function(){
//         console.log(this);  //this concept is known as closure
//         return this;
//     },
//     //test:this, //refers global scope {}
//     test:{
//         anothertest:function(){
//             console.log(this);
//         },
//     },
// };
// //console.log(box.myfun());
// console.log(box.test.anothertest());

// const fun=()=>{    //=> means return
//     return this;
// }
// console.log(fun());

// let n = document.createElement("h1");
//  n.innerHTML= "<i>Hello Priya here!</i>";
//  console.log(n);
//  document.body.appendChild(n);
//document.querySelector("body").prepend(n);

//  class Human{
//     height="10";
//     name="Priya";
//  }

// //  print(){
// //     console.log(this.height+" "+this.name);
// //  }

//  let Priya=new Human();

//Priya.print();

//Constructor -> Default function of a class by the same namee which runs 1st at the time of object creation.

// console.log(a);
//  a=10;
//console.log(a);

// ('use strict')

// myfun();
// function myfun(){
//    console.log("hello");
// }


//console.log(React);

//let root=document.createElementById("root");

// let h1=document.createElement("h1");
// console.log(h1);

// let anc=React.createElement("a",
//     {
//         id:"Children",

//     },
//     'Hello I am child');

// let heading=React.createElement("h1",
//     {id:"Student",
//       hey:"you",
//     },
//     anc);
//      //'Hello world from React');

// console.log(heading);

// const root= ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// root.render(heading);

//color changer

// let box = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "new" }),
//     React.createElement("button", { onClick:changeColor}, "Click here!"));

// function changeColor() {
//     let color = "0123456789ABCDEF"
//     let store = "#"
//     for (let i = 0; i < 6; i++) {
//         store += color[Math.floor(Math.random() * 16)]
//     }
//     let change=document.getElementById("new")
//     change.style.backgroundColor=store;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(box);

import React from "react";
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById('root'));
const div=React.createElement("p",{},"Hi Priya");
root.render(div);