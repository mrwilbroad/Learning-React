import React from 'react'
import { Formik ,Form } from 'formik'
import * as Yup from 'yup'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'
import FormikControl from './FormikControl'


const FormikContainer = () => {

  const dropdownOptions = [
    {key: "Select an option", value:""},
    {key: "option 1", value:"option1"},
    {key: "option 2", value:"option2"},
    {key: "option 3", value:"option3"},
    {key: "option 4", value:"option4"},
    {key: "option 5", value:"option5"},
]

const initialValues = {
  email: "",
  description: "",
  Country: ''
}
const validationSchema = Yup.object({
  email: Yup.string()
            .required("Email Address is required")
            .email("Check your email")
            .max(100,"Too long email address"),
 description: Yup.string().required("Desription is required")
                  .max(200,"Too long description"),
 Country: Yup.string().required("country name is required")
});

const onsubmit = (values,onsubmitProps)=> {
    onsubmitProps.setSubmitting(false);
    console.log('vvalues ', values);
}

  return (
    <Container>
        <Card.Body className='p-3'>
            <Card.Title>Form with Reusability input</Card.Title>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onsubmit}>
                {
                  (formik)=>(
                    <Form method='POST'>
                      <Row>
                        <Col lg={3} md={6} sm={9}>
                          <section className='vstack gap-2'>

                           <section>
                            <FormikControl 
                              control="input"
                              autoComplete="email"
                              label="Email" 
                              name="email"/>
                           </section>

                           <section>
                            <FormikControl 
                              control="textarea"
                              autoComplete="message"
                              label="Description" 
                              name="description"/>
                           </section>

                           <section>
                            <FormikControl 
                              control="select"
                              label="Country name"
                              options={dropdownOptions}
                              name="Country"/>
                           </section>

                           

                             <Button type='submit' variant="success" size="sm">
                              Submit</Button>
                          </section>
                        </Col>
                      </Row>
                       
                    </Form>
                  )
                }
            </Formik>
        </Card.Body>
    </Container>
  )
}

export default FormikContainer