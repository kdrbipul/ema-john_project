import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/images/austin-wade-AoYT0ArTTmg-unsplash 1.png'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className='container home_part'>
                <div className='content'>
                    <p>Sale up to 70% off</p>
                    <h1>New Collection For Fall</h1>
                    <h4>Discover the all new arrivals of ready-to-wear collection.</h4>
                    <Link to='/order'><button type='submit' className='btn btn-outline-warning'>Shope Now</button></Link>
                </div>
                <div className='profile_picture'>
                    <div className="profile_picture-inner">

                    </div>
                    <div className="profile_picture-outer">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;