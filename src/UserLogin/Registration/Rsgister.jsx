import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImGithub } from 'react-icons/im';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import "./Register.css";
import { AuthContext } from '../../Components/userContext/UserContext';


const Rsgister = () => {

    const { googleLogin,createUser,gitHubLogin,facebookLogin} = useContext(AuthContext);
    const [success,setSuccess]=useState()
    const [passwordError,setPasswordError] = useState();
    const [sUser, setUser] = useState({}); 
    console.log(sUser);


     const handleSignUp = (e) => {
        e.preventDefault();
        console.log("clicked the button");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
            setSuccess("Yor registration is successful")
        })
        .catch((error)=>{
            "Firebase Error", error;
        })

        // Password Validation
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('At Least Two Uppercase');
            return false;
        }
        
        if(!/(?=.*[a-z])/.test(password)){
            setPasswordError('At Least One Lowercase')
            return false;
        }
        if(!/(?=.*[!@#$%^&*()?,?/"';:={}+_-])/.test(password)){
            setPasswordError('At Least One Special');
            return false;
        }
        if(password.length <8){
            setPasswordError('Minimum 8 Characters');
            return false;
        }
        setPasswordError('');
    }


    const LoginWithGoogle = (e) => {
        e.preventDefault();
        googleLogin()
        .then((result) => {
            const user = result.user;
            setUser(user);
            setSuccess("Your google registration is successful")

        }).catch(error => console.log(error))
       
    }
    const loginWithGitHub = (e) => {
        e.preventDefault();
        gitHubLogin()
        .then((result) => {
            const user = result.user;
            setUser(user);
            setSuccess("Your GitHub registration is successful")

        }).catch(error => console.log(error))
       
    }
    const loginWithFacebook = (e) => {
        e.preventDefault();
        facebookLogin()
        .then(result=>{
            const user = result.user;
            setUser(user)
            setSuccess("Yor Facebook Login is successful")
        })
        .catch(error=>{
            "Firebase Error", error;
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
                    <form onSubmit={handleSignUp}className='s_form' action="">
                    <h1>Sign In</h1>
                        <div className="m_card_content">
                            <label htmlFor="name" className='m_card_content-text'>Name : </label><br />
                            <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                        </div>
                        <div className="m_card_content">
                            <label htmlFor="email" className='m_card_content-text'>Email : </label><br />
                            <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
                        </div>
                        <div className="m_card_content">
                            <label htmlFor="password" className='m_card_content-text'>Password : </label><br />
                            <input type="password" id="myInput" name="password" placeholder="Enter your password" required  />
                            <span className='text-danger'>{passwordError}</span>
                        </div>
                        
                        <div>
                            <input type="checkbox" onClick={()=>myFunction()} />
                            <label>Show Password</label>
                        </div>
                        <div>
                            <span className="text-1 text-success">{success}</span>
                        </div>
                        <div>
                            <input type='submit' className='btn btn-danger w-100 py-2 my-2' value="Sign Up" />
                        </div>
                        <div>
                            <button onClick={LoginWithGoogle}  className="btn btn-danger w-100 py-2 my-2"><span className='register_icon'><FcGoogle></FcGoogle></span>Login With Google</button>
                        </div>
                        <div>
                            <button onClick={loginWithGitHub} className='btn btn-danger w-100 py-2 my-2'><span className='register_icon' ><ImGithub></ImGithub></span>Sign In with GitHub</button>
                        </div>
                        <div>
                            <button onClick={loginWithFacebook} className='btn btn-danger w-100 py-2 my-2'><span className='register_icon' ><BsFacebook></BsFacebook></span>Sign In with Facebook</button>
                        </div>
                        <div>
                            <span>Already have an account?<Link to="/signin" className='text-decoration-none'>Please Login</Link></span>
                        </div>
                        {/* <button >Login With Google</button> */}
                    </form>

                    
                </div>
            </div>
            
        </>
        
    );
};

export default Rsgister;