import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return(
        <Container 
            className='d-flex justify-content-center align-items-center'
            style = {{height: window.innerHeight-54}}>
                <Card style={{width: 600}} className='p-5' >
                    <h2 className="m-auto">{isLogin ? 'Sign in' : 'Sign Up' }</h2>
                    <Form className="d-flex flex-column" >
                        <Form.Control
                            className="mt-2"
                            placeholder='email'   
                        ></Form.Control>
                        <Form.Control
                            className="mt-2"
                            placeholder='password'   
                        ></Form.Control>
                        <Button
                            variant="outline-success"    
                            className="mt-2"
                        >
                            {isLogin ? 'Sign In' : 'Sign up'}
                        </Button>
                        <Row className='mt-4 m-auto'>
                            { isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div> 
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div> }
                        </Row>
                    </Form>
                </Card>
        </Container>
    )
}

export default Auth