import React, { useEffect } from 'react';
import { Card, ToastContainer , Toast} from 'react-bootstrap';

const Formtemplate = (props) => {

  
  return (
     <section className='container'>
      <ToastContainer position="top-end">
         {
          props.toast && 
          <Toast bg="success" show={props.toast.show} autohide onClose={props.CloseToast}>
          <Toast.Header>
            <strong className="mr-auto">{props.toast.title}</strong>
            <small className='ms-auto'>1 seconds ago</small>
          </Toast.Header>
          <Toast.Body>{props.toast.message}</Toast.Body>
        </Toast>
         }
      </ToastContainer>
       <Card className='mt-4'>
           <Card.Body>
                 <Card.Title as="h5" className='fw-bold pb-0'>Software Engineering Job Application</Card.Title>
                 <Card.Subtitle as="h6">{ props.title }</Card.Subtitle>
                 <hr className='mt-1'/>
                 { props.children }
           </Card.Body>
       </Card>
       </section>
  )
}

export default Formtemplate