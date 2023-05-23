import React from 'react'
import { Card, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NagivaTable = () => {

  return (
    <Card className='m-5'>
    <Nav variant="tabs">

     <Nav.Item>
         <NavLink to='/' className='nav-link text-dark'>
          Home 
         </NavLink>
     </Nav.Item>

     <Nav.Item>
         <NavLink to='/table-tutorial' className='nav-link text-dark'>
           React Table 
         </NavLink>
     </Nav.Item>
     <Nav.Item>
         <NavLink to='/table-sorting' className='nav-link text-dark'>
           Sorting Table 
         </NavLink>
     </Nav.Item>

     <Nav.Item>
         <NavLink to='/table-fitering' className='nav-link text-dark'>
           Filtering(Global) Table 
         </NavLink>
     </Nav.Item>
     

    
    </Nav>
    </Card>
  )
}

export default NagivaTable