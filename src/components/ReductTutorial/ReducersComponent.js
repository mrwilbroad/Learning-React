import React from 'react';
import { Container, Card, Nav } from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';


const ReducersComponent = () => {

  return (
    <Container fluid>
          <Card className='m-5'>
               <Nav variant="tabs">
               <Nav.Item>
                    <NavLink to='/' className='nav-link text-dark'>Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to='cake-reducer' className='nav-link text-dark'>Cakes Reducer</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink to='icecream-reducer' className='nav-link text-dark'>Ice-Cream Reducer</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink to='icecream-reducer' className='nav-link text-dark'>Cakes Reducer</NavLink>
                </Nav.Item>
               </Nav>
               </Card>

          <Outlet/>
    </Container>
  )
}

export default ReducersComponent