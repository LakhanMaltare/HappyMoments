import React, { useState } from 'react';
import fire from './fire'
import {useHistory} from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';


const Login=()=> {

  let history=useHistory();

const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');

        
        
const login=(e)=>{
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        history.push('/home')
      })
      .catch((error) => {
        document.getElementById('errormsg').innerHTML="Wrong Credentials!"
      });
console.log(email);
  console.log(password);
   }
        return (
            <>
                <div className="my-5">
                <h1 className="text-center">Log In</h1>
            </div> 
            <div className='col-md-6 col-10 mx-auto'></div>
        <form className="login mx-auto w-50">
         <div class="form-group ">
         <EmailIcon/><span> </span>
        <label for="exampleInputEmail1">Email address</label>
    <input type="email"  name="email" className="form-control" id="exampleInputEmail1"  onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <LockIcon/><span> </span>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
  </div>
  <div id="errormsg" style={{color:'red',fontSize:20}}></div>
  <button type="submit" className="btn btn-success" onClick={login} >Submit</button>
</form>
            </>
        );
    
}

export default Login;