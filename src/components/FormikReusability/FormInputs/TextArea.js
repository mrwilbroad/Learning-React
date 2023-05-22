import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from '../ErrorText'

const TextArea = (props) => {

    const {label, name , ...rest} = props

  return (
    <React.Fragment>
        <label htmlFor={name} className='form-label'>{ label }</label>
        <Field name={name} as='textarea' className='form-control' id={name}/>
        <ErrorMessage name={name}  component={ErrorText}/>
    </React.Fragment>
  )
}

export default TextArea