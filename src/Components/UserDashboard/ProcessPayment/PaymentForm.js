import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import UserSidebar from '../UserSidebar/UserSidebar';
import ProcessPayment from './ProcessPayment';

const PaymentForm = () => {

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <UserSidebar></UserSidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <ProcessPayment></ProcessPayment>

                </div>
            </div>
        </div>
    );
};

export default PaymentForm;