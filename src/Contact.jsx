import React, { useState ,useEffect} from 'react';
import login from './Login'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
// import React from 'react';
import '@firebase/firestore'
import fire from './fire';
import {useHistory} from 'react-router-dom'

const Contact=()=>{
  let history=useHistory();
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [phone,setPhone]=useState('');
   const [message,setMessage]=useState('');

const [user,setUser]=useState('');
useEffect(() => {
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      setUser(user)
    }else{
      setUser(user)
    }
  })    
});
var db = fire.firestore();

const writeUserData=(e)=> 
{
  console.log(user);
  if(user){
  e.preventDefault();
  console.log('startttt');
  db.collection("users").add({
  name: name,
  email: email,
  phone: phone,
  address:message
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
  }else{
    // alert("bdjb");

     history.push('/login')
  }

  }
  return (

            <>
             <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div> 
            <div className='col-md-6 col-10 mx-auto' >
            <form >
            <div className="form-group">
            <AccountCircleIcon/><span> </span>
    <label >Full Name</label>
    <input type="text" className="form-control"  name="fullname"  onChange={(e)=>setName(e.target.value)} placeholder="Full Name"/>
       </div>
  <div className="form-group">
  <EmailIcon/><span> </span>

    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <PhoneIcon/><span> </span>
    <label for="exampleInputNumber">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1" name="phone"  onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
  </div>
  <div className="form-group">
    <MessageIcon/><span> </span>
    <label for="exampleInputMessage">Message</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="message" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter Your Message"/>
  </div>
    <br></br>
     <button type="submit" className="btn btn-outline-primary" onClick={writeUserData}>Submit</button>
    </form>  
    </div>      
            </>
        );
    
}

export default Contact;