import React from 'react'
import { Container, Card, Navbar, Nav, Form, Button, InputGroup } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';

const FormikHome = () => {

  return (
    <Container fluid className='p-0'>

            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand  href='/' className='ms-2'>mrwilbroad</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse-id" />
                
                <Navbar.Collapse id="navbar-collapse-id">
                    <Nav className="ms-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/Formik-Tutorial' className='nav-link'>Formik-Tutorial</NavLink>
                        <NavLink to='youtube-form' className='nav-link'>Youtube-Form</NavLink>
                        <NavLink to='oldYoutube-form' className='nav-link'>Old-Youtube-Form</NavLink>
                        <NavLink to='complexyoutube-form' className='nav-link'>Complex-Youtube-Form</NavLink>
                    </Nav>

                    <Form>
                        <InputGroup size='sm'>
                            <Form.Control type="search" placeholder="Placeholder text" />
                            <Button type='submit' variant="success">search</Button>
                        </InputGroup>
                    </Form>
        
                </Navbar.Collapse>
                
            </Navbar>
    


        

         <Container className='p-3'>
         <Card>
            <Card.Body>
                <Outlet/>
            </Card.Body>
         </Card>
         </Container>
    </Container>
  )
}

export default FormikHome