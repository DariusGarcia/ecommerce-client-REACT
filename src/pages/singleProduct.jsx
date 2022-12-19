import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SingleProduct from '../components/SingleProduct'

const Products = () => {
	useEffect(() => {
		document.title = 'Single Products'
	}, [])
	return (
		<div className='single-products-container'>
			<Navbar />
			<SingleProduct />
		</div>
	)
}

export default Products
