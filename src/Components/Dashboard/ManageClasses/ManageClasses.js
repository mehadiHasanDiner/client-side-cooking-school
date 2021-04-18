import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/classes')
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    const deleteClass = () => {
        alert('Class is Deleted Successfully!')       
        // window.location.reload(true);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5055/deleteClass/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data =>deleteClass(data))
    }


    return (
        <div>
             <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h4 className="text-brand">Manage Classes</h4>
                    <table className=" table table-border" >
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Course Name</th>
                                <th className="text-secondary" scope="col">Course Fee</th>
                                <th className="text-secondary" scope="col">Image</th>
                                <th className="text-secondary" scope="col">Action </th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {
                            allClasses.map((classes, index) => 
                        
                            <tr>
                                <td>{index+1}</td>
                                <td>{classes.class}</td>
                                <td>{classes.fee}</td>
                                <td> <img style = {{width:"80px"}} src={classes.imageURL} alt=""/> </td>
                                <td> <Link to="/admin/addClasses"> <button className="btn btn-success">Add </button> </Link> 
                                      <button onClick={() => handleDelete(classes._id)} className="btn btn-danger">Delete </button> </td>
                            </tr> )
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageClasses;