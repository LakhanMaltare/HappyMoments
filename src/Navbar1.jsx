import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from './images/hm02 (4) copy.png';
import { Button} from 'react-bootstrap'
import './App.css'
import firebase from './fire';
import {useHistory} from 'react-router-dom'

const Navbar1=() =>{
  let history=useHistory();

  const logoutbtn=(e)=>{
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      history.push('/home')
    }).catch((error) => {
      // An error happened.
    });
  }
    
   return (  <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
  <img src={logo} alt="logo" style={{height:65,width:85}}/>
    <NavLink className="navbar-brand" to="/home" style={{fontSize:40}}>
    Happy Moments</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav ml-auto mb-2 mb-lg-0 "> */}
      <ul className="navbar-nav ml-auto mr-1" >
        <li className="nav-item ml-2 mr-2">
          <NavLink activeClassName="menu_active" className="nav-link active" to="/home">Home</NavLink>
        </li>
        <li className="nav-item ml-2 mr-2">
          <NavLink activeClassName="menu_active" className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item ml-2 mr-2">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item ml-2 mr-2">
          <NavLink activeClassName="menu_active" className="nav-link" to="/aboutus">About us</NavLink>
        </li>
        <li className="nav-item ml-2 mr-2">
          {/* <NavLink className="nav-link" to="/signup">Sign Up</NavLink> */}
          <Button variant="contained" className="btn btn-primary mt-2" onClick={logoutbtn}>Log Out</Button>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
   )

}
export default Navbar1;