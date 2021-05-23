import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from './fire';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
const Signup=()=>{
      const [name,setName]=useState('');
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [cpassword,setCpassword]=useState('');
    
        const signupbtn=(e)=>{
          // console.log("bfjsbfjsbfjsbfja");      
          e.preventDefault();
                // console.log("bfjsbfjsbfjsbfja");
                 if(password===cpassword){ 
                  firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    console.log(user);
                    console.log(email);
                    console.log(password);
                    // ...
                  })
                  .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    alert("Enter details Correctly")
                    // ..
                  });
                  console.log(email);
                    console.log(password);  
                 }else{
                   alert('Passwords are different');
                 }
        }

        return (
            <>
   <div className="my-5">
                <h1 className="text-center">SIGN UP</h1>
            </div> 
            <div className='col-md-6 col-10 mx-auto'>
            <form method='POST'>
            <div className="form-group">
              <AccountCircleIcon/><span> </span>
    <label >Full Name</label>
    <input type="text" className="form-control"  name="fullname"  onChange={(e)=>setName(e.target.value)} placeholder="Full Name"/>
       </div>
       
  <div className="form-group">
    <EmailIcon/><span> </span>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <LockIcon/><span> </span>
    <label for="exampleInputNumber">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" name="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"/>
  </div>
  <div className="form-group">
    <ConfirmationNumberIcon/><span> </span>
    <label for="exampleInputNumber">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" onChange={(e)=>setCpassword(e.target.value)} name="confirm password" placeholder="Confirm Password"/>
  </div>
   
    <button type="submit"  onClick={signupbtn} className="btn btn-outline-primary mx-auto">Sign Up</button>
    
    <NavLink to='/login' className="mx-3 font-weight-bold text-capitalize ">Already registered?</NavLink>

    </form>  
    </div>             
    
            </>
        );
    }

export default Signup;
