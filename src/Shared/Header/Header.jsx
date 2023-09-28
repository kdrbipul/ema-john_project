import React from 'react';
import { NavLink } from 'react-bootstrap';
import logo from '../../assets/images/Logo (2).svg'

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                
                    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Order</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Order Review</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Manage Inventory</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Sign In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Header;