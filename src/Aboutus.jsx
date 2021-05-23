import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/About.png'
import './App.css'
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';

class Aboutus extends Component {
    render() {
        return (
            < >
            {/* backgroundImage: `url(${logo})` */}
               <section id="header" className="d-flex align-items-center"  >
                 <div className="container-fluid" >    
                     <div className="row">
                         <div className="col-10 mx-auto">
                            <div className='row ' >
                            {/* pt-5 pt-lg-0 order-lg-1 */}
                             <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-lg-1 mx-auto" >
                                 <h1 className="mt-5">Welcome to <strong className="brand-name">Happy Moments </strong>About us</h1>
                                 <h2 className="my-3"> We will success your plannings</h2>
                                 <div className="mt-3">
                                    <NavLink to="/contact" className="btn btn-get-started">Contact Now</NavLink>
                                 </div>
                                 <div className="mt-3" >
                                 <Tooltip title="Facebook">
                                     <Button  style={{color:'blue'}}>  <FacebookIcon/>       </Button>
                                     </Tooltip> 
                                     <Tooltip title="Twitter">
                                         <Button  title="www.twitter.com"   color="primary">    <TwitterIcon/>     </Button>
                                     </Tooltip>
                                    <Tooltip title="Call">
                                      <Button  className="callbtn" title="123456789"><CallIcon/>    </Button> 
                                      </Tooltip>
                                      
                                 </div>
                             </div>
                             
                            
                             <div className='col-md-6 order-1 order-lg-1'>
                                 <div className="aboutusdesc ">Celebrations are always fun and loving, but we
                                            need to have a look on the preparations, uff! hectic
                                            they are. But what if we say that the preparation
                                            stuff would be coming to us? Sounds relieved right?
                                            We advice to you the best of what we have got in
                                            the box for you at most reasonable prices because
                                            we follow just one rule for all "Make someone
                                            happy today". So without a second thought do
                                            contact us.
                                         </div>
                             </div>
                             </div>
                         </div>
                           
                     </div>
                 </div>
               </section>
              
               <footer className="text-center bg-dark text-white pt-1">
               <span>&#169;</span>Lakhan Maltare
               </footer>
               
            </>
        );
    }
}

export default Aboutus;