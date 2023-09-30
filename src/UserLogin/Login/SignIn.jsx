import React from 'react';
import { Link } from 'react-router-dom';
import "./Signin.css"

const SignIn = () => {

    // function myFunction() {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }
    
    //   const showPassword = () =>{
    //     const showPass = document.getElementById('showpass');
    //     const visible = document.getElementById('myInput');
    //     showPass.forEach(show=>{
    //     show.addEventListener("click", (e)=>{
    //         e.preventDefault();
    //         if(visible.type === "password"){
    //             visible.type = "text"
    //         }else{
    //             visible.type ="password"
    //         }
    //     })
    //     })

    //   }
        

    return (
        <>
            <div className="container">
                
                <div className="m_card">
                    <form className='s_form' action="">
                    <h1>Sign In</h1>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Email : </label><br />
                            <input type="text" id="name" name="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="m_card_content">
                            <label for="name" className='m_card_content-text'>Password : </label><br />
                            <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div>
                            <input type="checkbox"   required />Show Password
                            <label for="name"></label>
                        </div>
                        <button className='btn btn-link text-decoration-none'>Forget Password?</button>
                        <div>
                            <button className='btn btn-danger w-100 py-2 my-2'>Sign In</button>
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