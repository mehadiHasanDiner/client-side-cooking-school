import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faGripHorizontal, faPlus, faSchool, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('http://localhost:5055/isAdmin', {
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify({email: loggedInUser.email})
      })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
      
  }, [])

    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled brand-color">
                <h2>Admin Panel</h2>

                    <li>
                        <Link to="/dashboard" className="brand-color">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>

                    {isAdmin && <div>
                        <li>
                            <Link to="/admin/listOfClasses" className="brand-color">
                                <FontAwesomeIcon icon={faSchool} /> <span>List of Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addClasses" className="brand-color">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/makeAdmin" className="brand-color" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/manageClasses" className="brand-color">
                                <FontAwesomeIcon icon={faUsers} /> <span>Manage Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/sendApply" className="brand-color">
                                <FontAwesomeIcon icon={faFileAlt} /> <span> Applicant  </span>
                            </Link>
                        </li>
                    </div>}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;