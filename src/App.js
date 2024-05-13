import React, { useState } from 'react';
import Keypad from './keypad'
import './App.css'


export default function App() {

  let [input, setInput]=  useState('')

  function handleClear() {
   setInput("")
  }


  function caluclate() {


      let outputVal =  eval(input);
      setInput(outputVal)    

   }

  
  function handleClick(value) {

     setInput(input + value)
  }
  return (
   <div className='container'>
     <h1>Calcuclator App Using React</h1>
     <div className='caluclator'>
     <input className='output' type='text' value={input}/>
     <Keypad handleClear={handleClear} handleClick={handleClick} caluclate={caluclate} ></Keypad>
     </div>
    
   </div>
  )
}

