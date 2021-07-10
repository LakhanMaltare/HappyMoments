import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/About.png'
import './App.css'
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CallIcon from '@material-ui/icons/Call';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
class Aboutus extends Component {
    render() {
        return (
            < >
               <section id="header" className="align-items-center"  >
                 <div className="container-fluid mt-5" >    
                     <div className="row ">
                         <div className="col-10 mx-auto">
                            <div className='row ' >
                            {/* col-md-6 pt-5 pt-lg-0 order-lg-1 mb-5 */}
                            {/* col-md-6 mt-5 pt-5 pt-lg-0 order-lg-1 mx-auto */}
                             <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 mb-5 mt-5" >
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
                                    <Tooltip title="Instagram">
                                      <Button  className="Instagram" color="secondary"><InstagramIcon/>    </Button> 
                                      </Tooltip>
                                      
                                 </div>
                             </div>
                             <div className='col-md-6 order-1 order-lg-1 mt-5 '>
                                 <div className="aboutusdesc">Celebrations are always fun and loving, but we 
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
                 <div className=" container-fluid col-10 mt-5 aboutusdesc2 mx-auto">
                     Happy Moments is an event planner who evolves with your thoughts to make your special days the best.It envisions
                     your idea and helps you with all the chores of services providing."SIEZE THE MOMENT MY FRIEND" Remember this dialogue from all time 
                     favorite moving "Zindagi Na Milegi Dobara"?
                     Well, all of us have those special moments that we remember and cherish for life time and here we are to make those 
                     moments for you special and the best.Because what matters is your happiness.

              </div>
               </section>
                             
            </>
        );
    }
}

export default Aboutus;