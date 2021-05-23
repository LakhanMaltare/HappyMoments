
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React, { Component } from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar.jsx'
import Login from './Login';
import Signup from './Signup'
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css'
import fire from './fire';
import Navbar1 from './Navbar1'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  componentDidMount(){
   this.authListner();
  }
   authListner(){
     fire.auth().onAuthStateChanged((user)=>{
       if(user){
         this.setState({user})
       }else{
         this.setState({user:null})
       }
     })
   }
  render(){
  return (
    <>
       {/* <Navbar></Navbar> */}
       {/* { this.state.user?<Home/>:<Login/>}; */}
       {this.state.user?<Navbar1/>:<Navbar/>}
       
       <Switch>
         <Route exact path="/home" component={Home} />
         <Route exact path="/aboutus" component={Aboutus} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/services" component={Services} />
         <Route exact path="/signup" component={Signup} />
         <Redirect to='/home' />
       </Switch>

    </>

  );
  }
}

export default App;
