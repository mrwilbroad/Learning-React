import React from 'react'

const ErrorText = (props) => {

  return (
    <small className='text-danger'>
        {props.children}
    </small>
  )
  
}

export default ErrorText