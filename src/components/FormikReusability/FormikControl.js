import React from 'react'
import Input from './FormInputs/Input';
import TextArea from './FormInputs/TextArea';
import Select from './FormInputs/Select';

const FormikControl = (props) => {

    const {control, ...rest} = props;


    switch (control) {
        case 'input':
            return <Input {...rest} />

        case 'select':
            return <Select {...rest}/>
    
        case 'date':
            break;

        case 'textarea':
            return <TextArea {...rest}/>;
    
        case 'checkbox':
            break;

        case 'radio':
                break;
    
        default:
            return null;
    }

  
}

export default FormikControl