import { useState } from 'react';
import * as math from 'mathjs'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Hesapmakinesi/Button';
import Hspmkn from './Hesapmakinesi/Hspmkn';

function App() {
  const [text,setText] = useState("")
  const [result,setResult] = useState("");

  const addToText = (val) => {
    setText ((text) => [...text,val + " "])
  }

  const islem = () => {
    const Input = text.join ("")
    setResult (math.evaluate(Input))
  }



  const temizle = () => {
    setText("");
    setResult("");
  }

  return (
    <div className="App">
      <div className='calc-wrapper'>
      <Hspmkn text={text} result = {result} />
      <div className='row'>
      <Button symbol={"1"} handleClick={addToText} />
      <Button symbol={"2"} handleClick={addToText}/>
      <Button symbol={"3"}handleClick={addToText}/>
      <Button symbol={"+"} color = "#03C988" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"4"} handleClick={addToText}/>
      <Button symbol={"5"} handleClick={addToText}/>
      <Button symbol={"6"} handleClick={addToText}/>
      <Button symbol={"-"} color = "#03C988" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"7"} handleClick={addToText}/>
      <Button symbol={"8"} handleClick={addToText}/>
      <Button symbol={"9"} handleClick={addToText}/>
      <Button symbol={"*"} color = "#03C988" handleClick={addToText}/>
      </div>
      <div className='row'>
      <Button symbol={"."} handleClick={addToText}/>
      <Button symbol={"0"} handleClick={addToText}/>
      <Button symbol={"="} handleClick={islem}/>
      <Button symbol={"/"} color = "#03C988" handleClick={addToText}/>
      </div>
      <Button symbol={"Clear"} color ="red" handleClick={temizle}/>
      </div>
      
      
    </div>
  );
}

export default App;
