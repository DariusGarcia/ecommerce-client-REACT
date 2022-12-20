import React, { useState, useEffect } from 'react'
import image from '../assets/images/japanese.png'

const SimilarProducts = () => {
	const [similarProducts, setSimilarProducts] = useState([])
	const [singleProduct, setSingleProduct] = useState([])

	function fetchSingleProduct(id) {
		const productID = id
		const baseURL = 'http://localhost:3001'
		const singleProductURL = `${baseURL}/api/product/${productID}`
		fetch(singleProductURL)
			.then((res) => res.json())
			.then((products) => setSingleProduct(products))
			.then(() => console.log(`Single Product GET request: ${singleProduct}`))
			.catch((err) => console.error(err))
	}

	useEffect(() => {
		function fetchSimilarProducts() {
			fetch('http://localhost:3001/api/product')
				.then((res) => res.json())
				.then((products) => setSimilarProducts(products))
				.catch((err) => console.error(err))
		}

		fetchSimilarProducts()
		console.log(similarProducts)
	}, [])

	return (
		<>
			<h2 className='similar-products-title'>Similar Products</h2>
			<section className='similar-products-container'>
				<ul>
					{similarProducts.map((product) => {
						return product ? (
							<li key={product.id}>
								<article
									key={product.id}
									id={product.id}
									className='similar-products-item'
								>
									<img alt='product' src={image}></img>
									<h3 className='product-name'>{product.product_name}</h3>
								</article>
								<button
									onClick={() => fetchSingleProduct(product.id)}
									className='all-products-btn'
								>
									View
								</button>
							</li>
						) : null
					})}
				</ul>
			</section>
		</>
	)
}

export default SimilarProducts
