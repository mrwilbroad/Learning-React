import React, { useEffect, useState} from 'react';
import Formtemplate from './Formtemplate';
import { Row, Col , Button} from 'react-bootstrap';
import * as Yup from 'yup';
import { Form, Formik,Field, ErrorMessage} from 'formik';
import ErrorTemplate from './ErrorTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { REGISTRATION_ACTION , REGISTRATION_STEP} from '../../Redux/Reducers/MultistepRegReducer/RegistrationSteps';

const FirstStepRegistration = () => {

    // const JOB_APP_STATE = useSelector((state) => state.JOB_APPLICATION_REG);
    const Dispatch = useDispatch();
    const [showToast, setShowToast] = useState({
        show: false,
        title: '',
        message: ""
    })

    
   


    const CloseToast =()=> {
        setShowToast({
            ...showToast,show: false
        })
    }
  
   

    const [FormikValues, setFormikValues] = useState({});

    const RegvalidationSchema = Yup.object({
        Firstname: Yup.string().required("please fill your Firstname")
                    .matches(/^[a-zA-Z]{2,15}$/i,"Accept only a-zA-Z character only"),
        Middlename: Yup.string().required("please fill your Midlename")
                    .matches(/^[a-zA-Z]{2,15}$/i,"Accept only a-zA-Z character only"),
        Lastname: Yup.string().required("please fill your Lastname")
                    .matches(/^[a-zA-Z]{2,15}$/i,"Accept only a-zA-Z character only"),
        PhoneNumber: Yup.string().required("please fill your phone number")
                    .matches(/^\([1-9]{3}\)[1-9]{3}\-[1-9]{3}\-[1-9]{3}$/i,"Accept (123)626-195-167 Format"),
        Country: Yup.string().required("please fill your Country")
                    .matches(/^[a-zA-Z0-9\s\'\-]{2,50}$/i,"Accept string"),
        Region: Yup.string().required("please fill your Region")
                    .matches(/^[a-zA-Z0-9\s\'\-]{2,50}$/i,"Accept string"),
        Street: Yup.string().required("please fill your Street")
                    .matches(/^[a-zA-Z0-9\s\'\-]{2,50}$/i,"Accept string"),
        EmailAddress: Yup.string().required("please fill your Email Address")
                    .email("Fill valid Email Address"),
        ZipCode: Yup.string().required("please fill your zip-code")
                    .matches(/^[1-9]{4}$/i,"Accept Four Digits"),
     
        Language: Yup.mixed()
                     .required("please fill your Language")
                    .oneOf(['Swahil','English'],"Please select valid Language"),
    
    })

    const initialValues = {
        Firstname: "",
        Middlename: "",
        Lastname: "",
        EmailAddress: "",
        PhoneNumber: "",
        Country: "",
        Region: "",
        Street: "",
        ZipCode: "",
        Language: ""
    }

    const HandleSubmit = (values, onSubmitprops)=> {
        // onSubmitprops.isSubmitting(false);
        Dispatch(REGISTRATION_ACTION.EXECUTE_ACTION(REGISTRATION_STEP.FIRST_STEP,values));
        setShowToast({
            show: true,
            title: "First step Notification",
            message: "First step successfull completed" 
        })
        onSubmitprops.setSubmitting(false);
        onSubmitprops.resetForm();
    }

return (
<Formtemplate toast={showToast} CloseToast={CloseToast} title="Personal Information">
<Formik
initialValues={initialValues}
onSubmit={HandleSubmit}
validationSchema={RegvalidationSchema}
enableReinitialize
>
    {
        (formik)=> {
         

        return (
            <Form className='form'>
                <Row className="justify-content-start gy-2  ">
           

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-firstname' 
                                className='form-label'>First name</label>
                                <Field type="text"
                                id="f-firstname"
                                name="Firstname"
                               
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Firstname' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-middlename' 
                                className='form-label'>Middle name</label>
                                <Field type="text"
                                id="f-middlename"
                                name="Middlename"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Middlename' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-lastname' 
                                className='form-label'>Lastname</label>
                                <Field type="text"
                                id="f-lastname"
                                name="Lastname"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Lastname' 
                                component={ErrorTemplate}/>
                            </Col>


                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-EmailAddress' 
                                className='form-label'>Email Address</label>
                                <Field type="text"
                                id="f-EmailAddress"
                                name="EmailAddress"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='EmailAddress' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-phoneNumber' 
                                className='form-label'>Phone Number</label>
                                <Field type="text"
                                id="f-phoneNumber"
                                name="PhoneNumber"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='PhoneNumber' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-language' 
                                className='form-label'>Fluent Language</label>
                                <Field
                                id="f-language"
                                as="select"
                                name="Language"
                                className="form-select form-select-sm">
                                    <option value='0'>Choose Fluent language</option>
                                    <option value="English">English</option>
                                    <option value="Swahil">Swahil</option>
                                </Field>
                                
                                <ErrorMessage name='Language' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-Country' 
                                className='form-label'>Country</label>
                                <Field type="text"
                                id="f-Country"
                                name="Country"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Country' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-Region' 
                                className='form-label'>Region</label>
                                <Field type="text"
                                id="f-Region"
                                name="Region"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Region' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-Street' 
                                className='form-label'>Street</label>
                                <Field type="text"
                                id="f-Street"
                                name="Street"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Street' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={1} md={6} sm={10}>
                                <label htmlFor='f-zipcode' 
                                className='form-label'>ZipCode</label>
                                <Field type="text"
                                id="f-zipcode"
                                name="ZipCode"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='ZipCode' 
                                component={ErrorTemplate}/>
                            </Col>


                            <Col lg={12} md={12} sm={12} className="text-end mt-auto">
                                <Button disabled={(!formik.isValid)}
                                 variant="success" size="sm" type="submit">
                                    Next Step
                                </Button>

                                <Button type='reset'
                                 variant="danger" size="sm">
                                    Reset
                                </Button>
                            </Col>

                </Row>
            </Form>
        )
        }
    }
</Formik>
</Formtemplate>
)
}

export default FirstStepRegistration