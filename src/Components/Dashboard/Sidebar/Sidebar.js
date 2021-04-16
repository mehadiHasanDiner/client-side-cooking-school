import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faPlus, faSchool, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled brand-color">
                    <li>
                        <Link to="/dashboard" className="brand-color">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                        <li>
                            <Link to="/dashboard/listOfClasses" className="brand-color">
                                <FontAwesomeIcon icon={faSchool} /> <span>List of Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addClasses" className="brand-color">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="dashboard/makeAdmin" className="brand-color" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manageClasses" className="brand-color">
                                <FontAwesomeIcon icon={faUsers} /> <span>Manage Classes</span>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;