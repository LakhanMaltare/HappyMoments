import React, { Component } from 'react';
import logo from './images/smily.png'
import Card from './Card'
class Services extends Component {
    render() {
        return (
            <>
            <div className="my-5 ">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                     <div className="row">
                         <div className="col-10 mx-auto">
                               <div className="row ">
                                   <Card/>                      
                               </div>
                         </div>
                    </div>
             </div>
            </>
        );
    }
}

export default Services;