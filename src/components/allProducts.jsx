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
						{allProducts.map((product) => {
							return product ? (
								<>
									<div key={product.id}>
										<article
											key={product.id}
											id={product.id}
											className='all-products-item'
										>
											<img alt='product' src={image} key='image'></img>
											<h3 className='product-name' key='title'>
												{product.product_name}
											</h3>
											<p className='product-description' key='description'>
												{product.description}
											</p>
											<button className='all-products-btn' key='addToCart'>
												add to cart
											</button>
										</article>
									</div>
								</>
							) : null
						})}
					</section>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AllProducts
