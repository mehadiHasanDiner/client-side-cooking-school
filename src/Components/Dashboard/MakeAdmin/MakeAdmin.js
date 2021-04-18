import React, { useState } from 'react';
import NavbarLogin from '../../Shared/NavbarLogin/NavbarLogin';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            adminName : data.adminName,
            adminEmail : data.adminEmail,
            adminTitle: data.adminTitle,
            adminQualify: data.adminQualify,
            imageURL: imageURL
        };
        const url = `https://agile-gorge-02356.herokuapp.com/newAdmin`
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4aeaf0a1b0521a6708c034d03b82fdb8');
        imageData.append('image', event.target.files[0])   

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    // const handleAddAdmin =() =>{
    //     alert("Admin Create Successfully");
    // }

    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
                    <h5 className="text-brand">Create New Admin</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <div className="col-6">
                            <input type="text" placeholder="Admin Name" {...register("adminName", { required: true, maxLength: 80 })} className="form-control"/>
                            {errors.adminName && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input type="email" placeholder="Admin Email" {...register("adminEmail", { required: true })} className="form-control"/>
                            {errors.adminEmail && <span className="text-danger">This field is required</span>}
                            <br/>
                            <textarea placeholder="Admin Qualification" {...register("adminQualify", { required: true })} className="form-control"/>
                            {errors.adminQualify && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-6">

                            <input type="text" placeholder="Admin Title" {...register("adminTitle", { required: true })} className="form-control"/>
                            {errors.adminTitle && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input type="file" placeholder="Admin Photo" onChange={handleImageUpload}/>

                        </div>
                        
                        <div className="form-group text-right">
                        <button  type="submit" className="btn-brand-white mt-3 ml-3">Add Class</button>
                        </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;