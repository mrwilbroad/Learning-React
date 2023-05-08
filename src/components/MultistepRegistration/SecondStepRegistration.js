import React, { useEffect, useState} from 'react';
import Formtemplate from './Formtemplate';
import { Row, Col , Button} from 'react-bootstrap';
import * as Yup from 'yup';
import { Form, Formik,Field,FieldArray, ErrorMessage} from 'formik';
import ErrorTemplate from './ErrorTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { REGISTRATION_ACTION , REGISTRATION_STEP} from '../../Redux/Reducers/MultistepRegReducer/RegistrationSteps';

const SecondStepRegistration = () => {

    const JOB_APP_STATE = useSelector((state) => state.JOB_APPLICATION_REG);
    // const SECOND_STEP = JOB_APP_STATE.RegistrationFormData.SECOND_STEP;
    const Dispatch = useDispatch();
    const [showToast, setShowToast] = useState({
        show: false,
        title: '',
        message: ""
    })

    const initialValues= {
        courseWorkName: [''],
            GPA: "",
            DegreeProgram: "",
            GraduationDate: "",
            Programminglanuage:"",
            InstitutionName: "",
            HighestLevel: "",
            projectAgree: '',
            ProjectDescription: ''
    }


    const CloseToast =()=> {
        setShowToast({
            ...showToast,show: false
        })
    }
    const RegvalidationSchema = Yup.object({

        courseWorkName: Yup.array()
                     .required("please fill your Coursework name")
                     .of(
                        Yup.object().shape({
                            name: Yup.string()
                            .required("Type Coursename for this field")
                            .matches(/^[a-z\s]{2,20}$/i,"courwork name accept lowercase character and space only")
                        })
                     )
                    .min(1,"Atleast one coursework is required")
                    .max(3,"Not more than Four course work name"),
      
                 
        GPA: Yup.string().required("please fill your GPA"),

        DegreeProgram: Yup.string().required("please fill your Degree program")
                    .matches(/^[a-zA-Z0-9\s\'\-]{2,50}$/i,"Accept string"),

        Programminglanuage: Yup.string().required("please fill your Degree programing language")
                    .matches(/^([a-zA-Z\s]{2,15}\,?){1,10}$/i,"Differentiet by , symbol"),

        InstitutionName: Yup.string().required("please fill your Institution name")
                    .matches(/^[a-zA-Z0-9\s\'\-]{2,50}$/i,"Accept string"),
     
        HighestLevel: Yup.mixed()
                     .required("please fill your Histest Level of Education"),
        GraduationDate: Yup.date()
                         .required("Graduation date is required"),
        projectAgree: Yup.boolean().nullable(),
        ProjectDescription: Yup.string()
                                .required("Type project description")
                                .max(200,"Too long Project description")
            
        
    
    })

    const HandleSubmit = (values, onSubmitprops)=> {
        Dispatch(REGISTRATION_ACTION.EXECUTE_ACTION(REGISTRATION_STEP.SECOND_STEP,values));
        setShowToast({
            show: true,
            title: "Second step Notification",
            message: "Second step successfull completed" 
        })
        onSubmitprops.setSubmitting(false);
        onSubmitprops.resetForm();
    }

return (
<Formtemplate title="Education Information" toast={showToast} CloseToast={CloseToast}>

    
<Formik
initialValues={initialValues}
onSubmit={HandleSubmit}
validationSchema={RegvalidationSchema}
>
    {
        (formik)=> {
      

        return (
            <Form className='form' id='Registration'>
                <Row className="justify-content-start gy-2  ">
           

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-education' 
                                className='form-label'>Highest Level of Education</label>
                                <Field
                                
                                id="f-education"
                                as="select"
                                name="HighestLevel"
                                className="form-select form-select-sm">
                                    <option value='0'>Diploma</option>
                                    <option value="bachelor">Bachelor Degree</option>
                                    <option value="Post-Graduate-Diploma">Post Graduate Diploma</option>
                                    <option value="Master-degree">Master Degree</option>
                                    <option value="Doctoral-degree">Doctoral Degree</option>
                                </Field>
                                
                                <ErrorMessage name='HighestLevel' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-institution' 
                                className='form-label'>Name of Institution</label>
                                <Field type="text"
                                id="f-institution"
                                name="InstitutionName"
                                className="form-control  form-control-sm"/>
                                
                                <ErrorMessage name='InstitutionName' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-degreeprogram' 
                                className='form-label'>Degree program</label>
                                <Field type="text"
                                id="f-degreeprogram"
                                name="DegreeProgram"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='DegreeProgram' 
                                component={ErrorTemplate}/>
                            </Col>


                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-GraduationDate' 
                                className='form-label'>Graduation Date Address</label>
                                <Field type="date"
                                id="f-GraduationDate"
                                name="GraduationDate"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='GraduationDate' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={4} md={6} sm={10}>
                                <label htmlFor='f-gpapoint' 
                                className='form-label'>GPA Point</label>
                                <Field type="text"
                                id="f-gpapoint"
                                name="GPA"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='GPA' 
                                component={ErrorTemplate}/>
                            </Col>

                            

                            <Col lg={4} md={6} sm={10} >
                                <label htmlFor='f-coursework' 
                                className='form-label'>Relevant CourseWork</label>

                        <FieldArray name='courseWorkName'>
                            {
                                (FieldArrayProps)=> {

                                    const { push, remove, form} = FieldArrayProps;
                                    const { values} = form;
                                    
                                    const { courseWorkName} = values;
                                return <section >
                                    
        
                                    {
                                        <section>
                                            <section className='vstack gap-2'>
                                            {
                                            courseWorkName.map((coursework,index) => (
                                            <section key={index}>
                                                <section  
                                            className='input-group input-group-sm'>
                                                <Field
                                                type="text"
                                                placeholder={`Enter ${index+1} coursework name`}
                                                name={`courseWorkName[${index}].name`}
                                                className="form-control"/>


                                                {
                                                    index > 0 &&
                                                    <Button 
                                                onClick={()=> remove(index)}
                                                type='button' 
                                                variant='danger'>-</Button> 
                                                }
                                                </section>
                                                <ErrorMessage 
                                                name={`courseWorkName[${index}].name`}
                                                component={ErrorTemplate}/>
                                            </section>
                                                ))
                                                
                                            }
                                        </section>
                                  
                                       
                                        <Button 
                                        size='sm'
                                        className='mt-1'
                                        type='button'
                                        onClick={() => push('')}
                                        variant='success'>+</Button>
                                            </section>
                                    }

                                </section>
                                    
                                }
                            }
                        </FieldArray>
                                    
                            </Col>

                            <Col lg={6} md={6} sm={10}>
                                <label htmlFor='f-programLang' 
                                className='form-label'>Which programming Language did you Learn during your Degree program?</label>
                                <Field type="text"
                                id="f-programLang"
                                as="textarea"
                                name="Programminglanuage"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='Programminglanuage' 
                                component={ErrorTemplate}/>
                            </Col>

                            <Col lg={6} md={6} sm={10}>
                                <label htmlFor='f-projectDescription' 
                                className='form-label'>Have you completed any coding project as part of your coursework,(If Yes, Provide Details)
                                </label>

                                <Field type="checkbox"
                                className="form-check-input"
                                name="projectAgree"/>
                                <span className='mx-2'>Yes</span>
                                <ErrorMessage name='projectAgree' 
                                component={ErrorTemplate}/>

                                <Field type="text"
                                id="f-projectDescription"
                                as="textarea"
                                placeholder="Project description"
                                name="ProjectDescription"
                                className="form-control form-control-sm"/>
                                
                                <ErrorMessage name='ProjectDescription' 
                                component={ErrorTemplate}/>
                            </Col>

                           


                            <Col lg={12} md={12} sm={12} className="text-end mt-auto">
                                <Button
                                 variant="success" className='mt-3' size="sm" type="submit">
                                    Next Step
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

export default SecondStepRegistration