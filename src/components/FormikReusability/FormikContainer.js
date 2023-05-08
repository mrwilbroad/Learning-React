import React from 'react'
import { Formik ,Form } from 'formik'
import * as Yup from 'yup'
import { Button, Row, Col, Card, Container } from 'react-bootstrap'
import FormikControl from './FormikControl'


const FormikContainer = () => {

const initialValues = {
  'email': ""
}
const validationSchema = Yup.object({
  email: Yup.string()
            .required("Email Address is required")
            .email("Check your email")
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
                    <Form>
                      <Row>
                        <Col lg={3}>
                          <section className='vstack gap-2'>

                            <FormikControl 
                            control="input"
                            className="form-control form-control-sm"  
                            type='text'
                            autoComplete="email"
                            label="Email" name="email"/>

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