import React, { useEffect } from 'react'
import AllProducts from '../components/allProducts'
import Navbar from '../components/Navbar'

const Products = () => {
	useEffect(() => {
		document.title = 'Japanese Sweets- All Products'
	}, [])
	return (
		<div className='products-container'>
			<Navbar />
			<AllProducts />
		</div>
	)
}

export default Products
