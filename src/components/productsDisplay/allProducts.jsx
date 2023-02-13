import React, { useState, useEffect } from 'react'
import image from '../../assets/images/japanese.png'
import Footer from '../Footer'
import SideNav from '../navbar/sideNavBar/SideNav'
import { useGetAllProductsQuery } from '../../features/products/productsSlice'
import Spinner from '../spinner/Spinner'
import Error from '../Error'
import style from './allProducts.module.css'

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
      <section className={style.allProductsContainer}>
        <div className={style.allProductsDiv}>
          {/* side navigation bar */}
          <SideNav />

          {/* all products section */}
          <section className={style.allProductsSection}>
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
                      <article
                        id={product.id}
                        className={style.allProductsItem}
                      >
                        <img alt='product' src={image}></img>
                        <h3 className={style.productName}>
                          {product.product_name}
                        </h3>
                        <p className={style.productDescription}>
                          {product.description}
                        </p>
                        <p className={style.productPrice}>${product.price}</p>
                        <button className={style.allProductsBtn}>
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
