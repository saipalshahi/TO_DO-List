import React, {useState} from 'react'
import image1 from './/../../images/image1.png'
import { Form } from 'react-bootstrap'
import './RegistrationForm.css'

const RegistrationForm = () => {

      //making usestate for each input   1
      const [firstname, setFirstname] = useState('')
      const [lastname, setLastname] = useState('')
      const [username, setUsername] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmpassword, setConfirmPassword] = useState('')

      // state, for storing error message    3

      const [firstnameError, setFirstnameError] = useState('')
      const [lastnameError, setLastnameError ] = useState('')
      const [usernameError, setUsernameError] = useState('')
      const [emailError, setEmailError] = useState("")
      const [passwordError, settPasswordError] = useState("")
      const [confirmpasswordError, setConfirmPasswordError] = useState("")


      // validation function   4

      const validation = () => {
        let isValid = true;
      
        //validation for first name
      if(firstname === ''){
        setFirstnameError('First name is required !');
        isValid = false;
      }else{
        setFirstnameError('');
      }

      //validation for lastname
      if(lastname === ''){
        setLastnameError ("last name is required !");
        isValid = false;
      }else{
        setLastnameError('');
      }
      
      //validtion for username
      if(username === ''){
        setUsernameError ("Username is required !");
        isValid = false;
      }else{
        setUsernameError('');
      }

    
    }

  return (
 
    <div className='container mt-3 rounded-5'>
      <div className='mini-container py-5 rounded'>
        <div className='row'>
        <div className='col-md-6'>
        <img className='left-form ' src={image1} alt=''/> {/* // for image */}
        </div>
        <div className='col-md-6'>
        <div  className='right-part '>
     
     <h2>Register</h2>
     <p>Please complete to create your account</p>
    <form>
       <div className='form-row '>
         <div className='form-group  col-md-6'>
         {/* 2. onChange */}
           <input onChange={(e) => setFirstname(e.target.value)} typeof='text' className='form-control' placeholder='First name'/>    
         </div>
         <div className='form-group col-md-6'>
           <input onChange={(e) => setLastname(e.target.value)} typeof='text'className='form-control' placeholder='Last name'/>
         </div>
       </div>
       <div className='form-group'>
       <input onChange={(e) => setUsername(e.target.value)} typeof='text' className='form-control' placeholder='Username'/>
       </div>
       <div className='form-group'>
       <input onChange={(e) => setEmail(e.target.value)} typeof='email' className='form-control' placeholder='Email'/>
       </div>
       <div className='form-group'>
       <input typeof='password' className='form-control' placeholder='Password'/>
       </div>
       <div className='form-group'>
       <input typeof='text'className='form-control' placeholder='Confirm Password'/>
       </div>
       <Form.Check
         typeof="checkbox"
         label={<span>I agree to all statements included in <a href="#">terms of service</a>.</span>}
       />
       <button className='btn bg-primary mt-3'>SIGN UP</button> <a className='ml-5' href="#">I am already a member</a>
       </form>

       <p className='para mt-5'>2018 Blue Heights Properties All Rights Reserved</p>

     
   </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm