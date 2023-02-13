import React from 'react'
import style from '../../productsDisplay/allProducts.module.css'
const navItems = {
  title: 'All Products',
  links: [
    'All Products',
    'Sales',
    'Gift',
    'New Arrivals',
    'Chocolate',
    'Candy',
  ],
}

const SideNav = ({ title }) => {
  return (
    <nav className={style.allProductsNav}>
      <ul>
        <h2 className={style.allProductsNavItems}>{title || navItems.title}</h2>
        {navItems.links.map((link) => {
          return link ? (
            <li className={style.allProductsNavItems} key={link}>
              {link}
            </li>
          ) : null
        })}
      </ul>
    </nav>
  )
}

export default SideNav
