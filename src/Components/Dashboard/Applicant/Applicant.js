import React, { useEffect, useState } from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';

const Applicant = () => {

    const [allApplicant, setAllApplicant] = useState([]);

    useEffect(() => {
        fetch('https://agile-gorge-02356.herokuapp.com/receiveApply')
            .then(res => res.json())
            .then(data => setAllApplicant(data))
    }, [])

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row" > 
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
            <h4 className="text-brand">Applicant List</h4>
                    <table className=" table table-border" >
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Applicant Name</th>
                                <th className="text-secondary" scope="col">Applicant Email</th>
                                <th className="text-secondary" scope="col">Qualification</th>
                                <th className="text-secondary" scope="col">Description</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {
                            allApplicant.map((applicant, index) => 
                        
                            <tr>
                                <td>{index+1}</td>
                                <td>{applicant.yourName}</td>
                                <td>{applicant.yourEmail}</td>
                                <td>{applicant.yourEdu}</td>
                                <td>{applicant.yourMessage}</td>
                                
                            </tr> )
                        }
                        </tbody>
                    </table>
             </div>
            </div>
        </div>
    );
};

export default Applicant;