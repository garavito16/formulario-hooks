
import React, {useState} from "react";

import Formulario from "./Formulario";
import DatosFormulario from "./DatosFormulario";

const Wrapper = () => {

    const [datos,setDatos] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    });

    return (
        <div>
            <Formulario datos={datos} setDatos={setDatos}/>
            <DatosFormulario datos={datos} setDatos={setDatos}/>
        </div>
    )
}

export default Wrapper;