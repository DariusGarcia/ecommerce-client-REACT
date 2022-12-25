import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Products from './pages/products'
import SingleProduct from './pages/singleProduct'
import Home from './pages/home'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
			</Routes>
		</>
	)
}

export default App
