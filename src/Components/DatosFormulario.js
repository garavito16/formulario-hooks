
import React from "react";
import './DatosFormulario.css'

const DatosFormulario = (props) => {

    const {firstName,lastName,email,password,confirmPassword} = props.datos;

    return (
        <div>
            <div className="results">Results</div>
            <div className="grupoForm">
                <label>First Name: </label>
                <label>{firstName}</label>
            </div>
            <div className="grupoForm">
                <label>Last Name: </label>
                <label>{lastName} </label>
            </div>
            <div className="grupoForm">
                <label>Email: </label>
                <label>{email} </label>
            </div>
            <div className="grupoForm">
                <label>Password: </label>
                <label>{password} </label>
            </div>
            <div className="grupoForm">
                <label>Confirm password: </label>
                <label>{confirmPassword} </label>
            </div>
        </div>
    )

}

export default DatosFormulario;