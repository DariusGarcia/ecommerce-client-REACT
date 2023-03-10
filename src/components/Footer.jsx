import React from 'react'

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div className='nav-container'>
					<ul>
						<li className='nav-link'>Home</li>
						<li className='nav-link'>About</li>
						<li className='nav-link'>Shop</li>
						<li className='nav-link'>Cart</li>
					</ul>
				</div>
				<div className='nav-container'>
					<h1 className='nav-title'>Japanese Sweets</h1>
				</div>
				<div className='nav-container'>
					<ul>
						<li className='nav-link'>Login</li>
						<li className='nav-link'>Register</li>
						<li className='nav-link'>Cart</li>
					</ul>
				</div>
			</footer>
		</>
	)
}

export default Footer
