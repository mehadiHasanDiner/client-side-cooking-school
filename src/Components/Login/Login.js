import React, { useContext, useState } from 'react';

import { GoogleLoginButton } from "react-social-login-buttons";
import "./Login.css"
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import NavbarLogin from '../Shared/NavbarLogin/NavbarLogin';
import NavbarMenu from '../Shared/NavbarMenu/NavbarMenu';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })
    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user;
                console.log(user);
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUserToken();

                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);

                console.log(signedInUser);
                console.log(loggedInUser);

            }).catch((error) => {
                var errorMessage = error.message;
                // The email of the user's account used.
                console.log(errorMessage, error);
            });
    }

    const setUserToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <NavbarMenu></NavbarMenu>
            <div className="login-btn text-center">
                <h3>This is login Page</h3>
                <GoogleLoginButton style={{ border: '1px solid' }} onClick={handleGoogleSignIn} />
            </div>
        </div>

    );
};

export default Login;