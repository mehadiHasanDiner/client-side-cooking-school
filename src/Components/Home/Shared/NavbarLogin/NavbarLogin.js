import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarLogin = () => {
    return (
        <section style={{background:'#faf6f1', height:"30px"}}>
            <Navbar className ="container" style={{height:"30px"}}>
            <Navbar.Text> <small>We are open every day from 9 a.m. till 7 p.m.</small> </Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <small>Signed in as: <a href="#login">Mark Otto</a></small>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavbarLogin;