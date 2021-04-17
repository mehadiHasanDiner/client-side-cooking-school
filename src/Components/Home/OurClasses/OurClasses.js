import React, { useEffect, useState } from 'react';

const OurClasses = () => {
    const [classes, setNewClasses] = useState([]);
    const [visibleClasses, setVisibleClasses] = useState(3);

    const showMoreItems = () => {
        setVisibleClasses(preValue => preValue + 3);
    };

    useEffect(() => {
        fetch('http://localhost:5055/classes')
            .then(res => res.json())
            .then(data => setNewClasses(data))
    }, [])

    return (
        <section className="container mt-5 text-center">
            <p className="brand-color">Our Best Cooking Classes</p>
            <h2>Popular Classes</h2>
            <div className="row container">
                {
                    classes.slice(0, visibleClasses).map(course =>
                        <div key={course._id} className="col-md-4 col-sm-6">
                            <div className="card mt-4">
                                <img className="card-img-top" style={{ height: "200px" }} src={course.imageURL} alt="" fluid />
                                <div className="card-body text-left">
                                    <h4>{course.class}</h4>
                                    <p style={{fontSize:"12px"}} >{course.details}</p>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <h3>${course.fee}</h3>
                                        <button className="btn-brand-white">Enroll</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <button onClick={showMoreItems} className="btn-brand-white text-uppercase mt-3"> Load All Classes</button>
        </section>
    );
};

export default OurClasses;