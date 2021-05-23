import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import fire from './fire' 
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <>
  <BrowserRouter> 
  <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// constructor(props){
//   super(props);
//   this.state={
//       user:"";
//   }
// }
// authlistner(){
//   fire.auth().onAuthStateChanged((user)=>{
//       if(user){
//           this.setState({user})
//       }else{
//           this.setState({user:null})
//       }
//   })
// }
// componentDidMount(){
//   this.authlistner();
// }