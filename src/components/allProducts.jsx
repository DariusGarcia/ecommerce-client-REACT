import React, { useState, useEffect } from 'react'
import image from '../assets/images/japanese.png'
import Footer from './Footer'
import SideNav from './SideNav'
import { useGetAllProductsQuery } from '../features/products/productsSlice'
import Spinner from './Spinner'
import Error from './Error'

const AllProducts = () => {
	const { data, error, isLoading, isSuccess, isFetching, isError } =
		useGetAllProductsQuery()

	// if (isError) return <div>An error has occurred!</div>
	if (isFetching && !data) return <Spinner />

	if (data) {
		console.log(data)
	}
	return (
		<>
			<section className='all-products-container'>
				<div className='all-products-div'>
					{/* side navigation bar */}
					<SideNav />

					{/* all products section */}
					<section className='all-products-section'>
						{error && (
							<Error>
								<h1>
									An Error has just occurred! Please try again or contact us...
								</h1>
							</Error>
						)}
						{data
							? data.map((product) => {
									return product ? (
										<div key={product.id}>
											<article id={product.id} className='all-products-item'>
												<img alt='product' src={image}></img>
												<h3 className='product-name'>{product.product_name}</h3>
												<p className='product-description'>
													{product.description}
												</p>
												<p className='product-price'>${product.price}</p>
												<button className='all-products-btn'>
													add to cart
												</button>
											</article>
										</div>
									) : null
							  })
							: 'no data available'}
					</section>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default AllProducts
