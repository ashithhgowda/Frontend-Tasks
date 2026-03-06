import React, { useState, useEffect } from "react";

function Review({formData,prevStep}){
    const [loading,setLoading]=useState(false);
    const [success,setSuccess]=useState(false);

    function handleSubmit(){
        setLoading(true);
    }

    useEffect(()=>{
        if(loading){
            const timer = setTimeout(()=>{
                setLoading(false);
                setSuccess(true);
            },2000);

            return ()=>clearTimeout(timer);
        }
    },[loading]);

    if(success){
        return <h2>Registration Successful</h2>;
    }

    if(loading){
        return <h2>Submitting...</h2>;
    }

    return (
        <div className="form-container">
            <h2 className="personal">Review Account</h2>
            <table className="review-table">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{formData.name}</td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>{formData.email}</td>
                    </tr>

                    <tr>
                        <td>Username</td>
                        <td>{formData.username}</td>
                    </tr>

                    <tr>
                        <td>Password</td>
                        <td>{formData.password}</td>
                    </tr>
                </tbody>
            </table>

            <button className="buttonbox" onClick={prevStep}>Back</button>
            <button className="buttonbox" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;