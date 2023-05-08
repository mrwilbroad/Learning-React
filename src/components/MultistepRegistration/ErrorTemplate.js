import React from 'react'

const ErrorTemplate = (props) => {

  return (
    <small className='text-danger'>
        { props.children }
    </small>
  )
}

export default ErrorTemplate