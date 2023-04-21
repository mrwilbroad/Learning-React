import React, { useEffect, useState } from 'react'
import { Container, Card, Button , Badge, Row, Col, Form, InputGroup} from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux';
import { CakeType } from '../../Redux/Reducers/CakeReducer/CakeType';
import { IceCreamType } from '../../Redux/Reducers/IceCreamReducer/IceCreamType';

const CakeComponent = () => {

    const {ClientCakeChoosen,numofCake} = useSelector((state) => state.CAKE_STATE);
    const {ClientIceCreamChosen,numOfIceCream} = useSelector((state) => state.ICECREAM_STATE);
    const Dispatch = useDispatch();

  
    const [counterBuyer, setCounterBuyer] = useState({
        numofCakes: '',
        numOfIceCream:''
    })

   const HandleOnChangeHandler = (e)=> {
         setCounterBuyer({
            ...counterBuyer,
            [e.target.name]: e.target.value
         })
   }

   const BuyIceCreamHandler = (e)=>{
    e.preventDefault();
         const IceCream = Number(counterBuyer.numOfIceCream ? counterBuyer.numOfIceCream: 1);
         Dispatch(IceCreamType.BUY_ICECREAM(IceCream))
         counterBuyer.numOfIceCream = '';
   }

   const BuyCakesHandler = (e)=>{
    e.preventDefault();
         const CakesNo = Number(counterBuyer.numofCakes ? counterBuyer.numofCakes: 1);
         Dispatch(CakeType.BUY_CAKE(CakesNo))
         counterBuyer.numofCakes = '';
   }

  return (
    <Container >
              <Row>
                  <Col>
                  <Card className=' p-2'>
                <Card.Body className='text-center border border-3 rounded border-primary'>
                    <p className='text-end'>
                    <Badge bg="primary" >{ClientCakeChoosen} Choosen Cakes</Badge>
                    </p>
                    <Card.Title className='text-center'>CAKE REDUCER COMPONENT</Card.Title>
                    <Card.Title as='h4' className='my-3'>
                        Total Cakes Available <strong className='text-danger'>{numofCake}</strong>
                    </Card.Title>
                    <Form className='my-3' onSubmit={BuyCakesHandler}>
                      <InputGroup size='sm'>
                      <InputGroup.Text>Number of IceCream</InputGroup.Text>
                      <Form.Control 
                      value={counterBuyer.numofCakes} 
                      name='numofCakes'
                      onChange={(e)=> HandleOnChangeHandler(e)} 
                      type="number" 
                      size="sm" 
                      placeholder="Cakes" />
                      <Button type='submit'  variant="dark" size="sm">
                        buy-cakes
                     </Button>
                      </InputGroup> 
                    </Form>
                </Card.Body>
              </Card>
                  </Col>


                  <Col>
                  <Card className=' p-2'>
                <Card.Body className='text-center border border-3 rounded border-success'>
                    <p className='text-end'>
                    <Badge bg="success" >{ClientIceCreamChosen} Choosen ICECREAM</Badge>
                    </p>
                    <Card.Title className='text-center'>ICECREAM REDUCER COMPONENT</Card.Title>
                    <Card.Title as='h4' className='my-3'>
                        Total ICECREAM Available <strong className='text-danger'>{numOfIceCream}</strong>
                    </Card.Title>
                    <Form className='my-3' onSubmit={BuyIceCreamHandler}>
                      <InputGroup size='sm'>
                      <InputGroup.Text>Number of IceCream</InputGroup.Text>
                      <Form.Control 
                      value={counterBuyer.numOfIceCream} 
                      name='numOfIceCream'
                      onChange={(e)=> HandleOnChangeHandler(e)} 
                      type="number" 
                      size="sm" 
                      placeholder="Icecream" />
                      <Button type='submit'  variant="dark" size="sm">
                        buy-icecream
                     </Button>
                      </InputGroup> 
                    </Form>
                     
                </Card.Body>
              </Card>
                  </Col>
              </Row>


             
    </Container>
  )
}

export default CakeComponent