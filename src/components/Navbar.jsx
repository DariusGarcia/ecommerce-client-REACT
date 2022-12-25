import React from 'react'

const Navbar = () => {
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
