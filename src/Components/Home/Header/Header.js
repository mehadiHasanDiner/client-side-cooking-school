import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import NavbarMenu from '../../Shared/NavbarMenu/NavbarMenu';
import HeaderMain from '../HeaderMain/HeaderMain';


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