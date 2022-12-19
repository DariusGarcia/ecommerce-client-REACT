import React from 'react'

const navItems = {
	title: 'All Products',
	links: [
		'All Products',
		'Sales',
		'Gift',
		'New Arrivals',
		'Chocolate',
		'Candy',
	],
}

const SideNav = () => {
	return (
		<nav className='all-products-nav'>
			<ul>
				<h2 className='all-products-nav-items'>{navItems.title}</h2>
				{navItems.links.map((link) => {
					return link ? (
						<li className='all-products-nav-items' key={link}>
							{link}
						</li>
					) : null
				})}
			</ul>
		</nav>
	)
}

export default SideNav
