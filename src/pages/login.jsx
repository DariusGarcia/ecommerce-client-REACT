import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import Footer from '../components/Footer'
import Navbar from '../components/navbar/topNavbar/Navbar'
import Spinner from '../components/spinner/Spinner'
import style from '../styles/login.module.css'

const Login = () => {
  const { userInfo, loading, error } = useSelector((state) => state.auth || {})
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
    <div className={style.loginWrapper}>
      <main className={`${style.container} ${style.loginContainer}`}>
        <form
          onSubmit={handleSubmit(submitForm)}
          action='submit'
          className={`${style.loginForm} ${style.container}`}
        >
          <h1 className={style.mainTitle}>Login</h1>
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
            {loading ? <Spinner /> : 'Login'}
          </button>
          <a href='/register'>Create a new account</a>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Login
