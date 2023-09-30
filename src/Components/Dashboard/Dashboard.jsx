import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import "./Dashboard.css"


const Dashboard = () => {
    return (
    <>
    <div className='container dashboard'>
        <div className='my-5'>
            <NavLink to='/dashboard'><button className='btn btn-outline-success'>About</button></NavLink><br />
            <NavLink to='/dashboard/profile'><button className='btn btn-outline-success my-2'>Profile</button></NavLink><br />
            <NavLink to='/profile'><button className='btn btn-outline-success'>Service</button></NavLink><br />
            <NavLink to='/profile'><button className='btn btn-outline-success my-2'>Project</button></NavLink><br />
            <NavLink to='/profile'><button className='btn btn-outline-success'>Contact</button></NavLink><br />
        </div>
        <main>
            <Outlet />
        </main>
    </div>
        
    </>  
    );
};

export default Dashboard;