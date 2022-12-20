import './App.css'
import Products from './pages/products'
import SingleProduct from './pages/singleProduct'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
			</Routes>
		</>
	)
}

export default App
