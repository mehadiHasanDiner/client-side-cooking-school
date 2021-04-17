import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

const UserSidebar = () => {
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled brand-color">
                <h2 className="mb-4">User Panel</h2>
                    <li>
                        <Link to="/user/paymentForm" className="brand-color">
                            <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                        </Link>
                    </li>
                        <li>
                            <Link to="/dashboard/listOfClasses" className="brand-color">
                                <FontAwesomeIcon icon={faListAlt} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addClasses" className="brand-color">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
    );
};

export default UserSidebar;