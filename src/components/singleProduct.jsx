import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import image from '../assets/images/japanese.png'
import useFetchData from '../hooks/useFetchData'
import Footer from './Footer'
import SideNav from './SideNav'
import SimilarProducts from './similarProducts'

const SingleProduct = () => {
	const productID = '3'
	const url = `http://localhost:3001/api/product/${productID}`
	const { data, isLoading, error } = useFetchData(url)

	return (
		<>
			{isLoading ? (
				<h1 className='loading'>Loading</h1>
			) : (
				<section className='all-products-container'>
					<div className='all-products-div'>
						{/* side navigation bar */}
						<SideNav title={data.product_name} />

						{/* single product section */}
						<section className='single-product-section'>
							<ul>
								<li key={data.id}>
									<article
										key={data.id}
										id={data.id}
										className='all-products-item'
									>
										<img alt='product' src={data.image_url}></img>
										<h3 className='product-name'>
											{data.product_name ? data.product_name : 'NOT FOUND'}
										</h3>
										<p className='product-description'>{data.description}</p>
										<button className='all-products-btn'>Add to cart</button>
									</article>
									<SimilarProducts />
								</li>
							</ul>
						</section>
					</div>
				</section>
			)}
			<Footer />
		</>
	)
}

export default SingleProduct
