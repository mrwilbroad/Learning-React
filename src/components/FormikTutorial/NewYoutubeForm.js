import React from 'react'
import {  Stack, Button} from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

      const validationSchemaForm = Yup.object(
        {
          name: Yup.string().required("Name is required")
                            .matches(/^[a-zA-Z0-9\s\']{1,30}$/i,'Invalid name'),
          email: Yup.string()
                    .email("Invalid Email Address")
                    .required("Email address is required"),
          channel: Yup.string()
                      .required("Channel name is required"),
          terms: Yup.string()
                    .required("Accept our privacy and condition"),
          age: Yup.number().required("Fill your Age")
                            .positive("Age must be positive number only")
                            .min(18,'Age must be above 18 Years'),
          birthday: Yup.date("Birthday must be valid date")
                      .required("Fill your Birthday")
                  
        }
      )

      const InitialFormvalue= {
                        name: '',
                        email:'',
                        channel:'',
                        terms: '',
                        birthday: '',
                        age: '',
                        address:'',
                        comments: ''
                      }

      const onSubmitHandler = values => {
        console.log("values :", values)
      }



const NewYoutubeForm = () => {
    


  return (
    <Formik
      initialValues={InitialFormvalue}
      validationSchema={validationSchemaForm}
      onSubmit={onSubmitHandler}> 
      <Form className='mx-auto col-lg-4 col-md-5 col-sm-10' >
        <h4 className='text-info fw-bold'>New Youtube Channel</h4>
        <Stack gap={4}>
              <section>
                <label className='form-label' htmlFor='y-name'>Name</label>
                <Field
                className='form-control form-control-sm'
                type='text'
                id="y-name" 
                name='name'/>
                  <small className='text-danger'>
                    <ErrorMessage name='name'/>
                    </small>
              </section>

              <section>
              <label className='form-label' htmlFor='y-email'>E-Mail</label>
                <Field
                className="form-control form-control-sm"
                id='y-email' 
                name='email' 
                type="text" 
                placeholder="Email-address" />
                   <small className='text-danger'>
                    <ErrorMessage name='email'/>
                    </small>
              </section>


              <section>
              <label className='form-label' htmlFor='y-comment'>Comments</label>
                <Field
                className="form-control form-control-sm"
                id='y-comment' 
                name='comments' 
                type="text" 
                as='textarea'
                placeholder="Type coment here" />
                   <small className='text-danger'>
                    <ErrorMessage name='Comments'/>
                    </small>
              </section>
              

              <section>
              <label className='form-label' htmlFor='y-channel'>Channel</label>
                <Field 
                className="form-control form-control-sm"
                id='y-channel' 
                name='channel' 
                type="text" 
                placeholder="Channel" />
                   <small className='text-danger'>
                    <ErrorMessage name='channel'/>
                    </small>
              </section>

              <section>
              <label className='form-label' htmlFor='y-birthday'>Birthday</label>
                <Field
                className="form-control form-control-sm"
                id='y-birthday' 
                name='birthday' type="date" />
                   <small className='text-danger'>
                    <ErrorMessage name='birthday'/>
                    </small>
              </section>

              <section>
              <label className='form-label' htmlFor='y-age'>Age</label>
                <Field
                className="form-control form-control-sm"
                id='y-age' 
                name='age' 
                type="text" />
                  <small className='text-danger'>
                    <ErrorMessage name='age'/>
                    </small>
              </section>


              <section>
              <label className='form-label' htmlFor='y-address'>Address</label>
                <Field
                name='address'>
                  {
                    (props)=> {
                      console.log("Rendered Props ", props)
                      return <input className="form-control form-control-sm" id='y-address'/>
                    }
                  }
                </Field>
                  <small className='text-danger'>
                    <ErrorMessage name='address'/>
                    </small>
              </section>



              <section className='form-check'>
                    <Field
                    name="terms"
                    type="checkbox"
                    className="form-check-input"/>
                    <label className='form-check-label'>Accept condition and our privacy</label>
                    <small className='text-danger'>
                    <ErrorMessage name='terms'/>
                    </small>
              </section>

              <section>
              <Button variant="outline-success" size="sm"  type='submit'>
                submit
              </Button>
              </section>
        </Stack>
      </Form>
    </Formik>
  )
}

export default NewYoutubeForm