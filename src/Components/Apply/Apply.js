import React from 'react';
import NavbarLogin from '../Shared/NavbarLogin/NavbarLogin';
import NavbarMenu from '../Shared/NavbarMenu/NavbarMenu';
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer/Footer';

const Apply = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        const eventData = {
            yourName : data.yourName,
            yourEmail : data.yourEmail,
            yourEdu: data.yourEdu,
            yourMessage: data.yourMessage,
        };
        const url = `https://agile-gorge-02356.herokuapp.com/sendApply`
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => {
            console.log('server side response', res)

            alert('Your form submitted to the admin Successfully')
        })
    };


    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <NavbarMenu></NavbarMenu>
            <h3 style={{ color: "tomato" }} className="text-center "> Send Message </h3>

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "rgb(255 252 231)" }}>
            <h5 className="text-brand"> Send a Message to the Admin </h5>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <div className="col-8" style={{}}>
                        <input type="text" placeholder="Your Name" {...register("yourName", { required: true, maxLength: 80 })} className="form-control" />
                        {errors.yourName && <span className="text-danger">This field is required</span>}
                        <br />

                        <input type="email" placeholder="Your Email" {...register("yourEmail", { required: true })} className="form-control" />
                        {errors.yourEmail && <span className="text-danger">This field is required</span>}
                        <br />

                        <input type="text" placeholder="Your Qualification" {...register("yourEdu", { required: true})} className="form-control" />
                        {errors.yourEdu && <span className="text-danger">This field is required</span>}
                        <br />

                        <textarea placeholder="Your Message" {...register("yourMessage", { required: true })} className="form-control" />
                        {errors.yourMessage && <span className="text-danger">This field is required</span>}

                    <div className="form-group text-right">
                        <button type="submit" className="btn-brand-white mt-3 ml-3">Add Class</button>
                    </div>
                    </div>

                </div>
            </form>

            </div>
        </div>
    );
};

export default Apply;