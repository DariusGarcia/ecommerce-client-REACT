import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HandleSubmit from '../hooks/handleSubmit'

const url = 'http://localhost:3001/api/user/register'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [error, setError] = useState('')

	useEffect(() => {
		document.title = 'Sign Up - Create a free account'
	}, [])

	const fetchData = async (event) => {
		event.preventDefault()
		const body = {
			email: email,
			password: password,
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}

		try {
			const response = await fetch(url, options)
			const data = await response.json()
			return data
		} catch (error) {
			setError(error)
		}
		// setIsLoading(false)
	}

	return (
		<div className='login-wrapper'>
			<Navbar />
			<main className='container login-container'>
				<form
					onSubmit={(e) => fetchData(e)}
					action='submit'
					className='login-form container'
				>
					<h1 className='main-title'>Sign Up</h1>
					<label htmlFor='email'>Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='email'
						autoComplete='off'
					/>
					<label htmlFor='password'>Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type='password'
						autoComplete='off'
					/>
					<button type='submit'>Sign Up</button>
					<a href='/login'>Login to existing account</a>

					{/* <div className='message'>{message ? <p>{[message]}</p> : null}</div> */}
				</form>
			</main>
			<Footer />
		</div>
	)
}

export default SignUp
