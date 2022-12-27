import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import '../styles/navbar.css'

const Navbar = () => {
	const { userInfo } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	// automatically authenticate user if token is found
	const { data, isFetching } = useGetDetailsQuery('userDetails', {
		pollingInterval: 900000, // 15mins
	})

	useEffect(() => {
		if (data) dispatch(setCredentials(data))
	}, [data, dispatch])

	return (
		<>
			<nav id='hamburger-nav' class=''>
				<div class='navbar-mobile'>
					<div class='mobile-container nav-container'>
						<input class='checkbox' type='checkbox' name='' id='' />
						<div class='hamburger-lines'>
							<span class='line line1'></span>
							<span class='line line2'></span>
							<span class='line line3'></span>
						</div>
						<div class='logo'>
							<h1>Ecommerce Site</h1>
						</div>
						<div class='menu-items'>
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
					<div className='header-status'>
						<span>
							{isFetching
								? `Fetching your profile...`
								: userInfo !== null
								? `Logged in as ${userInfo.email}`
								: "You're not logged in"}
							{/* {userInfo && `Logged in as ${userInfo.email}`}
          {userInfo === null && "You're not logged in"} */}
						</span>
						<div className='cta'>
							{userInfo ? (
								<button className='button' onClick={() => dispatch(logout())}>
									Logout
								</button>
							) : (
								<NavLink className='button' to='/login'>
									Login
								</NavLink>
							)}
						</div>
					</div>

					<div className='nav-container'>
						<ul>
							<li className='nav-link'>
								{' '}
								<a href='/login'>Login</a>
							</li>
							<li className='nav-link'>
								{' '}
								<a href='/signup'>Register</a>
							</li>
							<li className='nav-link'>Cart</li>
						</ul>
					</div>
				</section>
			</nav>
		</>
	)
}

export default Navbar
