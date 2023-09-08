import React from "react"; 

function OutputRender(details) {

    const {formData} = details;
    console.log(formData);
    /* 
    const {userName, emailId, mobileNumber, massage} = formData ;

    return (
        <div>
            <h3>Dear User Welcome! Please check your details</h3>
            <p>Name : {userName}</p>
            <p>Email : {emailId}</p>
            <p>Mobilenumber : {mobileNumber}</p>
            <p>Meassage : {massage}</p>
        </div>
    ) */
};

export default OutputRender;