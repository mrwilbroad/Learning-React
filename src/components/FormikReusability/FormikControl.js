import React from 'react'
import Input from './Input';

const FormikControl = (props) => {

    const {control, ...rest} = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />

        case 'select':
            break;
    
        case 'date':
            break;

        case 'textarea':
            break;
    
        case 'checkbox':
            break;

        case 'radio':
                break;
    
        default:
            return null;
    }

  
}

export default FormikControl