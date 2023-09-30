import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo (2).svg'
import "./Header.css"

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/order">Order</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/order-review">Order Review</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/*">Manage Inventory</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Header;