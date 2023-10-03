import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/userContext/UserContext';
import "./Signin.css"

const SignIn = ({unSubscribe}) => {

    const {signIn} = useContext(AuthContext);
    const [success,setSuccess] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            setSuccess("You are successfully login")
            form.reset()
        })
        .catch((error)=>{
            "Firebase Error",error;
        })
    }


    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
    
        

    return (
        <>
            <div className="container">
                
                <div className="m_card">
                    <form onSubmit={handleLogin} className='s_form' action="">
                    <h1>Sign In</h1>
                        <div className="m_card_content">
                            <label htmlFor="name" className='m_card_content-text'>Email : </label><br />
                            <input type="text" id="name" name="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="m_card_content">
                            <label htmlFor="name" className='m_card_content-text'>Password : </label><br />
                            <input type="password" id="myInput" name="password" placeholder="Enter your password" required />
                        </div>
                        <div>
                            <input type="checkbox" onClick={()=>myFunction()} />Show Password
                            <label htmlFor="name"></label>
                        </div>
                        <button className='btn btn-link text-decoration-none'>Forget Password?</button>
                        <div><span className='text-success'>{success}</span></div>
                        <div>
                            <button type="submit" className='btn btn-danger w-100 py-2 my-2'>Sign In</button>
                        </div>
                        <div>
                            <span>You are a new user?<Link to="/register" className='text-decoration-none'>Sign Up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;