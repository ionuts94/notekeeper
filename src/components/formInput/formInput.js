import React from 'react';
import './formInput.css';


const FormInput = ({id, name, type, label, handleChange}) => {
    return(
        <div className="formInputContainer">
            <div className="groupControls">
                <input id={id} type={type} name={name} placeholder=" " onChange={ handleChange } />
                <label className="labelForInput" htmlFor={id}>{ label }</label>
            </div>
        </div>
    )
}

export default FormInput;