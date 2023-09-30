import React from 'react';
import { Link } from 'react-router-dom';

const Nothing = () => {
    return (

        <>
            <div className='container'>
                
                <h1 className='d-flex justify-content-center align-items-center my-5 py-5 rounded-2 bg-warning text-danger'>404 <span>This is not a valid way</span></h1>
            <Link to='/' className='d-flex justify-content-center align-items-center text-decoration-none'><button className='btn btn-danger'>Go to home page</button></Link>
            </div>
        </>
        
    );
};

export default Nothing;