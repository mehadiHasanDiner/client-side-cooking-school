import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserDashboard = () => {
    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <UserSidebar></UserSidebar>
        </div>
    );
};

export default UserDashboard;