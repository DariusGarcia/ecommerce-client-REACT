import React, { useState, useEffect } from 'react'
import image from '../assets/images/japanese.png'
import Footer from './Footer'
import SideNav from './SideNav'

const SingleProduct = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		function fetchSingleProducts() {
			fetch('http://localhost:3001/api/product/19')
				.then((res) => res.json())
				.then((products) => setProduct(products))
				.catch((err) => console.error(err))
		}

		fetchSingleProducts()
	}, [])

	return (
		<>
			<section className='all-products-container'>
				<div className='all-products-div'>
					{/* side navigation bar */}
					<SideNav />

					{/* single product section */}
					<section className='all-products-section'>
						<ul>
							<li key={product.id}>
								<article
									key={product.id}
									id={product.id}
									className='all-products-item'
								>
									<img alt='product' src={image}></img>
									<h3 className='product-name'>{product.name}</h3>
									<p className='product-description'>{product.description}</p>
									<button className='all-products-btn'>add to cart</button>
								</article>
							</li>
						</ul>
					</section>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default SingleProduct
