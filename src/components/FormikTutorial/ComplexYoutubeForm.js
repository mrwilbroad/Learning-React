import React from 'react'
import {  Stack, Button} from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField} from 'formik';
import * as Yup from 'yup';
import ErrorText from './ErrorText';

const validateProfile = value => {
   let error;
    if(!/^[a-zA-Z]{4,60}$/.test(value))
    {
      error = "Profile description must contain a-z A-Z character without space"
    }

    return error;
}

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
                     .matches(/^(true)$/i,'Accept condition')
                    .required("Accept our privacy and condition"),
          age: Yup.number().required("Fill your Age")
                            .positive("Age must be positive number only")
                            .min(18,'Age must be above 18 Years'),
          birthday: Yup.date("Birthday must be valid date")
                      .required("Fill your Birthday"),
          address: Yup.string().required("Address is required")
                            .matches(/^[a-zA-Z0-9\@\-\/\.\s]{1,30}$/i,"Invalid Address name"),
        // comments: Yup.string().required("Type comment for your Channel")
        //                        .matches(/^[a-zA-Z0-9\@\-\.\s]{1,90}$/i,'Invalid Comment ...')
                               
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
                        comment: '',
                        priority: [''],
                        social: {
                            facebook: '',
                            twitter: ''
                        },
                        PhoneNumbers: ['']
                      }

      const onSubmitHandler = (values, onSubmitprops) => {
        onSubmitprops.setSubmitting(false);
        console.log("submitted values :", values)
        console.log('submitting porps ', onSubmitprops);
      }



