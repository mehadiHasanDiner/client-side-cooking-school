import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;