import React from 'react';
import './formBtn.css';

const FormBtn = (props) => {
    return(
        <button className='custom-button' onClick={ props.handleRequest }>
            { props.children }
        </button>
    )
}

export default FormBtn;