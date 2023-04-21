import React from 'react'
import { Container, Card, Button , Badge} from 'react-bootstrap'
// import { Prod}

const CakeComponent = () => {


  return (
    <Container >
              <Card className='mx-auto p-2'>
                <Card.Body className='text-center'>
                    <p className='text-end'>
                    <Badge bg="success" >67 Choosen Cakes</Badge>
                    </p>
                    <Card.Title className='text-center'>CAKE REDUCER COMPONENT</Card.Title>
                    <Card.Title as='h4' className='my-3'>Total Cakes Available 45</Card.Title>
                     <Button type='button'  variant="dark" size="sm">
                        Buy Cake
                     </Button>
                </Card.Body>
              </Card>
    </Container>
  )
}

export default CakeComponent