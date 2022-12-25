import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Login = () => {
	useEffect(() => {
		document.title = 'Login'
	}, [])
	return (
		<div className='login-wrapper'>
			<Navbar />
			<main className='container login-container'>
				<form action='submit' className='login-form container'>
					<h1 className='main-title'>Login</h1>
					<label htmlFor='email'>Email</label>
					<input type='email' autoComplete='off' />
					<label htmlFor='password'>Password</label>
					<input type='password' autoComplete='off' />
					<button>Sign In</button>
					<a href='/signup'>Create account</a>
				</form>
			</main>
			<Footer />
		</div>
	)
}

export default Login
