import React, { Component } from 'react';
import { Container, Nav, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ReducersComponent from './ReductTutorial/ReducersComponent';

class HomeComponent extends Component {

  render() {

    return (
      <Container className='m-0 p-0' fluid>
               <Card className='m-5'>
               <Nav variant="tabs">

                <Nav.Item>
                    <NavLink to='/reducer-component' className='nav-link text-dark'>Reducer Component</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to='/Formik-Tutorial' className='nav-link text-dark'>Formik-Tutorial</NavLink>
                </Nav.Item>
                

               
               </Nav>
               </Card>

      </Container>
    )
  }
}

export default HomeComponent