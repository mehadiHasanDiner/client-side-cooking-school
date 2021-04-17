import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import UserSidebar from '../UserSidebar/UserSidebar';
import ProcessPayment from './ProcessPayment';

const PaymentForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [newClasses, setNewClasses] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5055/classes/${id}`)
        .then(res => res.json())
        .then(data => setNewClasses(data))
    }, [])
    
    // const {imageURL, details, fee } = classes;

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <UserSidebar></UserSidebar>
                {newClasses.length}
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <ProcessPayment></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;