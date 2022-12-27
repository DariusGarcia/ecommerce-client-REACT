import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const url = 'http://localhost:3001/api/user/login'

const Login = () => {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')

	const { loading, userInfo, error } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const { register, handleSubmit } = useForm()

	const navigate = useNavigate()

	// redirect authenticated user to profile screen
	useEffect(() => {
		document.title = 'Japanese Sweets - Login'
		if (userInfo) {
			navigate('/products')
		}
	}, [navigate, userInfo])

	const submitForm = (data) => {
		dispatch(userLogin(data))
	}

	return (
		<div className='login-wrapper'>
			<Navbar />
			<main className='container login-container'>
				<form
					onSubmit={handleSubmit(submitForm)}
					action='submit'
					className='login-form container'
				>
					<h1 className='main-title'>Login</h1>
					<label htmlFor='email'>Email</label>
					<input
						// onChange={(e) => setEmail(e.target.value)}
						// value={email}
						type='email'
						autoComplete='off'
						{...register('email')}
						required
					/>
					<label htmlFor='password'>Password</label>
					<input
						// onChange={(e) => setPassword(e.target.value)}
						// value={password}
						type='password'
						autoComplete='off'
						{...register('password')}
						required
					/>
					<button type='submit'> {loading ? 'loading...' : 'Login'}</button>
					<a href='/login'>Login to existing account</a>

					{/* <div className='message'>{message ? <p>{[message]}</p> : null}</div> */}
				</form>
			</main>
			<Footer />
		</div>
	)
}

export default Login
