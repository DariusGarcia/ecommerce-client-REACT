import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import Products from './pages/products'
import SingleProduct from './pages/singleProduct'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<SignUp />} />
			</Routes>
		</Router>
	)
}

export default App
