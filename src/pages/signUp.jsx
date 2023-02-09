import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Error from '../components/Error'
import Spinner from '../components/spinner/Spinner'
import { registerUser } from '../features/auth/authActions'
import style from '../styles/login.module.css'

const SignUp = () => {
  const [customError, setCustomError] = useState(null)
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth || {}
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
    console.log(data.password)
    dispatch(registerUser(data))
  }

  return (
    <div className={style.loginWrapper}>
      <main className={`${style.container} ${style.loginContainer}`}>
        <form
          onSubmit={handleSubmit(submitForm)}
          action='submit'
          className={`${style.loginForm} ${style.container}`}
        >
          <h1 className={style.mainTitle}>Sign Up</h1>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            autoComplete='off'
            {...register('email')}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            autoComplete='off'
            {...register('password')}
            required
          />
          <button type='submit' className={style.button} disabled={loading}>
            {loading ? <Spinner /> : 'Sign Up'}
          </button>
          <a href='/login'>Login to existing account</a>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default SignUp
