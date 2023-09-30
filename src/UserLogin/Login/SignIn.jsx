import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

      const handleShoPassword =()=>{

      }
    

    return (
        <form className='container my-5 py-5 justify-content-center align-items-center w-25 bg-warning rounded-2'>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" id="myInput"  onClick={()=>handleShoPassword}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Show Password</label>
            </div>
            <div className="mb-3 form-check">
                <span className=''>New user?<Link to="/register">Sign Up</Link></span>
            </div>
            <button type="submit" className="btn btn-danger w-100">Submit</button>
        </form>
    );
};

export default SignIn;