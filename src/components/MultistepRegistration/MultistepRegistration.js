import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const FirstStepRegistration = () => {



  return (
    <Container fluid>
       <Nav variant="tabs">
       <Nav.Item>
              <NavLink className="nav-link" to="/">Home</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className="nav-link" to="/Registration/First-step">First-step</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className="nav-link" to="/Registration/Second-Step">Second step</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className="nav-link" to="/Third-step">Third-step</NavLink>
          </Nav.Item>

          <Nav.Item>
              <NavLink className="nav-link" to="Fourth-step">Fourth step</NavLink>
          </Nav.Item>
       </Nav>


       <Outlet/>
      
    </Container>
  )
}

export default FirstStepRegistration