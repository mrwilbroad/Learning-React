import React from 'react'
import { Field, ErrorMessage} from 'formik';
import ErrorText from '../ErrorText';

const Input = (props) => {

    const {label,name, ...rest} = props;
  return (
    <React.Fragment>
        <label htmlFor={name} className='form-label'>{label}</label>
        <Field type='text' className="form-control form-control-sm" id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={ErrorText}/>
    </React.Fragment>
  )
}

export default Input