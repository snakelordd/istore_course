import React, { useContext } from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export const NavBar = observer(()=> {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const signOut = ()=> {
      user.setIsAuth(false)
      navigate(LOGIN_ROUTE)
    }
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE} >BuyDevice</NavLink>
                {user.isAuth ? <Nav className="ml-auto">
                  <Button variant='outline-light' onClick={()=> navigate(ADMIN_ROUTE)} >Control Panel</Button>
                  <Button variant='outline-light' onClick={()=>signOut()} className="mx-2" >Sign out</Button>
                </Nav> :
                <Nav className="ml-auto">
                  <Button variant='outline-light' onClick={()=> navigate(LOGIN_ROUTE)}>Sign In</Button>
                </Nav> }
            </Container>
        </Navbar>
    )
})