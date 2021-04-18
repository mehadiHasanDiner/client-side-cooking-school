import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";


const NavbarLogin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
            alert('Your are attempting to Logging out');
        })
        .catch(error => {

        })
}

    return (
        <section style={{background:'#faf6f1', height:"30px"}}>
            <Navbar className ="container" style={{height:"30px"}}>
            <Navbar.Text> <Link to = "/"> <small> Cooking School </small> </Link> </Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <small>Signed in as: {loggedInUser.name} </small>
                        { loggedInUser.email ? <button onClick={handleSignOut} style = {{padding: "0px 10px 0px 10px", fontSize:"14px"}} className="btn-brand-white">Logout</button>
                        :
                        <Link to ="/login"> <small><FontAwesomeIcon className="icon active-icon" icon={faUserAlt} />  Login & Register</small> </Link> 
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavbarLogin;