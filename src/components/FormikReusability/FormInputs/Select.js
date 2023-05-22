import React from 'react'
import { Field, ErrorMessage } from 'formik';
import ErrorText from '../ErrorText';

const Select = (props) => {

    const {label , name , options, ...rest} = props;

  return (
    <React.Fragment>
        <label htmlFor={name} className='form-label'>{label}</label>
        <Field as='select' className="form-select form-select-sm" id={name} name={name} {...rest}>
            {
                options.map(option=> {
                    return (
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={ErrorText}/>
    </React.Fragment>
  )
}

export default Select