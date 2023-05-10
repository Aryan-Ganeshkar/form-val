import { useState } from "react"
import './Formval.css'

const Formval = () => {

    const arrayObj = [{
      id:'name',
      value : 1
    }]

    const education = ['bca' , 'mca' , 'bba' , 'be' , 'ba']

    const returnmap = education.map((setData) => {
      return(
        <option>
            {setData}
        </option>
      )
    })
  
    const submitFrom = () => {
  
      console.log('name', fname);
      console.log('email' , femail);
      console.log('num' , mnum);
      console.log('password', pass);
      
    }
  
    const [fname, setFname] = useState('');
  
    const [femail , setFemail] = useState('');
  
    const [mnum , setMnum] = useState('');
  
    const [pass , setPass] = useState('');
  
    const [items , setItems] = useState([]);
  

    return(
        <div className="App">
        <div className='App1'>
          <p> Registation From </p>
        </div>
        <div>
        <label htmlFor='name'> Username </label>
        <br />
          <input type = 'text' value={fname} onChange={(e) =>setFname(e.target.value)} placeholder='Enter your name'/>
        </div>
        <br />
        <div>
        <label htmlFor='name'> Mobile no</label>
        <br />
          <input type = 'text' value={mnum} onChange={(e) =>setMnum(e.target.value)} placeholder='Enter your mobile number' />
        </div>
        <br />
        <div>
        <label htmlFor='name'> Email id </label>
        <br />
          <input type = 'email' value={femail} onChange={(e) =>setFemail(e.target.value)} placeholder='Enter your email'/>
        </div>
        <br />
        <div>
        <label htmlFor='name'> Password </label>
        <br />
          <input type = 'password' value={pass} onChange={(e) =>setPass(e.target.value)} placeholder='Enter your password' /> 
        </div>
        <br />
        <div className='App3'>
          <select>
            {returnmap}
          </select>
        </div>
        <br />
          <button onClick={ () => {submitFrom()}}> submit </button>
       
     </div>
    )
}

export default Formval;