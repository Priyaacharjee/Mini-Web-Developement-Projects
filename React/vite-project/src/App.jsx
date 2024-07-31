import React from 'react'
import { useState } from "react";
import './App.css'

export default function App() {

  const [color, setColor] = useState('hotpink');
  // function setNumber(val){
  //     number=val
  // }

  // click = 0+1=>number
  // click 2 = number +1


  function mycolor() {

    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    let newc=`rgb(${num1},${num2},${num3})`;
    setColor(newc);
  }

  return (
    <div id="parent">
      <div id="color" style={{ backgroundColor:color }}></div>
      <button onClick={mycolor}>Change color</button>
    </div>
  )
}
