import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import { registerUser } from '../features/auth/authActions'

const SignUp = () => {
	const [customError, setCustomError] = useState(null)
	const { loading, userInfo, error, success } = useSelector(
		(state) => state.auth
	)
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const navigate = useNavigate()
	useEffect(() => {
		document.title = 'Sign Up - Create a free account'
		// redirect user to login page if registration was successful
		if (success) navigate('/login')
	}, [navigate, userInfo, success])

	const submitForm = (data) => {
		// transform email string to lowercase to avoid case sensitivity issues in login
		data.email = data.email.toLowerCase()
		dispatch(registerUser(data))
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
					{error && <Error>{error}</Error>}
					{customError && <Error>{customError}</Error>}
					<h1 className='main-title'>Sign Up</h1>
					<label htmlFor='email'>Email</label>
					<input
						{...register('email')}
						required
						type='email'
						autoComplete='off'
					/>
					<label htmlFor='password'>Password</label>
					<input
						{...register('password')}
						required
						type='password'
						autoComplete='off'
					/>
					<button type='submit' className='button' disabled={loading}>
						{loading ? <Spinner /> : 'Register'}
					</button>
					<a href='/login'>Login to existing account</a>

					{/* <div className='message'>{message ? <p>{[message]}</p> : null}</div> */}
				</form>
			</main>
			<Footer />
		</div>
	)
}

export default SignUp
