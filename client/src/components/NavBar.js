import React, { useContext } from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'

export const NavBar = observer(()=> {
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE} >BuyDevice</NavLink>
                {user.isAuth ? <Nav className="ml-auto">
                  <Button variant='outline-light' >Control Panel</Button>
                  <Button variant='outline-light' className="mx-2" >Sign out</Button>
                </Nav> :
                <Nav className="ml-auto">
                  <Button variant='outline-light' onClick={()=>user.setIsAuth(true)}>Sign In</Button>
                </Nav> }
            </Container>
        </Navbar>
    )
})