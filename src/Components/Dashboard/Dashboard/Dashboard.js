import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <Sidebar></Sidebar>
            <h1 style={{color:"tomato"}} className="text-center mt-5"> Admin Dashboard</h1>
        </div>
    );
};

export default Dashboard;