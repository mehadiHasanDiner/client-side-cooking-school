import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';

const ListOfClasses = () => {
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('https://agile-gorge-02356.herokuapp.com/classes')
            .then(res => res.json())
            .then(data => setAllClasses(data))
    }, [])

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="contai
            ner-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h5 className="text-brand">List of All Cooking Classes</h5>
                    <table className=" table table-border" >
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Course Name</th>
                                <th className="text-secondary" scope="col">Course Fee</th>
                                <th className="text-secondary" scope="col">Image</th>
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
                            </tr> )
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ListOfClasses;