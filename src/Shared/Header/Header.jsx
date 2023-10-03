import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo (2).svg'
import "./Header.css"
import { AuthContext } from './../../Components/userContext/UserContext';

const Header = () => {

    const{user,logOut}=useContext(AuthContext);
    const [success,setSuccess] = useState();

    const handleLogout = () =>{
        logOut()
        .then({
              

        })
        .catch((error) =>{
            "Firebase Error",error;
        })

    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container">
                
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/order">Order</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/order-review">Order Review</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/*">Manage Inventory</NavLink>
                        </li>
                        {
                            user?.uid ? <li className="nav-item">
                            <button className="nav-link btn btn-outline-danger" onClick={handleLogout} to="/signin">Log Out</button>
                            </li> : <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                            </li>
                        }
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li><img className='w-25 rounded-5' src={user?.photoURL} alt="" /></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Header;