import React, { useState, useEffect } from 'react'

const AllProducts = () => {
	const [allProducts, setAllProducts] = useState([])

	useEffect(() => {
		function fetchAllProducts() {
			fetch('http://localhost:3001/api/product')
				.then((res) => res.json())
				.then((products) => setAllProducts(products))
				.catch((err) => console.error(err))
		}

		fetchAllProducts()
		console.log(allProducts)
	}, [])
	return (
		<section className='all-products-container'>
			<nav className='all-products-nav'>
				<ul>
					{allProducts.map((item) => {
						return item ? (
							<li className='all-products-nav-items'>
								<h3>{item.name}</h3>
								<p>{item.owner}</p>
							</li>
						) : null
					})}
				</ul>
			</nav>
			<section className='all-products-section'></section>
		</section>
	)
}

export default AllProducts
