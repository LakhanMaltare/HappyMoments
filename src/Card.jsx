import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import familyfun from './images/familyfun.jpg'
import fire from './fire'
import music from './images/music.jpeg'
import photo from './images/photoshoot.jpeg'
import wedding from './images/wedding.jpeg'
import birthday from './images/birthday.jpeg'
import dance from './images/dance.jpeg'
import clgevents from './images/event.jpeg'

const Card=()=>{
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
    const checkauth=()=>{
        if(user){
           console.log('logout first');
        }else{
            alert("Please login or Sign up");
            
        }
    }
        return (
            <>
          <div className='col-md-4 col-10 mx-auto p-2'>
                <div className="card">
                <img src={wedding} style={{height:'400px',width:'auto' }} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">WEDDING DESTINATION</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary"onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>
                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={birthday} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">BIRTHDAY PARTIES</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary" onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>

                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={photo} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">PHOTOSHOOT</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary"onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>

                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={music} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">LAUNCH MUSIC</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary" onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>
              

                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={familyfun} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">FESTIVE CELEBRATION</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary" onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>
 
                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={clgevents} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">SCHOOL/COLLEGE EVENTS</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary" onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>

                <div className='col-md-4 col-10 mx-auto p-2'>
                        <div className="card">
                <img src={dance} style={{height:'400px',width:'auto' }}  className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">DANCE</h5>
                    <p className="card-text"></p>
                    <NavLink to="#" className="btn btn-primary" onClick={checkauth}>Book Now</NavLink>
                </div>
                </div>
                </div>


            </>
        );
    }


export default Card;