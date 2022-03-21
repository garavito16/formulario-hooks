
import React from "react";

const DatosFormulario = (props) => {

    const {firstName,lastName,email,password,confirmPassword} = props.datos;

    return (
        <div>
            <div>Results</div>
            <div>
                <label>First Name:</label>
                <label>{firstName}</label>
            </div>
            <div>
                <label>Last Name:</label>
                <label>{lastName} </label>
            </div>
            <div>
                <label>Email:</label>
                <label>{email} </label>
            </div>
            <div>
                <label>Password:</label>
                <label>{password} </label>
            </div>
            <div>
                <label>Confirm password:</label>
                <label>{confirmPassword} </label>
            </div>
        </div>
    )

}

export default DatosFormulario;