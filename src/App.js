import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Products from './pages/products'
import SingleProduct from './pages/singleProduct'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</>
	)
}

export default App
