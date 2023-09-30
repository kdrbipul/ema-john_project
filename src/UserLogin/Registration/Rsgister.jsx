import React from 'react';
import { Link } from 'react-router-dom';

const Rsgister = () => {
    return (
        <>
       <form className='container my-5 py-5 justify-content-center align-items-center w-25 bg-warning rounded-2'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Show Password</label>
            </div>
            <div className="mb-3 form-check">
                <span className=''>Already have an account?<Link to="/signin">Login</Link></span>
            </div>
            <button type="submit" className="btn btn-danger w-100">Submit</button>
        </form>
            
        </>
        
    );
};

export default Rsgister;