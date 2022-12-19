import React, { useState, useEffect } from 'react'
import image from '../assets/images/japanese.png'
import Footer from './Footer'
import SideNav from './SideNav'
import SimilarProducts from './similarProducts'

const productID = 19
const baseURL = 'http://localhost:3001'
const singleProductURL = `${baseURL}/api/product/${productID}`

const SingleProduct = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		function fetchSingleProduct() {
			fetch(singleProductURL)
				.then((res) => res.json())
				.then((products) => setProduct(products))
				.catch((err) => console.error(err))
		}
		fetchSingleProduct()
	}, [])

	return (
		<>
			<section className='all-products-container'>
				<div className='all-products-div'>
					{/* side navigation bar */}
					<SideNav title={product.name} />

					{/* single product section */}
					<section className='single-product-section'>
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
									<button className='all-products-btn'>Add to cart</button>
								</article>
								<SimilarProducts />
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
