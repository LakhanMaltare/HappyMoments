import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/smily.png'

class Home extends Component {

    render() {
        return (
            < >
            <div className="pic">
               <section id='header' className="d-flex align-items-center">
                 <div className="container-fluid ">
                     <div className="row">
                         <div className="col-10 mx-auto">
                            <div className='row'>
                             <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 mb-5">
                                 <h1>Live Your <strong className="brand-name">Happy Moments </strong>with us</h1>
                                 <h2 className='my-3'> We will success your plannings</h2>
                                 <div className='mt-3'>
                                    <NavLink to="/services" className="btn btn-get-started">Explore</NavLink>
                                 </div>
                             </div>
                             <div className='col-lg-6 order-1 order-lg-1 header-img'>
                                 <img src={logo} className='img-fluid animated' alt='ima'/>
                             </div>
                         </div>
                         </div>
                     </div>
                 </div>
                 
               </section>
               
               </div>
               <footer className="text-center bg-dark text-white pt-1">
               <span>&#169;</span>Lakhan Maltare
               </footer>
               
            </>
        );
    }
}

export default Home;