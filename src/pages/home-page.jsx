import React from 'react'
import Counter from '../components/counter/counter'
import { Container } from 'react-bootstrap'
import SayHello from '../components/hello/sayhello'

const HomePage = () => {
   
  return (
    <Container className="mt-4">

        <SayHello/>


        <Counter/>

    </Container>
  )
}

export default HomePage