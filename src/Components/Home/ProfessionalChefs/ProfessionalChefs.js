import React, { useEffect, useState } from 'react';

const ProfessionalChefs = () => {
    const [newAdmin, setNewAdmin] = useState([]);

    useEffect(() => {
        fetch('https://agile-gorge-02356.herokuapp.com/newAdmin')
            .then(res => res.json())
            .then(data => setNewAdmin(data))
    }, [])


    return (
        <section className="container mt-5 text-center">
            <p className="brand-color">Our Qualified Tutors</p>
            <h2>Professional Chefs</h2>
            <div className="row container">
                {
                    newAdmin.map(admin =>
                        <div key = {admin._id} className="col-md-4 col-sm-6">
                            <div className="card mt-4">
                                <img className="card-img-top" style={{ height: "250px" }} src={admin.imageURL} alt="" fluid />
                                <hr/>
                                <div className="card-body text-left">
                                    <h4>{admin.adminName}</h4>
                                    <h6>{admin.adminTitle}</h6>
                                    <p style={{fontSize:"12px"}} >{admin.adminQualify}</p>
                                   
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default ProfessionalChefs;