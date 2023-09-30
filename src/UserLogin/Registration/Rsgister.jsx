import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';
import "./Register.css"

const Rsgister = () => {




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
                    <form className='s_form' action="">
                    <h1>Sign In</h1>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Name : </label><br />
                            <input type="text" id="name" name="name" placeholder="Enter your email address" required />
                        </div>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Email : </label><br />
                            <input type="text" id="name" name="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Password : </label><br />
                            <input type="password" id="myInput" name="password" placeholder="Enter your password" required />
                        </div>
                        <div>
                            <input type="checkbox" onClick={()=>myFunction()}   required />Show Password
                            <label for="name"></label>
                        </div>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'>Sign In</button>
                        </div>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'><span className='register_icon'><FcGoogle></FcGoogle></span>Sign In with Google</button>
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