import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarLogin from '../Shared/NavbarLogin/NavbarLogin';
import NavbarMenu from '../Shared/NavbarMenu/NavbarMenu';

const Header = () => {
    return (
        <div>
            
            <NavbarLogin></NavbarLogin>
            <NavbarMenu></NavbarMenu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;