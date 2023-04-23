import React from 'react'
import { Form , Stack, Button} from 'react-bootstrap'
import { useFormik} from 'formik';
import * as Yup from 'yup';


const validate = values => {
    const errors = {}
       if(!values.name)
       {
         errors.name = "Name is required"
       }
       else if(!/^[a-zA-Z0-9\s\']{1,30}$/i.test(values.name)){
        errors.name = "Invalid Name, allow a-z 0-9 only";
       }
       else if(!values.email)
       {
        errors.email = 'Email address is Required'
       }
       else if(!/^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/i.test(values.email)){
        errors.email = 'Invalid Email address'
       }
       else if(!values.channel)
       {
        errors.channel = "Channel name is required"
       }
      else if(values.terms !== true)
       {
     
        errors.terms = "Accept conditions and our policy"
       }
    return errors;
}

const validationSchema = Yup.object(
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

const OldYoutubeForm = () => {
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email:'',
            channel:'',
            terms: '',
            birthday: '',
            age: ''
        },
      validationSchema,
        onSubmit: values=> {
            console.log(values)
        }
       
    })

   

  return (
    <Form className='mx-auto col-lg-4 col-md-5 col-sm-10' onSubmit={formik.handleSubmit}>
      <h4 className='text-danger fw-bold'>Old Youtube Channel</h4>
        <Stack gap={4}>
              <section>
                <Form.Label htmlFor='y-name'>Name</Form.Label>
                <Form.Control 
                id='y-name' 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                value={formik.values.name}
                name='name' type="text" size='sm' placeholder="Name" />
                {
                    formik.touched.name && formik.errors.name? 
                    <small className='text-danger'>{formik.errors.name}</small> : null
                }
              </section>

              <section>
                <Form.Label htmlFor='y-email'>E-mail</Form.Label>
                <Form.Control
                value={formik.values.email}
                onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                id='y-email' 
                name='email' 
                type="text" 
                size='sm' placeholder="Email-address" />
                {
                    formik.touched.email && formik.errors.email? 
                    <small className='text-danger'>{formik.errors.email}</small> : null
                }
              </section>

              <section>
                <Form.Label htmlFor='y-channel'>Channel</Form.Label>
                <Form.Control
                value={formik.values.channel}
                onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                id='y-channel' 
                name='channel' type="text" size='sm' placeholder="Channel" />
                {
                    formik.touched.channel && formik.errors.channel? 
                    <small className='text-danger'>{formik.errors.channel}</small> : null
                }
              </section>

              <section>
                <Form.Label htmlFor='y-birthday'>Birthday</Form.Label>
                <Form.Control
                value={formik.values.birthday}
                onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                id='y-birthday' 
                name='birthday' type="date" size='sm' />
                {
                    formik.touched.birthday && formik.errors.birthday? 
                    <small className='text-danger'>{formik.errors.birthday}</small> : null
                }
              </section>

              <section>
                <Form.Label htmlFor='y-age'>Age</Form.Label>
                <Form.Control
                value={formik.values.age}
                onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                id='y-age' 
                name='age' type="text" size='sm' />
                {
                    formik.touched.age && formik.errors.age? 
                    <small className='text-danger'>{formik.errors.age}</small> : null
                }
              </section>


              <section>
                  <Form.Check 
                  type='checkbox' 
                  value={formik.values.terms} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  label="Accept condition" id="y-accept" name='terms'/>
                   {
                    formik.touched.terms && formik.errors.terms? 
                    <small className='text-danger'>{formik.errors.terms}</small> : null
                }
              </section>

              <section>
              <Button variant="outline-success" size="sm"  type='submit'>
                submit
              </Button>
              </section>
        </Stack>
    </Form>
  )
}

export default OldYoutubeForm