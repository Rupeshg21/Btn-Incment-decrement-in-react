import { useState } from 'react';
import React from 'react'


function App() {
  const [number, setNumber]= useState(0);

  const Inc=()=>{setNumber(number+1);}


  const Dec=()=>{
    if (number>0){
    setNumber(number-1);}
  }


  const Rese=()=>{setNumber(0);}

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Inc}>Increment</button>  
      <button onClick={Dec}>Decrement</button>
      <button onClick={Rese}>Reset</button>
      </div>
  )
}

export default App