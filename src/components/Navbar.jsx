import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import '../styles/navbar.css'

const Navbar = () => {
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
			<nav id='hamburger-nav'>
				<div className='navbar-mobile'>
					<div className='mobile-container nav-container'>
						<input className='checkbox' type='checkbox' name='' id='' />
						<div className='hamburger-lines'>
							<span className='line line1'></span>
							<span className='line line2'></span>
							<span className='line line3'></span>
						</div>
						<div className='logo'>
							<h1>Ecommerce Site</h1>
						</div>
						<div className='menu-items'>
							<li>
								<a href='#recipe-search-form'>Recipes</a>
							</li>
							<li>
								<a href='#news-wrapper'>News</a>
							</li>
						</div>
					</div>
				</div>
			</nav>
			<nav id='large-navbar'>
				<div className='nav-topbar'></div>
				<section>
					<div className='nav-container'>
						<ul>
							<li className='nav-link'>
								<a href='/'>Japanese Sweets</a>
							</li>
							<li className='nav-link'>
								<a href='/products'>Shop</a>
							</li>
							<li className='nav-link'>About</li>
						</ul>
					</div>
					<div className='nav-container'>
						<div className='header-status'>
							<p className='header-status-user'>
								{userInfo
									? `Welcome ${userInfo.email}`
									: userInfo !== null
									? `Fetching your profile...`
									: ''}
							</p>
							<div className='cta'></div>
						</div>
						<ul>
							<div className=''>
								{userInfo ? (
									<button
										className='logout-btn'
										onClick={() => dispatch(logout())}
									>
										Logout
									</button>
								) : (
									<ul className='auth-links-container'>
										<li className='nav-link'>
											<NavLink className='button' to='/login'>
												Login
											</NavLink>
										</li>
										<li className='nav-link'>
											<NavLink className='button' to='/register'>
												Register
											</NavLink>
										</li>
									</ul>
								)}
							</div>

							<li className='nav-link'>Cart</li>
						</ul>
					</div>
				</section>
			</nav>
		</>
	)
}

export default Navbar
