import React, { useEffect } from 'react'
import Navbar from '../components/navbar/topNavbar/Navbar'
import SingleProduct from '../components/productsDisplay/SingleProduct'
import style from '../components/productsDisplay/allProducts.module.css'

const Products = () => {
  useEffect(() => {
    document.title = 'Single Products'
  }, [])
  return (
    <div className={style.singleProductsContainer}>
      <SingleProduct />
    </div>
  )
}

export default Products
