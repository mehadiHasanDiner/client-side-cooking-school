import React from 'react';
import { useForm } from "react-hook-form";
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const eventData = {
            class : data.classTitle,
            details: data.courseDetails,
            fee: data.courseFee,
        };
        const url = `http://localhost:5055/addClasses`
        console.log(eventData)

    };


    const handleSaveProduct =() =>{
        alert("Thanks for Your Review");    
    }

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <UserSidebar></UserSidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h5 className="text-brand">Add a New Class</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <div className="col-6">
                            <input type="text" placeholder="Class Title" {...register("classTitle", { required: true, maxLength: 80 })} className="form-control"/>
                            {errors.classTitle && <span className="text-danger">This field is required</span>}
                            <br/>
                        </div>

                        <div className="col-6">
                        <textarea placeholder="Course Details" {...register("courseDetails", { required: true, maxLength: 200 })} className="form-control"/>
                            {errors.courseDetails && <span className="text-danger">This field is required</span>}
                        </div>
                        
                        <div className="form-group text-right">
                        <button onClick = {handleSaveProduct} type="submit" className="btn-brand-white mt-3 ml-3">Add Class</button>
                        </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default UserReview;