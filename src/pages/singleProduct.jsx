import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SingleProduct from '../components/singleProduct'

const Products = () => {
	useEffect(() => {
		document.title = 'All Products'
	}, [])
	return (
		<div className='products-container'>
			<Navbar />
			<SingleProduct />
		</div>
	)
}

export default Products
