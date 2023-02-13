import React, { useEffect } from 'react'
import useFetchData from '../../hooks/useFetchData'
import Footer from '../Footer'
import SideNav from '../navbar/sideNavBar/SideNav'
import SimilarProducts from './similarProducts'
import style from './allProducts.module.css'

const SingleProduct = () => {
  const productID = '3'
  const url = `http://localhost:3001/api/product/${productID}`
  const { data, isLoading, error } = useFetchData(url)
  useEffect(() => {
    document.title = { productID }
  }, [])
  return (
    <>
      {isLoading ? (
        <h1 className='loading'>Loading</h1>
      ) : (
        <section className={style.allProductsContainer}>
          <div className={style.allProductsDiv}>
            {/* side navigation bar */}
            <SideNav title={data.product_name} />

            {/* single product section */}
            <section className={style.singleProductSection}>
              <ul>
                <li key={data.id}>
                  <article
                    key={data.id}
                    id={data.id}
                    className={style.allProductsItem}
                  >
                    <img alt='product' src={data.image_url}></img>
                    <h3 className='product-name'>
                      {data.product_name ? data.product_name : 'NOT FOUND'}
                    </h3>
                    <p className={style.productDescription}>
                      {data.description}
                    </p>
                    <button className={style.allProductsBtn}>
                      Add to cart
                    </button>
                  </article>
                  <SimilarProducts />
                </li>
              </ul>
            </section>
          </div>
        </section>
      )}
      <Footer />
    </>
  )
}

export default SingleProduct
