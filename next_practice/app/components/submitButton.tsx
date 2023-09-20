'use client';
import React from 'react'
import { useState } from 'react';

const SubmitButton = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event:any) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      console.log('Input Value:', inputValue);
      // You can perform any actions with the input value here
    };
  return (
    <>
        <input placeholder='firstname lastname' value={inputValue} onChange={handleInputChange} type="text" style={{'marginBottom':'10px'}}/>
        <button onClick={handleButtonClick}>submit your name</button>
    </>
  )
}

export default SubmitButton