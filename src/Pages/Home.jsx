import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AmalB from '../Components/AmalB'
import Products from '../Components/Products'
import Baby from '../Components/Baby'
import FeaturedProducts from '../Components/FeaturedProducts'
import Stokist from '../Components/Stokist'
import Customers from '../Components/Customers'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <AmalB/>
        <Products/>
        <Baby/>
        <FeaturedProducts/>
        <Stokist/>
        <Customers/>
        <Footer/>
       
    </div>
  )
}

export default Home