import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const GlobalFiltering = (props) => {
        const { filter, setFilter} = props;
  return (
    <section className='col-lg-4 my-3'>
    <InputGroup as="span" className='input-group-sm'>
        <Form.Label className='mx-2'>Search</Form.Label>
        <Form.Control type="text"
        onChange={e=>setFilter(e.target.value.toLocaleLowerCase())}
        value={filter} placeholder="search" />
    </InputGroup>
    </section>
  )
}

export default GlobalFiltering