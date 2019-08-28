import React from 'react';

import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) =>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            // Ternary expression to check if a lable is needed if not to not gen one.
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label> `}>{label}</label>)
            : null
        }
    </div>
)

export default FormInput;