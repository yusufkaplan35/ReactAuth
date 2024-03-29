import React from 'react'
import LoginForm from '../components/login/login-form'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <Container className="mt-4">
        <LoginForm/>
    </Container>
  )
}

export default LoginPage