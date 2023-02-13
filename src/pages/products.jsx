import React, { useEffect } from 'react'
import AllProducts from '../components/productsDisplay/allProducts'
import Navbar from '../components/navbar/topNavbar/Navbar'
import style from '../components/productsDisplay/allProducts.module.css'

const Products = () => {
  useEffect(() => {
    document.title = 'Japanese Sweets- All Products'
  }, [])
  return (
    <div className='products-container'>
      <AllProducts />
    </div>
  )
}

export default Products
