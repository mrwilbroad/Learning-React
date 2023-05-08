import React from 'react'
import { Field, ErrorMessage} from 'formik';
import ErrorText from './ErrorText';

const Input = (props) => {

    const {label,name, ...rest} = props;
  return (
    <section>
        <label htmlFor={name} className='form-label'>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={ErrorText}/>
    </section>
  )
}

export default Input