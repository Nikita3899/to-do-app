import React, { useState } from "react";
import Data from "./Data"

function Form() {

  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const[submitted,setSubmitted] = useState(false)

  const handleFn = (e)=>{
      setValues({...values,firstName: e.target.value})
  }

  const handleLn = (e)=>{
    setValues({...values,lastName: e.target.value})
}

const handleEmail= (e)=>{
  setValues({...values,email: e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  setSubmitted(true) 
  setValues("")
}

  return (
    <div>
     
     <form onSubmit={handleSubmit}>
        
        <h2> ENTER DETAILS</h2>
        <input type="text" 
        placeholder="First Name" 
        value={values.firstName} 
        onChange={handleFn} />
        <br />
        <input type="text" placeholder="Last Name" 
        value={values.lastName} 
        onChange={handleLn}/>
        <br />
        <input type="email"
        value={values.email} 
        placeholder="email" onChange={handleEmail}/>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
      <div>
        {
          submitted ? <Data firstName={values.firstName} lastName={values.lastName} email={values.email} submitted={submitted}/>:""
        }
      </div>
    </div>
  );
}
export default Form;

