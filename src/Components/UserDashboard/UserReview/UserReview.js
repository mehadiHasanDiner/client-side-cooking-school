import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);    

    const onSubmit = data => {
        const eventData = {
            name : data.name,
            companyName: data.companyName,
            description: data.description,
            email: loggedInUser.email,
            displayName: loggedInUser.name,
            photoURL: loggedInUser.photo,
        }
        fetch('http://localhost:5055/userReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Thanks for Review')
                }
            })
        console.log(eventData)
    };

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <UserSidebar></UserSidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h5 className="text-brand">Review</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <div className="col-6">
                            <input type="text" placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} className="form-control"/>
                            {errors.name && <span className="text-danger">This field is required</span>}
                            <br/>
                            
                            <input type="text" placeholder="Company Name, Designation" {...register("companyName", { required: true, maxLength: 80 })} className="form-control"/>
                            {errors.companyName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-6">
                        <textarea placeholder="Description" {...register("description", { required: true })} className="form-control"/>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="form-group text-right">
                        <button type="submit" className="btn-brand-white mt-3 ml-3">Submit</button>
                        </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default UserReview;