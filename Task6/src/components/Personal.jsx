import React, { useState } from "react";
import "./Form.css";

function Personal({formData,setformData,nextStep}){

    const [error,setError]=useState("")

    function handleChange(e){
        const{name,value}=e.target;

        setformData({
            ...formData,
            [name]:value
        });
    };
    function handleNext(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!formData.name||!formData.email){
            setError("Please enter the required field");
            return
        }
        if(!emailRegex.test(formData.email)){
            setError("Email Incorrect");
            return
        }
        setError("")
        nextStep();
    }
    return(
        <div className="form-container">
            <h2 className="personal">Peronal Information</h2>
            <p className="error-message">{error}</p>
            <div className="form-box">
                <label className="labelname">Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="inputname"
                    />
            </div>
            <div className="form-box">
                <label className="labelname">Email</label>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="inputname"
                    />
            </div>
            <button className="buttonbox" onClick={handleNext}>Next</button>
        </div>
    );
}

export default Personal;