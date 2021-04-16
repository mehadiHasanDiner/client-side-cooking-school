import React from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddClasses = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '34f621294efe3dffee17d7d85e366504');
        imageData.append('image', event.target.files[0])   

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // setIMageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // console.log(errors);


    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h5 className="text-brand">Add a New Class</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <div className="col-6">
                            <input type="text" placeholder="Class Title" {...register("Class Title", { required: true, maxLength: 80 })} className="form-control"/>
                            {errors.text && <p><span className="text-danger">This field is required</span></p>}
                            <br/>
                            <textarea placeholder="Course Details" {...register("Class Description ", { required: true, maxLength: 100 })} className="form-control"/>
                           
                        </div>

                        <div className="col-6">

                            <input type="number" placeholder="Course Fee" {...register("Course Fee", { required: true })} className="form-control"/>
                            {errors.number && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input type="file" placeholder="Course Photo" onChange={handleImageUpload} {...register("Course Photo", { required: true, maxLength: 12 })} />
                        </div>
                        
                        <div className="form-group text-right">
                        <button type="submit" className="btn-brand-white mt-3 ml-3">Add Class</button>
                        </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddClasses;