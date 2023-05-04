import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const submitFrom = () => {

    console.log('name', fname);
    console.log('email' , femail);
    console.log('num' , mnum);
    console.log('password', pass)
  }

  const [fname, setFname] = useState('');

  const [femail , setFemail] = useState('');

  const [mnum , setMnum] = useState('');

  const [pass , setPass] = useState('')


  return (
    <div className="App">
      <div>
        <p> Registation From </p>
      </div>
      <div>
        <input type = 'text' value={fname} onChange={(e) =>setFname(e.target.value)} placeholder='Enter your name'/>
      </div>
      <br />
      <div>
        <input type = 'text' value={mnum} onChange={(e) =>setMnum(e.target.value)} placeholder='Enter your mobile number' />
      </div>
      <br />
      <div>
        <input type = 'email' value={femail} onChange={(e) =>setFemail(e.target.value)} placeholder='Enter your email'/>
      </div>
      <br />
      <div>
        <input type = 'password' value={pass} onChange={(e) =>setPass(e.target.value)} placeholder='Enter your password' /> 
      </div>
      <br />
      <div>
        <button onClick={ () => {submitFrom()}}> submit </button>
      </div>

    </div>
  );
}

export default App;