const ComplexYoutubeForm = () => {
    


  return (
    <Formik
      initialValues={InitialFormvalue}
      validationSchema={validationSchemaForm}
      // validateOnChange={false}
      // validateOnMount={true  }
      validateOnBlur={false}
      onSubmit={onSubmitHandler}>
        {
          (formik)=> {
          
            return (
              <Form className='mx-auto col-lg-4 col-md-5 col-sm-10' >
              <h4 className='text-warning fw-bold'>Complex Youtube Form</h4>
              <Stack gap={4}>
      
                    <section>
                      <label className='form-label' htmlFor='y-name'>Name</label>
                      <Field
                      className='form-control form-control-sm'
                      type='text'
                      id="y-name" 
                      name='name'/>
                          <ErrorMessage name='name' component={ErrorText}/>
                    </section>
      
                    <section>
                    <label className='form-label' htmlFor='y-email'>E-Mail</label>
                      <Field
                      className="form-control form-control-sm"
                      id='y-email' 
                      name='email' 
                      type="text" 
                      placeholder="Email-address" />
                          <ErrorMessage name='email' component={ErrorText}/>
                    </section>
      
      
                    <section>
                    <label className='form-label' htmlFor='y-comment'>Comments</label>
                      <Field
                      className="form-control form-control-sm"
                      id='y-comment' 
                      name='comment' 
                      type="text" 
                      as='textarea'
                      placeholder="Type coment here" validate={validateProfile}/>
                          <ErrorMessage name='comment' component={ErrorText}/>
                    </section>
      
                    <section>
                    <label className='form-label'>Priority Level</label>
                    <section className='form-check'>
                          <Field 
                          name='priority' 
                          id='y-levelone'
                          value='Level-One'
                          type='checkbox'
                          className='form-check-input'/>
                          <label 
                          htmlFor='y-levelone'
                          className='form-check-label'>Level One</label>
                    </section>
      
                    <section className='form-check'>
                          <Field name='priority' 
                          id='y-leveltwo' 
                          type='checkbox'
                          className='form-check-input'/>
                          <label htmlFor='y-leveltwo'
                          className='form-check-label'>Level two</label>
                    </section>
      
      
                    <section className='form-check'>
                          <Field name='priority' 
                          id='y-levelthree' 
                          type='checkbox'
                          className='form-check-input'/>
                          <label htmlFor='y-levelthree'
                          className='form-check-label'>Level Three</label>
                    </section>
                          <ErrorMessage name='priority' component={ErrorText}/>
                    </section>
                    
                    <section>
                    <label className='form-label' htmlFor='y-channel'>Channel</label>
                      <Field 
                      className="form-control form-control-sm"
                      id='y-channel' 
                      name='channel' 
                      type="text" 
                      placeholder="Channel" />
                          <ErrorMessage name='channel' component={ErrorText}/>
                    </section>
      
                    <section>
                    <label className='form-label' htmlFor='y-birthday'>Birthday</label>
                      <Field
                      className="form-control form-control-sm"
                      id='y-birthday' 
                      name='birthday' type="date"  />
                          <ErrorMessage name='birthday' component={ErrorText}/>
                    </section>
      
                    <section>
                    <label className='form-label' htmlFor='y-age'>Age</label>
                      <Field
                      className="form-control form-control-sm"
                      id='y-age' 
                      name='age' 
                      type="text" />
                         <ErrorMessage name='age' component={ErrorText}/>
                    </section>
      
                    <section>
                      <label className='form-label'>Phone Number</label>
                      <FieldArray name="PhoneNumbers">
                          {
                              (FieldArrayProps)=> {
                                
                                  const { push, remove, form} = FieldArrayProps;
                                  // console.log('Form Erros', form.errors);
                                  const { values} = form;
                                  const { PhoneNumbers } = values;
                                  return <section>
                                      {
                                          PhoneNumbers.map((phone, index)=> (
                                           
                                                 <section key={index}
                                                 className='input-group my-2 input-group-sm'>
                                                 <Field
                                                 type='text'
                                                  className='form-control form-control-sm'
                                                  placeholder={`Enter ${index+1} Phone number`}
                                                  name={`PhoneNumbers[${index}]`}/>
                                                  <Button
                                                  onClick={()=> push('')}
                                                  variant="success" 
                                                  size="sm">+</Button>
                                                
                                                 { 
                                                 index > 0 &&
                                                 <Button
                                                  onClick={()=> remove(index)}
                                                  variant="danger" 
                                                  size="sm">-</Button>
                                                  }
                                                 </section>
                                               
                                          
                                          ))
                                      }
                                  </section>
                              }
                          }
                      </FieldArray>
                    </section>
      
      
                    <section>
                    <label className='form-label' htmlFor='y-address'>Address</label>
                      <FastField
                      name='address'>
                        {
                          (props)=> {
                            // console.log("Rendered Props from FastField ", props)
                            const { field, form , meta} = props;
                            return (
                            <section>
                              <input type='text'
                            className="form-control form-control-sm"
                            id='y-address' {...field } />
      
                           {
                              meta.touched && meta.error?
                              <small className='text-danger'>
                                     {meta.error}
                              </small>
      
                               : null
                           }
                            </section>
                            )
                          }
                        }
                      </FastField>
                        
                    </section>
      
      
                    <section>
                      <section>
                          <label className='form-label' htmlFor='y-facebook'>Facebook profile</label>
                          <Field 
                          className="form-control form-control-sm"
                          id='y-facebook'
                          name='social.facebook' 
                          type="text" 
                          placeholder="Facebook profile" />
                          <ErrorMessage name='social' component={ErrorText}/>
                      </section>
      
                      <section className='mt-2'>
                          <label className='form-label' htmlFor='y-twitter'>Twitter profile</label>
                          <Field 
                          className="form-control form-control-sm"
                          id='y-twitter'
                          name='social.twitter' 
                          type="text" 
                          placeholder="twitter profile" />
                          <ErrorMessage name='social' component={ErrorText}/>
                      </section>
                    </section>
      
      
                    <section className='form-check'>
                          <Field
                          name="terms"
                          type="checkbox"
                          className="form-check-input"/>
                          <label className='form-check-label'>Accept condition and our privacy</label>
                          <ErrorMessage name='terms' component={ErrorText}/>
                    </section>
      
                    <section>
                    <Button disabled={(!formik.isValid || formik.isSubmitting)} variant="outline-success" size="sm"  type='submit'>
                      submit
                    </Button>

                    <Button variant="outline-danger" size="sm"  type='reset'>
                      Reset
                    </Button>
                    </section>
              </Stack>
            </Form>
            )
          }
        }
    </Formik>
  )
}

export default ComplexYoutubeForm