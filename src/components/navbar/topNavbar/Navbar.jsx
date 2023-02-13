import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetDetailsQuery } from '../../../app/services/auth/authService'
import { logout, setCredentials } from '../../../features/auth/authSlice'
import style from '../navbar.module.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth || {})
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  // const { data, isFetching } = useGetDetailsQuery('userDetails', {
  // 	pollingInterval: 900000, // 15mins
  // })

  // useEffect(() => {
  // 	if (data) dispatch(setCredentials(data))
  // }, [data, dispatch])

  return (
    <>
      <div className={style.navTopbar}></div>
      <Navbar bg='light' expand='lg' className={style.mainNavbar}>
        <Container>
          <Navbar.Brand href='/'>Japanese Sweets</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto gap-4'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/products'>Shop</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <NavDropdown title='Profile' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Settings</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
