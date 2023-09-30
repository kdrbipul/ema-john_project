import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Register.css"
import app from './../../firebase/firebase.config';

const auth = getAuth(app);

const Rsgister = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const handleGoogleLogin = (e) =>{
        e.preventDefault();
        console.log("Clicked the button");
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            setUser(user)
        }).catch((error)=>{
            "Firebase error", error;
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
                <div user={user}></div>
                <div className="m_card">
                    <form className='s_form' action="">
                    <h1>Sign In</h1>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Name : </label><br />
                            <input type="text" id="name" name="name" placeholder="Enter your email address"  />
                        </div>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Email : </label><br />
                            <input type="text" id="name" name="email" placeholder="Enter your email address"  />
                        </div>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Password : </label><br />
                            <input type="password" id="myInput" name="password" placeholder="Enter your password"  />
                        </div>
                        <div>
                            <input type="checkbox" onClick={()=>myFunction()}    />Show Password
                            <label for="name"></label>
                        </div>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'>Sign In</button>
                        </div>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'><span className='register_icon' onClick={()=>handleGoogleLogin()}><FcGoogle></FcGoogle></span>Sign In with Google</button>
                        </div>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'><span className='register_icon'><ImGithub></ImGithub></span>Sign In with GitHub</button>
                        </div>
                        <div>
                            <span>Already have an account?<Link to="/signin" className='text-decoration-none'>Please Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
        
    );
};

export default Rsgister;