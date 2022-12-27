import React from 'react'
import Navbar from '../components/Navbar'
import HomeComp from '../components/Home'
import Footer from '../components/Footer'
import LandingHeader from '../components/landingHeader'

const Home = () => {
	return (
		<div>
			<Navbar />
			<LandingHeader />
			<HomeComp />
			<Footer />
		</div>
	)
}

export default Home
