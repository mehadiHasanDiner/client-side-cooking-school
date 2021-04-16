import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';

import logo from '../../../image/logo.png'
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    return (
        <div>
            <section>               
                <Navbar collapseOnSelect expand="lg" >
                
                <Navbar.Brand> <Link  to ="/home"> <img style={{width:"30%", }} src={logo} alt="" fluid/> </Link> </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link className="nav-link text-dark" to ="/home"> Home</Link>
                        <Link className="nav-link text-dark" to ="/dashboard"> Admin</Link>
                        <Link className="nav-link text-dark" to ="/orderPreviewPass"> Order</Link>
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            
             
            </section>
        </div>
    );
};

export default NavbarMenu;