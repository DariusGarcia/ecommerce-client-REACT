import React, { useEffect } from 'react'
import AllProducts from '../components/allProducts'
import Navbar from '../components/Navbar'

const Products = () => {
	useEffect(() => {
		document.title = 'Ecommerce site - Products'
	}, [])
	return (
		<>
			<Navbar />
			<AllProducts />
		</>
	)
}

export default Products
