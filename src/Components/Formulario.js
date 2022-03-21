
import React, {useState} from "react";
import './Formulario.css';

const Formulario = (props) => {

    const {datos,setDatos} = props;
    const [firstNameError,setFirstNameError] = useState("");
    const [lastNameError,setLastNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState("");

    const onChange = (e) => {
        if(e.target.name==='firstName' && e.target.value.length < 2) setFirstNameError("First Name debe tener 2 caracteres como minimo");
        else if(e.target.name==='firstName' && e.target.value.length >= 2) setFirstNameError("");

        if(e.target.name==='lastName' && e.target.value.length < 2) setLastNameError("Last Name debe tener 2 caracteres como minimo");
        else if(e.target.name==='lastName' && e.target.value.length >= 2) setLastNameError("");

        if(e.target.name==='email' && e.target.value.length < 5) setEmailError("Email tener 5 caracteres como minimo");
        else if(e.target.name==='email' && e.target.value.length >= 5) setEmailError("");

        if(e.target.name==='password' && e.target.value.length < 8) setPasswordError("Password tener 8 caracteres como minimo");
        else if(e.target.name==='password' && e.target.value.length >= 8) setPasswordError("");

        if(e.target.name==='confirmPassword' && e.target.value.length < 8) setConfirmPasswordError("Confirm password tener 8 caracteres como minimo");
        else if(e.target.name==='confirmPassword' && e.target.value.length >= 8) {
            if(datos.password !== e.target.value) setConfirmPasswordError("Confirm password debe ser igual a campo password");
            else if(datos.password === e.target.value) setConfirmPasswordError("");
        }
        
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    return ( 
        <form>
            <div className="agrupar">
                <label className="labelForm" htmlFor="firstName">First Name</label>
                <input className="campo" onChange={onChange} type="text" name = "firstName" />
            </div>
            {
                (firstNameError) ?
                <p className="error">{firstNameError}</p> : 
                ""
            }
            <div className="agrupar">
                <label className="labelForm" htmlFor="lastName">Last Name</label>
                <input className="campo" onChange={onChange} type="lastName" name="lastName" />
            </div>
            {
                (lastNameError) ? 
                <p className="error">{lastNameError}</p> :
                ""
            }
            <div className="agrupar">
                <label className="labelForm" htmlFor="email">Email</label>
                <input className="campo" onChange={onChange} type="text" name="email"/>
            </div>
            {
                (emailError) ? 
                <p className="error">{emailError}</p> :
                ""
            }
            <div className="agrupar">
                <label className="labelForm" htmlFor="password">Password</label>
                <input className="campo" onChange={onChange} type="password" name="password" />
            </div>
            {
                (passwordError) ?
                <p className="error">{passwordError}</p> :
                ""
            }
            <div className="agrupar">
                <label className="labelForm" htmlFor="confirmPassword">Confirm password</label>
                <input className="campo" onChange={onChange} type="password" name="confirmPassword" />
            </div>
            {
                (confirmPasswordError) ? 
                <p className="error">{confirmPasswordError}</p> :
                ""
            }
        </form>
    )

}

export default Formulario;