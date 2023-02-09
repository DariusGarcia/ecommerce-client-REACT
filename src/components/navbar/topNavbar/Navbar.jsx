import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useGetDetailsQuery } from '../../../app/services/auth/authService'
import { logout, setCredentials } from '../../../features/auth/authSlice'
import style from '../navbar.module.css'

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
      <nav id={style.hamburgerNav}>
        <div className={style.navbarMobile}>
          <div className={`${style.mobileContainer} ${style.navContainer}`}>
            <input className={style.checkbox} type='checkbox' name='' id='' />
            <div className={style.hamburgerLines}>
              <span className={`${style.line} ${style.line1}`}></span>
              <span className={`${style.line} ${style.line2}`}></span>
              <span className={`${style.line} ${style.line3}`}></span>
            </div>
            <div className={style.logo}>
              <h1>Ecommerce Site</h1>
            </div>
            <div className={style.menuItems}>
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
      <nav id={style.largeNavbar}>
        <div className={style.navTopbar}></div>
        <section>
          <div className={style.navContainer}>
            <ul>
              <li className={style.navLink}>
                <a href='/'>Japanese Sweets</a>
              </li>
              <li className={style.navLink}>
                <a href='/products'>Shop</a>
              </li>
              <li className={style.navLink}>About</li>
            </ul>
          </div>
          <div className={style.navContainer}>
            <div className={style.headerStatus}>
              <p className={style.headerStatusUser}>
                {userInfo ? `Welcome ${userInfo.email}` : ''}
              </p>
              <div className={style.cta}></div>
            </div>
            <ul>
              <div>
                {userInfo ? (
                  <button
                    className={style.logoutBtn}
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                ) : (
                  <ul className={style.authLinksContainer}>
                    <li className={style.navLink}>
                      <NavLink className={style.button} to='/login'>
                        Login
                      </NavLink>
                    </li>
                    <li className={style.navLink}>
                      <NavLink className={style.button} to='/register'>
                        Register
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <li className={style.navLink}>Cart</li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Navbar
