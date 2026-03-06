import React, { useState } from "react";
import "./Form.css";

function Account({formData,setformData,nextStep,prevStep}){
    const [error,setError]=useState("");

    function handleChange(e){
        const{name,value}=e.target;

        setformData({
            ...formData,
            [name]:value
        });
    };
    function handleNext(){
        const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if(!formData.username || !formData.password){
            setError("Please enter the required field");
            return;
        }
        if(!passwordRegex.test(formData.password)){
            setError("Password must contain letters and numbers and be at least 6 characters");
            return;
        }
        setError("");
        nextStep();
    }
    function handlePrevious(){
        prevStep();
    }

    return (
        <div className="form-container">
            <h2 className="personal">Account Details</h2>
            <p className="error-message">{error}</p>
            <div className="form-box">
                <label className="labelname">Username</label>
                <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="inputname"
                 />
            </div>

            <div className="form-box">
                <label className="labelname">Password</label>
                <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="inputname"
                />
            </div>

            <button className="buttonbox" onClick={handlePrevious}>Back</button>
            <button className="buttonbox" onClick={handleNext}>Next</button>

        </div>
    )
}


export default Account;