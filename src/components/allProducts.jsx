import React, { useState, useEffect } from 'react'
import image from '../assets/images/japanese.png'
import Footer from './Footer'
import SideNav from './SideNav'

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
		<>
			<section className='all-products-container'>
				<div className='all-products-div'>
					{/* side navigation bar */}
					<SideNav />

					{/* all products section */}
					<section className='all-products-section'>
						<ul>
							{allProducts.map((item) => {
								return item ? (
									<li key={item.id}>
										<article
											key={item.id}
											id={item.id}
											className='all-products-item'
										>
											<img alt='product' src={image}></img>
											<h3 className='product-name'>{item.name}</h3>
											<p className='product-description'>{item.description}</p>
											<button className='all-products-btn'>add to cart</button>
										</article>
									</li>
								) : null
							})}
						</ul>
					</section>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AllProducts
