import React, { useEffect } from 'react'
import Navbar from '../components/navbar/topNavbar/Navbar'
import SingleProduct from '../components/productsDisplay/SingleProduct'

const Products = () => {
  useEffect(() => {
    document.title = 'Single Products'
  }, [])
  return (
    <div className='single-products-container'>
      <SingleProduct />
    </div>
  )
}

export default Products
